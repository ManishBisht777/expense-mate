"use server";

import { db } from "@/db";
import { expenses, userToExpense, users } from "@/db/schema";
import { UserInGroupExpense } from "@/types/split";
import { eq, sql } from "drizzle-orm";

export const settleExpense = async (
  expenseId: string,
  userId: string,
  isSettled: boolean
) => {
  try {
    await db
      .update(userToExpense)
      .set({ settled: !isSettled })
      .where(
        eq(userToExpense.expenseId, expenseId) &&
          eq(userToExpense.userId, userId)
      );
  } catch (error) {
    console.log(error);
  }
};

export const getExpense = async (expenseId: string) => {
  const expense = await db
    .select({
      id: userToExpense.expenseId,
      expenseId: userToExpense.expenseId,
      users: sql<UserInGroupExpense[]>`(
        SELECT json_agg(users)
        FROM (
          SELECT ${users.email}, ${users.name}, ${userToExpense.settled} , ${userToExpense.amount} , ${users.id}
          FROM ${users}
          INNER JOIN ${userToExpense} ON ${userToExpense.userId} = ${users.id}
        ) AS users
      )`.as("users"),
      name: expenses.name,
      amount: expenses.amount,
      date: expenses.date,
      description: expenses.description,
    })
    .from(userToExpense)
    .leftJoin(users, eq(userToExpense.userId, users.id))
    .leftJoin(expenses, eq(userToExpense.expenseId, expenses.id))
    .where(eq(userToExpense.expenseId, expenseId));

  return expense[0] || null;
};
