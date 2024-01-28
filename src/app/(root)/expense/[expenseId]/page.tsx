interface Props {
  params: { expenseId: string };
}

export default async function page({ params: { expenseId } }: Props) {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
