import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-starts";
import { getAllGroups } from "@/lib/actions/group";
import { authOptions } from "@/lib/auth";
import { Github } from "lucide-react";
import { getServerSession } from "next-auth";
import AddGroup from "./components/AddGroup";
import Group from "./components/Group";
import SplitHero from "./components/SplitHero";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const allGroups = await getAllGroups();

  return (
    <>
      <SplitHero />

      <div className="flex gap-4">
        <div className="px-6 py-8 border rounded-lg w-4/5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi molestiae illum qui
            </p>
          </div>
          <AddGroup />
        </div>
        <div className="px-6 py-8 border rounded-lg bg-grid-2 w-1/5 space-y-1">
          <h4 className="text-xl font-semibold">$5000+</h4>
          <p className="text-muted-foreground text-sm">Splitted so far</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {allGroups ? (
          allGroups.map((group) => (
            <Group key={group.id} group={group} session={session} />
          ))
        ) : (
          <div>No grps create plx</div>
        )}
      </div>
    </>
  );
}
