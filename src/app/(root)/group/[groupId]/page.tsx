import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getGroup } from "@/lib/actions/group";
import SettleExpense from "../../splits/components/SettleExpense";

interface Props {
  params: { groupId: string };
}

export default async function page({ params: { groupId } }: Props) {
  const group = await getGroup(groupId);
  if (!group) return null;

  console.log(group);

  return (
    <div>
      <h1 className="text-3xl font-semibold capitalize">{group.name}</h1>
      <p>
        {group.expensesCount} Sum:{group.expensesSum}
      </p>
      <Tabs defaultValue="expenses" className="w-[400px] mt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="expenses">
          {group.expenses.map((expense) => (
            <div key={expense.id}>
              <p>{expense.name}</p>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="users">
          <div>
            {group.users.map((user) => (
              <div key={user.email}>
                <p>
                  {user.email} settled: {user.settled ? "true" : "false"}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div></div>
    </div>
  );
}
