import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Filter, IndianRupee } from "lucide-react";

export default function AddGroup() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" /> Add group
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Add Group</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <Label>Name</Label>
            <Input placeholder="Group name" />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea placeholder="Group description" />
          </div>
          <div>
            <Label>Members</Label>
            <Input placeholder="manishdev@gmail.com" />
          </div>
          <div className="flex gap-3 flex-wrap">
            <Badge variant="secondary">ManishBishtdev@gmail.com</Badge>
            <Badge>Dev@gmail.com</Badge>
            <Badge variant="outline">Bisht@gmail.com</Badge>
          </div>
        </div>
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
