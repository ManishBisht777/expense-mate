import { DatePicker } from "@/components/ui/date-picker";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IndianRupee } from "lucide-react";

interface BasicDetailsProps {
  form: any;
}

export default function BasicDetails({ form }: BasicDetailsProps) {
  return (
    <div className="space-y-3">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Group name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Group description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
    </div>
  );
}
