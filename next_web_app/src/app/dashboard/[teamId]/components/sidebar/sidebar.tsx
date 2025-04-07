import SomeLogoSolid from "@/components/some-logo-solid";
import SidebarNav from "./sidebar-nav";
import { Separator } from "@/components/ui/separator";
import { SidebarUser } from "./sidebar-user/sidebar-user";
import { user } from "@/lib/dummy-data";

export default function Sidebar({ teamId }: { teamId: string }) {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 border-r flex flex-col items-center justify-between p-4">
      <div>
        <div className="flex items-center justify-center rounded-md size-8 bg-primary">
          <SomeLogoSolid className="size-4 text-primary-foreground" />
        </div>
        <Separator className="w-full my-4" />
        <SidebarNav teamId={teamId} />
      </div>
      <SidebarUser user={user} />
    </aside>
  );
}
