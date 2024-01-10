"use client";

import BasicDetails from "@/components/form/split-expense/BasicDetails";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AddExpenseProps {}

export default function AddExpense({}: AddExpenseProps) {
  const form = useForm<z.infer<typeof createGroupExpenseSchema>>({
    resolver: zodResolver(createGroupExpenseSchema),
    defaultValues: {
      name: "",
      description: "",
      amount: 0,
      date: "",
      currency: "",
      groupId: "",
      split: splitType.EQUAL,
      splitColumn: [],
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

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
          <form className="space-y-4">
            {currentStep !== 0 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <ChevronLeft className="mr-2 w-4 h-4" /> Back
              </Button>
            )}

            {currentStep === 0 && <BasicDetails form={form} />}

            {currentStep === 1 && <h1>Form 2</h1>}

            {currentStep === 2 && <h1>Form 3</h1>}

            {currentStep !== 2 ? (
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
