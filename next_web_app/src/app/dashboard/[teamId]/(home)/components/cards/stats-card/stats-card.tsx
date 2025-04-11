"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { platforms } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Suspense, useState } from "react";
import SoMeLoader from "@/components/some-loader/some-loader";
import DataDisplay from "./data-display";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const StatsCard = () => {
  const [timeFrame, setTimeFrame] = useState<"day" | "week" | "month">("day");
  const [platform, setPlatform] = useState<string>(platforms[0].value);

  const pathname = usePathname();

  return (
    <Card className="flex flex-col flex-1">
      <CardHeader>
        <CardTitle>Statistik</CardTitle>
        <CardDescription>Statistik över dina sociala kanaler</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setTimeFrame("day")}
                className={cn(timeFrame === "day" && "border-foreground dark:border-foreground")}
              >
                1d
              </Button>
              <Button
                variant="outline"
                onClick={() => setTimeFrame("week")}
                className={cn(timeFrame === "week" && "border-foreground dark:border-foreground")}
              >
                1v
              </Button>
              <Button
                variant="outline"
                onClick={() => setTimeFrame("month")}
                className={cn(timeFrame === "month" && "border-foreground dark:border-foreground")}
              >
                1m
              </Button>
            </div>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="w-auto min-w-[150px] cursor-pointer">
                <SelectValue placeholder="Välj plattform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    <p.icon className="w-4 h-4" />
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Suspense fallback={<SoMeLoader />}>
          <DataDisplay timeFrame={timeFrame} platform={platform} />
        </Suspense>
        <Button asChild variant="outline" className="w-full py-4 justify-between h-auto">
          <Link href={`${pathname}/stats`}>
            Se all statistik
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
