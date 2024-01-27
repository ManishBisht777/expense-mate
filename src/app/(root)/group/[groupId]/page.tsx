import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getGroupById, getGroupExpense } from "@/lib/actions/group";
import SettleExpense from "../../splits/components/SettleExpense";

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
      <h1 className="text-3xl font-semibold capitalize">{group.name}</h1>
      <p>
        {group.expensesCount} Sum:{group.expensesSum}
      </p>

      {/* <pre>
        <code>{JSON.stringify(expensesInGroup, null, 2)}</code>
      </pre> */}

      <Tabs defaultValue="expenses" className="w-[400px] mt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses">
          {expensesInGroup.map((expense) => (
            <div key={expense.id}>
              <h1 className="bg-blue-400">{expense.name}</h1>
              {expense.users?.map((user) => {
                return (
                  <p key={user.id}>
                    {user.name}
                    <SettleExpense
                      userId={user.id}
                      expenseId={expense.id}
                      isSettled={user.settled}
                    />
                  </p>
                );
              })}
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
