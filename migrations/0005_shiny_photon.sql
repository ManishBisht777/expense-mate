CREATE TABLE IF NOT EXISTS "expense" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"amount" integer NOT NULL,
	"description" text,
	"groupId" text NOT NULL,
	"userId" text NOT NULL,
	"splitType" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userToExpense" (
	"userId" text NOT NULL,
	"expenseId" text NOT NULL,
	"amount" integer NOT NULL,
	"settled" boolean NOT NULL
);
--> statement-breakpoint
ALTER TABLE "group" ADD COLUMN "userId" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "group" ADD CONSTRAINT "group_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense" ADD CONSTRAINT "expense_groupId_group_id_fk" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense" ADD CONSTRAINT "expense_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userToExpense" ADD CONSTRAINT "userToExpense_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userToExpense" ADD CONSTRAINT "userToExpense_expenseId_expense_id_fk" FOREIGN KEY ("expenseId") REFERENCES "expense"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
