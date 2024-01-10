"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiselect";
import { createGroupSchema } from "@/types/split";
import { zodResolver } from "@hookform/resolvers/zod";
import { Filter } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function AddGroup() {
  const form = useForm<z.infer<typeof createGroupSchema>>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const [tags, setTags] = useState<string[]>([]);
  const { setValue } = form;

  async function onSubmit(values: z.infer<typeof createGroupSchema>) {
    const response = await fetch(`/api/group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        description: values.description,
        members: values.members,
      }),
    });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" /> Add group
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Add Group</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <FormField
                control={form.control}
                name="members"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Members</FormLabel>
                    <FormControl>
                      <MultiSelect
                        {...field}
                        placeholder="Enter emails of members"
                        tags={tags}
                        setTags={(newTags) => {
                          setTags(newTags);
                          setValue("members", newTags as [string, ...string[]]);
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full rounded-full">
              Add group
            </Button>
          </form>
        </Form>
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
