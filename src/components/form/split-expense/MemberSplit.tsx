import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { splitType } from "@/enums/split";
import { isValidSplitColumn } from "@/lib/utils/addExpense";
import { UserSchema, splitColumnSchema } from "@/types/schema";
import { Equal, EqualNot } from "lucide-react";
import { useEffect, useState } from "react";

interface MemberSplitProps {
  form: any;
}

export default function MemberSplit({ form }: MemberSplitProps) {
  const [members, setMembers] = useState([]);
  const groupId = form.getValues("groupId");
  const [isValidSplit, setIsValidSplit] = useState(true);

  useEffect(() => {
    async function getMembers() {
      const result = await fetch(`/api/group/${groupId}/members`);
      const data = await result.json();
      setMembers(data[0].users);
    }

    getMembers();
  }, [groupId]);

  useEffect(() => {
    const amount = form.getValues("amount");

    if (form.getValues("split") === splitType.EQUAL) {
      form.setValue(
        "splitColumn",
        members.map((member: UserSchema) => {
          return {
            ...member,
            split: amount / members.length,
          };
        })
      );
    }
  }, [form, members]);

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
          {form.getValues("splitColumn").map((member: splitColumnSchema) => (
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
                <Input
                  defaultValue={member.split}
                  onChange={(e) => {
                    const newSplitColumn = form
                      .getValues("splitColumn")
                      .map((member: UserSchema) => {
                        if (member.id === member.id) {
                          return {
                            ...member,
                            split: e.target.value,
                          };
                        }

                        return member;
                      });

                    form.setValue("splitColumn", newSplitColumn);
                  }}
                  className="w-28"
                  placeholder="25.6%"
                />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {!isValidSplit && (
        <p className="text-sm text-red-500">
          Split amount should be equal to total amount
        </p>
      )}

      {/* <Button type="button" onClick={() => console.log(form.getValues())}>
        Log values
      </Button> */}
    </div>
  );
}
