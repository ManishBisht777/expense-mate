import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter } from "lucide-react";
import Group from "./components/Group";
import AddGroup from "./components/AddGroup";
import { db } from "@/db";
import { eq, sql } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { groups, users, usersToGroups } from "@/db/schema";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const allGroups = await db
    .select({
      id: groups.id,
      name: groups.name,
      description: groups.description,
      createdBy: groups.createdBy,
      members: sql<string>`array_agg(${users.email})`,
    })
    .from(groups)
    .leftJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
    .leftJoin(users, eq(usersToGroups.userId, users.id))
    .where(eq(groups.createdBy, session.user.id))
    .groupBy(groups.id);

  return (
    <>
      <div className="space-y-1 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Splits</h1>
          <p className="text-sm text-muted-foreground">
            Effortlessly split expenses between people
          </p>
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" /> Add group
        </Button>
      </div>
      <Separator />
      <div className="flex gap-4">
        <div className="px-6 py-8 border rounded-lg w-4/5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi molestiae illum qui
            </p>
          </div>
          <AddGroup />
        </div>
        <div className="px-6 py-8 border rounded-lg bg-gray-100 w-1/5 space-y-1">
          <h4 className="text-xl font-semibold">$1244+ dollar</h4>
          <p className="text-muted-foreground text-sm">Splitted</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {allGroups.map((group) => (
          <Group key={group.id} group={group} session={session} />
        ))}
      </div>
    </>
  );
}
