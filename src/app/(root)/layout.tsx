import { UserAccountNav } from "@/components/UserAccountNav";
import Navbar from "@/components/layout/Navbar";
import { marketingConfig } from "@/config/navbar";
import { getCurrentUser } from "@/lib/session";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="container">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6 border-b">
          <Navbar items={marketingConfig.dashboardNav} />
          <nav>
            {user ? (
              <UserAccountNav
                user={{ name: user.name, image: user.image, email: user.email }}
              />
            ) : null}
          </nav>
        </div>
      </header>
      <main className="space-y-6 my-12">{children}</main>
    </div>
  );
}
