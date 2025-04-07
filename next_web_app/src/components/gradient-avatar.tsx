import { cn } from "@/lib/utils";

interface GradientAvatarProps {
  gradient: string[];
  className?: string;
}

const GradientAvatar = ({ gradient, className }: GradientAvatarProps) => {

  if (!gradient || gradient.length !== 2 || typeof gradient !== "object") {
  return <div style={{ background: `linear-gradient(60deg, hsl(221.2 83.2% 53.3%), hsl(261.2 83.2% 57.3%))` }} className={cn("w-full h-full", className)} />;

  }

  return <div style={{ background: `linear-gradient(60deg, #${gradient[0]}, #${gradient[1]})` }} className={cn("w-full h-full", className)} />;
};

export default GradientAvatar;
