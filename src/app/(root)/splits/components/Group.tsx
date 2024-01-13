import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Session } from "next-auth";
import AddExpense from "./AddExpense";
import GroupOptions from "./GroupOptions";

// TODO: Add types
interface GroupProps {
  group: any;
  session: Session;
}

export default function Group({ group, session }: GroupProps) {
  return (
    <Card className="col-span-1 relative">
      <CardHeader>
        <CardTitle className="text-lg capitalize">{group.name}</CardTitle>
      </CardHeader>

      <CardContent className="text-center space-y-2">
        <p className="text-2xl font-semibold">25,500</p>
        <Separator />
        <div className="flex justify-center gap-4 text-sm">
          <div>
            <p>4</p>
            <p className="text-muted-foreground">Members</p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div>
            <p>36</p>
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

      <GroupOptions />
    </Card>
  );
}
