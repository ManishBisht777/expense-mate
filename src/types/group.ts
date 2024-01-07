import * as z from "zod";

export const createGroupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string(),
  members: z.array(z.string()),
});
