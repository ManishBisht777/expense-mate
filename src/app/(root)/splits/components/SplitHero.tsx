import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";

type Props = {};

export default function SplitHero({}: Props) {
  return (
    <>
      <div className="bg-grid my-10">
        <div className=" flex items-center flex-col space-y-6">
          <h1 className="capitalize text-5xl font-bold text-center max-w-xl">
            Discover powerfull sales management tools
          </h1>
          <p className="mt-3 flex gap-1 items-center text-muted-foreground">
            Lorem ipsum dolor sit amet
            <Sparkles className="w-5 h-5" /> consectetur.
          </p>
        </div>
        <div className="mt-6 bg-black text-white px-6 py-8 rounded-lg relative flex items-center justify-between">
          <div>
            <h3 className="text-xl font-medium">Liked the projects?</h3>
            <p className="text-xs text-white/80">
              Drop a star on github if you liked this project
            </p>
          </div>
          <Button variant="ghost" className="px-8 flex items-center">
            <Star size={20} className="mr-2" /> Star
          </Button>
        </div>

        <div className="space-y-1 flex justify-between items-center mt-10">
          <div>
            <h1 className="text-2xl font-semibold">Splits</h1>
            <p className="text-sm text-muted-foreground">
              Effortlessly split expenses between people
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
