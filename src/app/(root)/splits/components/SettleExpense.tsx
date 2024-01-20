"use client";

import { Button } from "@/components/ui/button";
import { settleExpense } from "@/lib/actions/expense";

interface SettleExpenseProps {
  userId: string;
  expenseId: string;
  isSettled: boolean;
}

export default function SettleExpense({
  userId,
  expenseId,
  isSettled,
}: SettleExpenseProps) {
  return (
    <div>
      <Button onClick={() => settleExpense(expenseId, userId, isSettled)}>
        {isSettled ? "Un-Settle" : "Settle"} Expense
      </Button>
    </div>
  );
}
