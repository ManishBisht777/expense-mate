"use server";

import { db } from "@/db";
import { userToExpense } from "@/db/schema";
import { eq } from "drizzle-orm";

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
      userId: userToExpense.userId,
      settled: userToExpense.settled,
    })
    .from(userToExpense)
    .where(eq(userToExpense.expenseId, expenseId));

  return expense[0] || null;
};
