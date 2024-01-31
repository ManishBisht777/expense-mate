import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getCurrentUser } from "@/lib/session";
import { ChevronRight, Sparkles } from "lucide-react";
import React from "react";

export default async function marketingLayout() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen container space-y-20 mt-10">
      {/* <header className="container z-40 bg-background">
              <div className="flex h-20 items-center justify-between py-6">
                <Navbar items={marketingConfig.mainNav} />
                <nav>
                  {user ? (
                    <UserAccountNav
                      user={{ name: user.name, image: user.image, email: user.email }}
                    />
                  ) : (
                    <Link
                      href="/login"
                      className={cn(buttonVariants({ size: "sm" }), "px-4")}
                    >
                      Login
                    </Link>
                  )}
                </nav>
              </div>
            </header> */}
      <div>Header</div>
      <main className="flex-1 flex flex-col justify-center space-y-10">
        <div className="bg-grid">
          <div className=" flex items-center flex-col space-y-6">
            <h1 className="capitalize text-5xl font-bold text-center max-w-xl">
              Discover powerfull sales management tools
            </h1>
            <p className="text-center max-w-lg text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fugiat quis.
            </p>
            <div>
              <div className="flex gap-2 max-w-md justify-center">
                <Input />
                <Button>Explore Now</Button>
              </div>
              <p className="mt-3 flex gap-1 items-center text-muted-foreground">
                Lorem ipsum dolor sit amet
                <Sparkles className="w-5 h-5" /> consectetur.
              </p>
            </div>
          </div>
          <div className="h-[80vh] w-full rounded-xl bg-slate-50 border border-slate-200 mt-10"></div>
        </div>
        <div>
          <h2 className="text-muted-foreground text-2xl font-semibold text-center">
            Trusted by many many many many many
          </h2>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
            <div className="bg-slate-50 h-16 rounded-lg border border-slate-400"></div>
          </div>
        </div>

        <div className="relative top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>

          <div className="flex justify-center items-center flex-col gap-4 mt-20">
            <p className="text-lg font-medium bg-white rounded-full px-6 py-1 border shadow-sm">
              Features
            </p>
            <h2 className="text-3xl font-semibold">
              Work 5x faster, Save you time
            </h2>
            <p className="text-primary max-w-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              iste iusto sunt nesciunt velit nisi.
            </p>
            <div className="flex gap-1 items-center text-purple-600">
              <span>Learn more</span>
              <ChevronRight size={20} />
            </div>
          </div>

          <div className="gird grid-col-5">
            <Card>hi</Card>
            <Card>hi</Card>
            <Card>hi</Card>
            <Card className="col-span-2">hi</Card>
          </div>
        </div>
      </main>
    </div>
  );
}
