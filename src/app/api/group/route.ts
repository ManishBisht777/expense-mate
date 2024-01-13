import { db } from "@/db";
import { groups, usersToGroups } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { createGroupSchema } from "@/types/split";
import { group } from "console";
import { randomUUID } from "crypto";
import { getServerSession } from "next-auth";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }
    const json = await req.json();
    const body = createGroupSchema.parse(json);

    // const { members } = body;
    // let userIds = [];

    // members.forEach(async (email) => {
    //   const user = await db.query.users.findFirst({
    //     where: (member, { eq }) => eq(member.email, email),
    //   });
    //   if (user) userIds.push(user.id);
    //   else {
    //     //send email to user to join the group
    //   }
    // });

    await db
      .insert(groups)
      .values({
        id: randomUUID(),
        name: body.name,
        description: body.description,
        createdBy: session.user.id,
      })
      .returning({ insertedId: groups.id });

    // const values = members.map((email) => ({
    //   userId: "482a0544-88ea-4af0-8af4-382bdfb477e5",
    //   groupId: group[0].insertedId,
    // }));

    // await db.insert(usersToGroups).values(values).execute();

    return new Response("Group created succesfully", { status: 200 });
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
