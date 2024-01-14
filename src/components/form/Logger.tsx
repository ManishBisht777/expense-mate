import React from "react";
import { Button } from "../ui/button";

interface LoggerProps {
  form: any;
}

export default function Logger({ form }: LoggerProps) {
  return (
    <div className="space-x-2 mt-2">
      <Button type="button" onClick={() => console.log(form.formState.errors)}>
        Log error
      </Button>
      <Button type="button" onClick={() => console.log(form.getValues())}>
        Log values
      </Button>
    </div>
  );
}
