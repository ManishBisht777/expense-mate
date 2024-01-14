import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { splitType } from "@/enums/split";
import { UserSchema } from "@/types/schema";
import { Equal, EqualNot } from "lucide-react";
import { useEffect, useState } from "react";

interface MemberSplitProps {
  form: any;
}

export default function MemberSplit({ form }: MemberSplitProps) {
  const [members, setMembers] = useState([]);
  const groupId = form.getValues("groupId");

  useEffect(() => {
    async function getMembers() {
      const result = await fetch(`/api/group/${groupId}/members`);
      const data = await result.json();
      setMembers(data[0].users);
    }

    getMembers();
  }, [groupId]);

  return (
    <div className="space-y-3 flex flex-col">
      <div className="bg-slate-50 p-2 rounded-md flex gap-2 justify-center">
        <Button
          variant={
            form.getValues("split") === splitType.EQUAL
              ? "default"
              : "secondary"
          }
          onClick={() => form.setValue("split", splitType.EQUAL)}
        >
          <Equal className="mr-2" />
          Split equal
        </Button>
        <Button
          variant={
            form.getValues("split") === splitType.CUSTOM
              ? "default"
              : "secondary"
          }
          onClick={() => form.setValue("split", splitType.CUSTOM)}
        >
          <EqualNot className="mr-2" />
          Split custom
        </Button>
      </div>

      {/* <span className="font-semibold">Splits type</span> */}

      <ScrollArea className="w-full max-h-60">
        <div className="flex flex-col gap-3">
          {members.map((member: UserSchema) => (
            <div
              key={member.id}
              className="flex justify-between w-full border p-2 rounded-md bg-slate-50"
            >
              <div className="space-x-4 flex items-center">
                <Avatar>
                  <AvatarImage
                    src={member.image || "https://github.com/shadcn.png"}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{member.name}</p>
                  {/* <p className="text-sm text-muted-foreground">
                    Some description
                  </p> */}
                </div>
              </div>
              <div className="w-fit flex items-center space-x-4">
                <Input className="w-16" placeholder="25.6%" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* <Button type="button" onClick={() => console.log(form.getValues())}>
        Log values
      </Button> */}
    </div>
  );
}
