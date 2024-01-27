"use client";

import AddEditGroupForm from "@/components/form/group/AddEditGroupForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Group } from "./Group";

interface EditGroupProps {
  group: Group;
  showEditModal: boolean;
  setShowEditModal: (show: boolean) => void;
}

export default function EditGroup({
  group,
  setShowEditModal,
  showEditModal,
}: EditGroupProps) {
  return (
    <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit group</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        {/* @ts-ignore */}
        <AddEditGroupForm setOpen={setShowEditModal} initialValues={group} />
      </DialogContent>
    </Dialog>
  );
}
