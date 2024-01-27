"use client";

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
import { useState } from "react";
import DeleteGroup from "./DeleteGroup";
import EditGroup from "./EditGroup";

interface GroupOptionsProps {
  groupId: string;
}

export default function GroupOptions({ groupId }: GroupOptionsProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  return (
    <>
      <DeleteGroup
        groupId={groupId}
        setShowDeleteModal={setShowDeleteModal}
        showDeleteModal={showDeleteModal}
      />

      <EditGroup
        groupId={groupId}
        setShowEditModal={setShowEditModal}
        showEditModal={showEditModal}
      />

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
            <DropdownMenuItem onClick={() => setShowEditModal(true)}>
              <PencilRuler className="w-4 h-4 mr-2" />
              <span>Edit group</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setShowDeleteModal(true)}>
              <Trash2 className="w-4 h-4 mr-2" />
              <span>Delete group</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
