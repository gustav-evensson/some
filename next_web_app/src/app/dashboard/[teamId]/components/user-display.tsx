import GradientAvatar from "@/components/gradient-avatar";
import { user } from "@/lib/dummy-data";

const UserDisplay = ({ teamId }: { teamId: string }) => {
  const teamName = user.teams.find((team) => team.id === teamId)?.name;

  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="text-right">{user.name}</p>
        <p className="text-sm text-muted-foreground text-right">{teamName}</p>
      </div>
      <GradientAvatar gradient={user.gradient} className="w-10 h-10 rounded-full" />
    </div>
  );
};

export default UserDisplay;
