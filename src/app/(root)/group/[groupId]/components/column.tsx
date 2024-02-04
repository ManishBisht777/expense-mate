"use client";

import { Badge } from "@/components/ui/badge";
import { UserDetailsInsideGroup } from "@/types/split";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, Eye, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// This type is used to define the shape of our data.
export type Expense = {
  id: string;
  name: string;
  amount: number;
  description: string | null;
  date: Date;
  groupId: string;
  createdBy: string;
  splitType: string | null;
  users: UserDetailsInsideGroup[];
};

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
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
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date = row.getValue("date");
      return <div>{new Date(date as Date).toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "users",
    header: "Users",
    cell: ({ row }) => {
      const users: UserDetailsInsideGroup[] = row.getValue("users");

      return (
        <div>
          {users?.map((user, index) => (
            <Badge key={index}>{user.name}</Badge>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <Copy size={14} className="mr-2" /> Copy expense ID
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="flex items-center"
                href={`/expense/${payment.id}`}
              >
                <Eye className="mr-2" size={14} /> View expense details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash className="mr-2" size={14} /> Delete expense
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
