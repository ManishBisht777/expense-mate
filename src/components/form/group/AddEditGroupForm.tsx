"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createGroupSchema } from "@/types/split";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { MultiSelect } from "@/components/ui/multiselect";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface AddEditGroupFormProps {
  setOpen: (open: boolean) => void;
  initialValues?: z.infer<typeof createGroupSchema>;
}

export default function AddEditGroupForm({
  setOpen,
  initialValues,
}: AddEditGroupFormProps) {
  const [tags, setTags] = useState<string[]>([]);

  const defaultValues = initialValues
    ? {
        name: initialValues.name,
        description: initialValues.description,
        members: initialValues.members,
      }
    : {
        name: "",
        description: "",
        members: [],
      };

  const form = useForm<z.infer<typeof createGroupSchema>>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: defaultValues,
  });

  const router = useRouter();
  const { setValue, getValues } = form;

  useEffect(() => {
    if (initialValues) {
      setTags(initialValues.members);
    }
  }, [initialValues]);

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

    if (response.ok) {
      toast.success("Group added successfully");
      form.reset();
      setOpen(false);
      setTags([]);
      router.refresh();
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
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

        <Button
          type="submit"
          className="w-full flex justify-center rounded-full"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          )}
          Add group
        </Button>
      </form>
    </Form>
  );
}
