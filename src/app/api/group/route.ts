import { db } from "@/db";
import { groups } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { createGroupSchema } from "@/types/group";
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

    db.insert(groups).values({
      id: randomUUID(),
      name: body.name,
      description: body.description,
    });

    return new Response("Group created succesfully", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}
