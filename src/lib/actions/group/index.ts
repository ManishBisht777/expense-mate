import { db } from "@/db";
import {
  expenses,
  groups,
  userToExpense,
  users,
  usersToGroups,
} from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";
import { getServerSession } from "next-auth";

export const getGroup = async (groupId: string) => {
  const session = await getServerSession(authOptions);
  if (!session) return null;

  const groupWithDetails = await db
    .select({
      id: groups.id,
      name: groups.name,
      description: groups.description,
      createdBy: groups.createdBy,
      expensesCount: sql<number>`count(${expenses.id})`.as("expenses_count"),
      expensesSum: sql<number>`sum(${expenses.amount})`.as("expenses_sum"),
      // users: sql`(
      //   SELECT json_agg(user_details)
      //   FROM (
      //     SELECT ${users.email}, ${users.name}, ${userToExpense.settled} , ${userToExpense.expenseId}
      //     FROM ${users}
      //     INNER JOIN ${usersToGroups} ON ${usersToGroups.userId} = ${users.id}
      //     INNER JOIN ${userToExpense} ON ${userToExpense.userId} = ${users.id}
      //     WHERE ${usersToGroups.groupId} = ${groups.id}
      //   ) AS user_details
      // )`.as("users"),
      // expenses: sql`(
      //     SELECT json_agg(expense_details)
      //     FROM (
      //       SELECT ${expenses.id}, ${expenses.amount}, ${expenses.name}
      //       FROM ${expenses}
      //       WHERE ${expenses.groupId} = ${groups.id}
      //     ) AS expense_details
      //   )`.as("expenses"),
    })
    .from(groups)
    .leftJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
    .leftJoin(users, eq(usersToGroups.userId, users.id))
    .leftJoin(expenses, eq(groups.id, expenses.groupId))
    .where(eq(groups.createdBy, session.user.id) && eq(groups.id, groupId))
    .groupBy(groups.id);

  return groupWithDetails[0] || null;
};

export const getGroupById = async (groupId: string) => {
  const group = await db
    .select({
      id: groups.id,
      name: groups.name,
      description: groups.description,
      createdBy: groups.createdBy,
      expensesCount: sql<number>`count(${expenses.id})`.as("expenses_count"),
      expensesSum: sql<number>`sum(${expenses.amount})`.as("expenses_sum"),
    })
    .from(groups)
    .leftJoin(expenses, eq(groups.id, expenses.groupId))
    .where(eq(groups.id, groupId))
    .groupBy(groups.id);

  return group[0] || null;
};

export const getGroupExpense = async (groupId: string) => {
  const groupExpense = await db
    .select({
      id: expenses.id,
      name: expenses.name,
      amount: expenses.amount,
      description: expenses.description,
      date: expenses.date,
      groupId: expenses.groupId,
      createdBy: expenses.createdBy,
      splitType: expenses.splitType,
      users: sql`(
        SELECT json_agg(user_details)
        FROM (
          SELECT ${users.email}, ${users.name}, ${userToExpense.settled} , ${users.id}
          FROM ${users}
          INNER JOIN ${userToExpense} ON ${userToExpense.userId} = ${users.id}
          WHERE ${userToExpense.expenseId} = ${expenses.id}
        ) AS user_details
      )`.as("users"),
    })
    .from(expenses)
    .leftJoin(userToExpense, eq(expenses.id, userToExpense.expenseId))
    .leftJoin(users, eq(userToExpense.userId, users.id))
    .where(eq(expenses.groupId, groupId));

  return groupExpense;
};

export const getUsersInExpense = async (expenseId: string) => {
  const usersInExpense = await db
    .select({
      userId: userToExpense.userId,
      expenseId: userToExpense.expenseId,
      settled: userToExpense.settled,
      email: users.email,
      name: users.name,
    })
    .from(userToExpense)
    .leftJoin(users, eq(userToExpense.userId, users.id))
    .where(eq(userToExpense.expenseId, expenseId));
  return usersInExpense;
};
