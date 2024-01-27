"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { deleteGroup } from "@/lib/actions/group";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface EditGroupProps {
  groupId: string;
  showEditModal: boolean;
  setShowEditModal: (show: boolean) => void;
}

export default function EditGroup({
  groupId,
  setShowEditModal,
  showEditModal,
}: EditGroupProps) {
  const router = useRouter();

  const handleEditGroup = async (groupId: string) => {
    const response = await deleteGroup(groupId);

    if (response) {
      toast.success("Group deleted successfully");
      router.refresh();
    } else toast.error("Something went wrong");
  };

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
      </DialogContent>
    </Dialog>
  );
}
