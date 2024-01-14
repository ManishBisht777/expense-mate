import { db } from "@/db";
import { groups, users, usersToGroups } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { group } from "console";
import { eq, sql } from "drizzle-orm";
import { getServerSession } from "next-auth";
import z from "zod";

const routeContextSchema = z.object({
  params: z.object({
    groupId: z.string(),
  }),
});

export async function GET(
  req: Request,
  context: z.infer<typeof routeContextSchema>
) {
  try {
    const { params } = routeContextSchema.parse(context);

    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const result = await db
      .select({
        users: sql`json_agg(row_to_json(${users}.*))`,
      })
      .from(groups)
      .leftJoin(usersToGroups, eq(groups.id, usersToGroups.groupId))
      .leftJoin(users, eq(usersToGroups.userId, users.id))
      .where(eq(groups.id, params.groupId))
      .groupBy(groups.id);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
