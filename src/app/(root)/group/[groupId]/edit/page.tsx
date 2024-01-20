import { getGroup } from "@/lib/actions/group";

interface Props {
  params: { groupId: string };
}

export default async function page({ params: { groupId } }: Props) {
  const group = await getGroup(groupId);
  if (!group) return null;

  return (
    <div>
      edit group form
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facere
        debitis, necessitatibus distinctio officia at accusamus nam quaerat
        commodi aut suscipit totam deleniti est voluptate. Blanditiis esse quam
        fuga molestias.
      </p>
    </div>
  );
}
