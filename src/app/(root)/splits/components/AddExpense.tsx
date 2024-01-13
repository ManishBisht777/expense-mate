"use client";

import BasicDetails from "@/components/form/split-expense/BasicDetails";
import MemberSplit from "@/components/form/split-expense/MemberSplit";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { splitType } from "@/enums/split";
import { createGroupExpenseSchema } from "@/types/split";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Session } from "next-auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AddExpenseProps {
  groupId: string;
  session: Session;
}

export default function AddExpense({ groupId, session }: AddExpenseProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm<z.infer<typeof createGroupExpenseSchema>>({
    resolver: zodResolver(createGroupExpenseSchema),
    defaultValues: {
      name: "",
      description: "",
      amount: "0",
      date: new Date(),
      currency: "Rupee",
      groupId: groupId,
      split: splitType.EQUAL,
      createdBy: session.user.id,
      // splitColumn: [],
    },
  });

  const onSubmit = (data: z.infer<typeof createGroupExpenseSchema>) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button className="w-full">Add expense</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-lg">Add Group</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {currentStep !== 0 && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="absolute top-5 left-5"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}

            {currentStep === 0 && <BasicDetails form={form} />}

            {currentStep === 1 && <MemberSplit form={form} />}

            {currentStep !== 1 ? (
              <div className="w-full flex justify-end">
                <Button
                  type="button"
                  className="self-end"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Next <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ) : (
              <Button type="submit" className="w-full rounded-full">
                Add group
              </Button>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
