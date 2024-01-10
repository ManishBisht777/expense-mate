import * as z from "zod";

export const createGroupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string(),
  members: z.array(z.string()),
});

export const createGroupExpenseSchema = z.object({
  amount: z.number().positive().min(0.01, "Amount must be greater than 0"),
  date: z.string().min(1, "Date is required"),
  name: z.string().min(1, "Name is required"),
  description: z.string(),
  currency: z.string().min(1, "Currency is required"),
  groupId: z.string().min(1, "Group is required"),
  createdBy: z.string().min(1, "Created by is required"),
  split: z.string().min(1, "Split is required"),
  splitColumn: z.array(
    z.object({
      userId: z.string().min(1, "User is required"),
      splitAmount: z
        .number()
        .positive()
        .min(0.01, "Amount must be greater than 0"),
      isSettled: z.boolean(),
    })
  ),
});
