import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Session } from "next-auth";
import Link from "next/link";
import AddExpense from "./AddExpense";
import GroupOptions from "./GroupOptions";

export interface Group {
  id: string;
  name: string;
  description: string | null;
  createdBy: string;
  members: string[];
  expensesCount: number;
  expensesSum: number;
}

interface GroupProps {
  group: Group;
  session: Session;
}

export default async function Group({ group, session }: GroupProps) {
  return (
    <Card className="col-span-1 relative bg-grid-3">
      <CardHeader>
        <Link className="cursor-pointer" href={`/group/${group.id}`}>
          <CardTitle className="text-lg capitalize">{group.name}</CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="text-center space-y-2">
        <p className="text-2xl font-semibold">{group.expensesSum || 0}</p>
        <Separator />
        <div className="flex justify-center gap-4 text-sm">
          <div>
            <p>{group.members.length}</p>
            <p className="text-muted-foreground">Members</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <p>{group.expensesCount}</p>
            <p className="text-muted-foreground">Expenses</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <p>35K</p>
            <p className="text-muted-foreground">Budget</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <AddExpense groupId={group.id} session={session} />
      </CardFooter>

      <GroupOptions group={group} />
    </Card>
  );
}
