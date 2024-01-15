import { db } from "@/db";
import { expenses, userToExpense } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { createGroupExpenseSchema } from "@/types/split";
import { randomUUID } from "crypto";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }
    const json = await req.json();
    const body = createGroupExpenseSchema.parse(json);
    const { splitColumn } = body;

    const expense = await db
      .insert(expenses)
      .values({
        id: randomUUID(),
        name: body.name,
        amount: parseInt(body.amount),
        description: body.description,
        date: body.date,
        groupId: body.groupId,
        createdBy: session.user.id,
        splitType: body.split,
      })
      .returning({ insertedId: expenses.id });

    const splitColumnPromises = splitColumn.map(async (member) => {
      db.insert(userToExpense).values({
        userId: member.id,
        amount: member.split,
        expenseId: expense[0].insertedId,
        settled: false,
      });
    });

    await Promise.all(splitColumnPromises);
    return new Response("Expense added succesfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(null, { status: 500 });
  }
}
