import { DataTable } from "@/components/ui/data-table";
import { getExpense } from "@/lib/actions/expense";
import { IndianRupee } from "lucide-react";
import { columns } from "./column";

interface Props {
  params: { expenseId: string };
}

export default async function page({ params: { expenseId } }: Props) {
  const expense = await getExpense(expenseId);

  return (
    <div>
      <div className="bg-grid my-5">
        <div className=" flex items-center flex-col space-y-1">
          <h1 className="capitalize text-3xl font-bold text-center max-w-xl">
            {expense.name}
          </h1>
          <p className="flex gap-1 items-center text-muted-foreground">
            {expense.description}
          </p>
        </div>

        <div className="space-y-1 flex justify-between items-center mt-10">
          <div>
            <h1 className="font-medium">Amount</h1>
            <p className="text-3xl font-bold flex items-center w-fit relative">
              <IndianRupee
                className="absolute top-0 -right-5 text-muted-foreground"
                size={16}
              />
              {expense.amount}
            </p>
          </div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(expense, null, 2)}</pre> */}
      <DataTable columns={columns} data={expense.users} />
    </div>
  );
}
