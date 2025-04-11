"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Select, SelectItem, SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { platforms } from "@/lib/dummy-data";
import { ChartColumnStacked } from "lucide-react";
type ToolbarProps = {
  timeframe: "1d" | "1w" | "1m";
  setTimeframe: (timeframe: "1d" | "1w" | "1m") => void;
  platform: "instagram" | "youtube" | "tiktok" | "all";
  setPlatform: (platform: "instagram" | "youtube" | "tiktok" | "all") => void;
};

const allPlatforms = [
  {
    name: "Översikt",
    value: "all",
    icon: ChartColumnStacked,
  },
  ...platforms,
];

const Toolbar = ({ timeframe, setTimeframe, platform, setPlatform }: ToolbarProps) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setTimeframe("1d")}
          variant="outline"
          className={cn(timeframe === "1d" && "border-foreground dark:border-foreground")}
        >
          1d
        </Button>
        <Button
          onClick={() => setTimeframe("1w")}
          variant="outline"
          className={cn(timeframe === "1w" && "border-foreground dark:border-foreground")}
        >
          1v
        </Button>
        <Button
          onClick={() => setTimeframe("1m")}
          variant="outline"
          className={cn(timeframe === "1m" && "border-foreground dark:border-foreground")}
        >
          1m
        </Button>
      </div>
      <Separator orientation="vertical" className="min-h-6" />
      <Select value={platform} onValueChange={setPlatform}>
        <SelectTrigger className="w-auto min-w-[150px] cursor-pointer">
          <SelectValue placeholder="Välj plattform" />
        </SelectTrigger>
        <SelectContent>
          {allPlatforms.map((p) => (
            <SelectItem key={p.value} value={p.value}>
              {p.icon && <p.icon className="w-4 h-4" />}
              {p.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Toolbar;
