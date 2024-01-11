import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Equal, EqualNot, Pencil, Percent } from "lucide-react";

interface MemberSplitProps {
  form: any;
}

export default function MemberSplit({ form }: MemberSplitProps) {
  return (
    <div className="space-y-3 flex flex-col justify-center items-center">
      <RadioGroup
        defaultValue="card"
        className="flex justify-between bg-slate-100 p-2 border border-muted rounded-md items-center"
      >
        <div>
          <RadioGroupItem
            value="notEqual"
            id="notEqual"
            className="peer sr-only"
          />
          <Label
            htmlFor="notEqual"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 px-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <EqualNot />
          </Label>
        </div>
        <div>
          <RadioGroupItem value="equal" id="equal" className="peer sr-only" />
          <Label
            htmlFor="equal"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 px-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Equal />
          </Label>
        </div>
        <div>
          <RadioGroupItem
            value="percent"
            id="percent"
            className="peer sr-only"
          />
          <Label
            htmlFor="percent"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 px-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Percent className="w-6 h-6" />
          </Label>
        </div>
        <div>
          <RadioGroupItem value="exact" id="exact" className="peer sr-only" />
          <Label
            htmlFor="exact"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 px-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
            <Pencil className="w-6 h-6" />
          </Label>
        </div>
      </RadioGroup>
      <span className="font-semibold">Splits type</span>

      <ScrollArea className="w-full h-60">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between w-full border p-2 rounded-md bg-slate-50">
            <div className="space-x-4 flex items-center">
              <Checkbox className="w-6 h-6" checked={true} />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Manish bisht</p>
                <p className="text-sm text-muted-foreground">
                  Some description
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center space-x-4">
              <Input className="w-16" placeholder="25.6%" />
            </div>
          </div>
          <div className="flex justify-between w-full border p-2 rounded-md bg-slate-50">
            <div className="space-x-4 flex items-center">
              <Checkbox className="w-6 h-6" checked={true} />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Manish bisht</p>
                <p className="text-sm text-muted-foreground">
                  Some description
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center space-x-4">
              <Input className="w-16" placeholder="25.6%" />
            </div>
          </div>{" "}
          <div className="flex justify-between w-full border p-2 rounded-md bg-slate-50">
            <div className="space-x-4 flex items-center">
              <Checkbox className="w-6 h-6" checked={true} />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Manish bisht</p>
                <p className="text-sm text-muted-foreground">
                  Some description
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center space-x-4">
              <Input className="w-16" placeholder="25.6%" />
            </div>
          </div>{" "}
          <div className="flex justify-between w-full border p-2 rounded-md bg-slate-50">
            <div className="space-x-4 flex items-center">
              <Checkbox className="w-6 h-6" checked={true} />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">Manish bisht</p>
                <p className="text-sm text-muted-foreground">
                  Some description
                </p>
              </div>
            </div>
            <div className="w-fit flex items-center space-x-4">
              <Input className="w-16" placeholder="25.6%" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
