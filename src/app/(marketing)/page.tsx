import { UserAccountNav } from "@/components/UserAccountNav";
import Navbar from "@/components/layout/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { marketingConfig } from "@/config/navbar";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type marketingLayoutProps = {
  children: React.ReactNode;
};

export default async function marketingLayout({
  children,
}: marketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen flex-col flex">
      <header className="container z-40 bg-background">
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
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
