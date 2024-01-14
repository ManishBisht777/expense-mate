import { splitColumnSchema } from "@/types/schema";

export const isValidSplitColumn = ({ form }: { form: any }) => {
  const splitColumn = form.getValues("splitColumn");

  return (
    splitColumn.reduce((acc: number, member: splitColumnSchema) => {
      return acc + member.split;
    }, 0) === form.getValues("amount")
  );
};
