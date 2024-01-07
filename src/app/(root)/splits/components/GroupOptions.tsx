import { Landmark, MoreVertical, PencilRuler, Trash2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GroupOptionsProps {}

export default function GroupOptions({}: GroupOptionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="absolute top-4 right-4" asChild>
        <div className="p-1 rounded-md hover:bg-muted-foreground/10 cursor-pointer">
          <MoreVertical className="w-4 h-4 " />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Banglore Mates</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Landmark className="w-4 h-4 mr-2" />
            <span>Add members</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PencilRuler className="w-4 h-4 mr-2" />
            <span>Edit group</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Trash2 className="w-4 h-4 mr-2" />
            <span>Delete group</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
