import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import GroupOptions from "./GroupOptions";

interface GroupProps {}

export default function Group({}: GroupProps) {
  return (
    <Card className="col-span-1 relative">
      <CardHeader>
        <CardTitle className="text-lg">Banglore Mates</CardTitle>
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
        <Button className="w-full">Add expense</Button>
      </CardFooter>

      <GroupOptions />
    </Card>
  );
}
