import { users } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type UserSchema = InferSelectModel<typeof users>;

export interface splitColumnSchema extends UserSchema {
  split: number;
}
