import GradientAvatar from "@/components/gradient-avatar";
import SomeTextLogoGradient from "@/components/icons/some/some-text-logo-gradient";
import { Button } from "@/components/ui/button";
import { user } from "@/lib/dummy-data";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <SomeTextLogoGradient className="h-10" />
      <div className="flex gap-4">
        {user.teams.map((team) => (
          <Button asChild key={team.id} variant="outline" className="p-4 h-auto flex flex-col items-center w-24 gap-2">
            <Link href={`/dashboard/${team.id}`}>
              <GradientAvatar gradient={team.gradient} className="size-10 rounded-full" />
              <p className="text-ellipsis overflow-hidden w-full text-center">{team.name}</p>
            </Link>
          </Button>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Välj en team för att börja</p>
    </div>
  );
}