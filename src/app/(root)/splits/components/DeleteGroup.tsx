"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteGroup } from "@/lib/actions/group";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DeleteGroupProps {
  groupId: string;
  showDeleteModal: boolean;
  setShowDeleteModal: (show: boolean) => void;
}

export default function DeleteGroup({
  groupId,
  setShowDeleteModal,
  showDeleteModal,
}: DeleteGroupProps) {
  const router = useRouter();

  const handleDeleteGroup = async (groupId: string) => {
    const response = await deleteGroup(groupId);

    if (response) {
      toast.success("Group deleted successfully");
      router.refresh();
    } else toast.error("Something went wrong");
  };

  return (
    <AlertDialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            group and expenses related to it
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteGroup(groupId)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
