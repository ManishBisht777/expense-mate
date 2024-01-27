"use client";

import AddEditGroupForm from "@/components/form/group/AddEditGroupForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Filter } from "lucide-react";
import { useState } from "react";

export default function AddGroup() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className="border px-4 py-2 rounded-md  flex items-center space-x-2 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Filter className="w-4 h-4" /> <p className="text-nowrap">Add group</p>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Add Group</DialogTitle>
        </DialogHeader>
        <AddEditGroupForm setOpen={setOpen} />
        {/* <div className="space-y-3">
          <div className="relative">
            <input
              className="text-7xl w-full text-center font-medium focus:outline-none"
              defaultValue="0.00"
            />
            <IndianRupee className="absolute top-0 right-0 text-muted-foreground font-medium" />
          </div>
          <DatePicker />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
