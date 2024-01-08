CREATE TABLE IF NOT EXISTS "usersToGroup" (
	"userId" text NOT NULL,
	"groupId" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToGroup" ADD CONSTRAINT "usersToGroup_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "usersToGroup" ADD CONSTRAINT "usersToGroup_groupId_group_id_fk" FOREIGN KEY ("groupId") REFERENCES "group"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
