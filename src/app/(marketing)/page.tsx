import { UserAccountNav } from "@/components/UserAccountNav";
import Navbar from "@/components/layout/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { marketingConfig } from "@/config/navbar";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Check,
  ChevronRight,
  Sparkles,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function marketingLayout() {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen container space-y-20 mt-5">
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
      <main className="flex-1 flex flex-col justify-center space-y-16">
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
        {/* <div>
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
        </div> */}

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

          <div className="grid grid-cols-5 gap-8 mt-10">
            <Card className="col-span-2">
              <CardHeader className="h-80 bg-grid"></CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Import data make easier</CardTitle>
                <CardDescription className="text-lg text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptate.
                </CardDescription>
                <div className="flex gap-1 items-center text-purple-600">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="h-80 bg-grid-2"></CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Import data make easier</CardTitle>
                <CardDescription className="text-lg text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptate.
                </CardDescription>
                <div className="flex gap-1 items-center text-purple-600">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="h-80 bg-grid-2"></CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Import data make easier</CardTitle>
                <CardDescription className="text-lg text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptate.
                </CardDescription>
                <div className="flex gap-1 items-center text-purple-600">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader className="h-80 bg-grid"></CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Import data make easier</CardTitle>
                <CardDescription className="text-lg text-primary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptate.
                </CardDescription>
                <div className="flex gap-1 items-center text-purple-600">
                  <span>Learn more</span>
                  <ChevronRight size={20} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-grid-3 flex flex-col justify-center items-center space-y-3 mt-2">
          <p className="text-lg font-medium bg-white rounded-full px-6 py-1 border shadow-sm mt-16">
            Features
          </p>
          <h2 className="text-3xl font-semibold">
            Don&apos;t miss out on the latest features
          </h2>

          <div className="space-y-10 mt-6">
            <div className="grid grid-cols-2 gap-10 mt-10">
              <div className="space-y-3">
                <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                  <BarChart3 className="text-purple-600" size={20} />
                </div>
                <p className="text-purple-700 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="uppercase font-semibold text-xl">
                  Your sales are well organised
                </p>
                <p className="max-w-md text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam necessitatibus ad enim architecto non, repellendus
                  quae vero ratione amet alias maxime error velit.
                </p>

                <div className="flex gap-2">
                  <Button variant="secondary" className="rounded-full">
                    <span>Sales tracking</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                  <Button variant="secondary" className="rounded-full">
                    <span>Charts</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
              <div className="h-60 bg-slate-50 rounded"></div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="h-60 bg-slate-50 rounded"></div>
              <div className="space-y-3">
                <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                  <BarChart3 className="text-purple-600" size={20} />
                </div>
                <p className="text-purple-700 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="uppercase font-semibold text-xl">
                  Your sales are well organised
                </p>
                <p className="max-w-md text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam necessitatibus ad enim architecto non, repellendus
                  quae vero ratione amet alias maxime error velit.
                </p>

                <div className="flex gap-2">
                  <Button variant="secondary" className="rounded-full">
                    <span>Sales tracking</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                  <Button variant="secondary" className="rounded-full">
                    <span>Charts</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-3">
                <div className="bg-purple-100 w-10 h-10 rounded-full flex justify-center items-center">
                  <BarChart3 className="text-purple-600" size={20} />
                </div>
                <p className="text-purple-700 text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="uppercase font-semibold text-xl">
                  Your sales are well organised
                </p>
                <p className="max-w-md text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam necessitatibus ad enim architecto non, repellendus
                  quae vero ratione amet alias maxime error velit.
                </p>

                <div className="flex gap-2">
                  <Button variant="secondary" className="rounded-full">
                    <span>Sales tracking</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                  <Button variant="secondary" className="rounded-full">
                    <span>Charts</span>
                    <Check className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
              <div className="h-60 bg-slate-50 rounded"></div>
            </div>
          </div>
        </div>

        <div className="space-y-10 relative">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          <div>
            <p className="text-lg font-medium bg-white rounded-full px-6 py-1 border shadow-sm mt-16 w-fit">
              Testimonials
            </p>
            <h2 className="text-4xl font-semibold max-w-sm">
              What our customers are saying
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Card className="max-w-sm">
              <CardHeader className="flex justify-between flex-row">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      CEO at Company
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  Posted on <Twitter size={20} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt cupiditate quibusdam dicta exercitationem
                soluta aperiam magni repellendus earum! Non quo aspernatur.
              </CardContent>
            </Card>
            <Card className="max-w-sm">
              <CardHeader className="flex justify-between flex-row">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      CEO at Company
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  Posted on <Twitter size={20} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt cupiditate quibusdam dicta exercitationem
                soluta aperiam magni repellendus earum! Non quo aspernatur.
              </CardContent>
            </Card>
            <Card className="max-w-sm">
              <CardHeader className="flex justify-between flex-row">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      CEO at Company
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  Posted on <Twitter size={20} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt cupiditate quibusdam dicta exercitationem
                soluta aperiam magni repellendus earum! Non quo aspernatur.
              </CardContent>
            </Card>
            <Card className="max-w-sm">
              <CardHeader className="flex justify-between flex-row">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      CEO at Company
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  Posted on <Twitter size={20} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt cupiditate quibusdam dicta exercitationem
                soluta aperiam magni repellendus earum! Non quo aspernatur.
              </CardContent>
            </Card>
            <Card className="max-w-sm">
              <CardHeader className="flex justify-between flex-row">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      CEO at Company
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  Posted on <Twitter size={20} />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nesciunt cupiditate quibusdam dicta exercitationem
                soluta aperiam magni repellendus earum! Non quo aspernatur.
              </CardContent>
            </Card>{" "}
          </div>
          <div className="flex justify-center items-center">
            <Button variant="secondary" className="rounded-full">
              <span>View more</span>
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="bg-grid h-[60vh] flex justify-center flex-col text-center items-center space-y-2">
          <p className="uppercase">Get started</p>
          <h4 className="capitalize text-3xl font-semibold">
            Bring your business next level
          </h4>
          <p className="max-w-xl text-sm text-primary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            voluptas aspernatur perferendis repellat sapiente in dolores velit
            facilis vero accusamus?
          </p>
          <Button>
            <span>Get started</span>
            <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </main>
    </div>
  );
}
