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
import Link from "next/link";

interface GroupOptionsProps {
  groupId: string;
}

export default function GroupOptions({ groupId }: GroupOptionsProps) {
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
            <Link className="flex" href={`/group/${groupId}/edit`}>
              <PencilRuler className="w-4 h-4 mr-2" />
              <span>Edit group</span>
            </Link>
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
