import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getGroupById, getGroupExpense } from "@/lib/actions/group";
import { IndianRupee, MoveUpRight, Plus } from "lucide-react";
import { columns } from "./components/column";

interface Props {
  params: { groupId: string };
}

export default async function page({ params: { groupId } }: Props) {
  const group = await getGroupById(groupId);
  if (!group) return null;

  const expensesInGroup = await getGroupExpense(groupId);
  if (!expensesInGroup) return null;

  return (
    <div>
      <div className="bg-grid my-10">
        <div className=" flex items-center flex-col space-y-1">
          <h1 className="capitalize text-3xl font-bold text-center max-w-xl">
            {group.name}
          </h1>
          <p className="flex gap-1 items-center text-muted-foreground">
            {group.description}
          </p>
        </div>

        <div className="space-y-1 flex justify-between items-center mt-10">
          <div>
            <h1 className="font-medium">Net Total</h1>
            <p className="text-3xl font-bold flex items-center w-fit relative">
              <IndianRupee
                className="absolute top-0 -right-5 text-muted-foreground"
                size={16}
              />
              {group.expensesSum || "No expense added"}
            </p>
            <p className="flex items-center text-sm text-muted-foreground font-medium">
              <MoveUpRight size={15} className="text-green-600 mr-2" /> 3% prev
              month
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="px-6 py-8 border rounded-lg w-4/5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Expenses</h2>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi molestiae illum qui
            </p>
          </div>
        </div>
        <div className="px-6 py-8 border rounded-lg bg-grid-2 w-1/5 space-y-1">
          <h4 className="text-xl font-semibold">{group.expensesCount}</h4>
          <p className="text-muted-foreground text-sm">Expenses</p>
        </div>
      </div>

      <div className="my-6 flex justify-end gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="flex items-center px-6">
          <Plus size={20} className="mr-2" /> Add expense
        </Button>
      </div>

      <DataTable columns={columns} data={expensesInGroup} />
    </div>
  );
}
