import { db } from "@/db";
import { expenses, groups, users, usersToGroups } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";
import { getServerSession } from "next-auth";

interface Props {
  params: { groupId: string };
}

const getgGroup = async (groupId: string) => {
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
      users: sql`(
        SELECT json_agg(user_details)
        FROM (
          SELECT ${users.email}, ${users.name} 
          FROM ${users}
          INNER JOIN ${usersToGroups} ON ${usersToGroups.userId} = ${users.id}
          WHERE ${usersToGroups.groupId} = ${groups.id}
        ) AS user_details
      )`.as("users"),
      expenses: sql`(
        SELECT json_agg(expense_details)
        FROM (
          SELECT ${expenses.id}, ${expenses.amount}, ${expenses.name} 
          FROM ${expenses}
          WHERE ${expenses.groupId} = ${groups.id}
        ) AS expense_details
      )`.as("expenses"),
    })
    .from(groups)
    .leftJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
    .leftJoin(users, eq(usersToGroups.userId, users.id))
    .leftJoin(expenses, eq(groups.id, expenses.groupId))
    .where(eq(groups.createdBy, session.user.id) && eq(groups.id, groupId))
    .groupBy(groups.id);

  return groupWithDetails[0] || null;
};

export default async function page({ params: { groupId } }: Props) {
  const group = await getgGroup(groupId);
  if (!group) return null;

  console.log(group);

  return (
    <div>
      <h1>{group.name}</h1>
      <p>
        {group.expensesCount} Sum:{group.expensesSum}
      </p>
      <div>
        {group.users.map((user) => (
          <div key={user.email}>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <div>
        {group.expenses.map((expense) => (
          <div key={expense.id}>
            <p>{expense.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
