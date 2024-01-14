ALTER TABLE "usersToGroup" ADD CONSTRAINT "usersToGroup_userId_groupId_pk" PRIMARY KEY("userId","groupId");--> statement-breakpoint
ALTER TABLE "expense" ADD COLUMN "date" timestamp NOT NULL;