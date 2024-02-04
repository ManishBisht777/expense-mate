"use client";

import { Badge } from "@/components/ui/badge";
import { UserInGroupExpense } from "@/types/split";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.

export const columns: ColumnDef<UserInGroupExpense>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "settled",
    header: "Status",
    cell: ({ row }) => {
      const isSettled = row.getValue("settled");

      return (
        <Badge variant={isSettled ? "default" : "secondary"}>
          {isSettled ? "Settled" : "Not-Settled"}{" "}
        </Badge>
      );
    },
  },
];
