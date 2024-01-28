import { UserAccountNav } from "@/components/UserAccountNav";
import Navbar from "@/components/layout/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { marketingConfig } from "@/config/navbar";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import Link from "next/link";
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
            <p className="text-center max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium fugiat quis.
            </p>
            <div>
              <div className="flex gap-2 max-w-md justify-center">
                <Input />
                <Button>Explore Now</Button>
              </div>
              <p className="mt-3 flex gap-1 items-center">
                Lorem ipsum dolor sit amet
                <Sparkles className="w-5 h-5" /> consectetur.
              </p>
            </div>
          </div>
          <div className="h-[80vh] w-full rounded-xl bg-slate-50 border border-slate-200 mt-10"></div>
        </div>
      </main>
    </div>
  );
}
