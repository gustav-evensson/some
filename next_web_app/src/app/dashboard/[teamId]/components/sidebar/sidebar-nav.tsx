"use client";

import {
  BarChartIcon, HomeIcon
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const navigation = [
  {
    name: "Home",
    href: "",
    icon: HomeIcon,
  },
  // {
  //   name: "Marknadsföringsplan",
  //   href: "/marketing-plan",
  //   icon: CalendarIcon,
  // },
  // {
  //   name: "Content Generator",
  //   href: "/content-generator",
  //   icon: SparklesIcon,
  // },
  {
    name: "Statistik",
    href: "/stats",
    icon: BarChartIcon,
  },
  // {
  //   name: "Trender",
  //   href: "/trends",
  //   icon: NewspaperIcon,
  // },
  // {
  //   name: "Inställningar",
  //   href: "/settings",
  //   icon: Settings,
  // },
];

export default function SidebarNav({ teamId }: { teamId: string }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2 w-full">
      <TooltipProvider>
        {navigation.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              <Link
                href={`/dashboard/${teamId}${item.href}`}
                key={item.name}
                className={cn(
                  "w-full py-2 flex items-center justify-center text-muted-foreground hover:text-foreground transition",
                  pathname === `/dashboard/${teamId}${item.href}` && "text-foreground"
                )}
              >
                <item.icon className="size-4" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" align="center">
              {item.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
}
