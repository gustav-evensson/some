"use client";

import StatsCard from "./components/cards/stats-card/stats-card";
import ProgressChart from "./components/cards/progress-chart/progress-chart-card";
import Toolbar from "./components/toolbar/toolbar";
import { useState } from "react";
import PostsCard from "./components/cards/posts-card";
const StatsPage = () => {
  const [timeframe, setTimeframe] = useState<"1d" | "1w" | "1m">("1d");
  const [platform, setPlatform] = useState<"instagram" | "youtube" | "tiktok" | "all">("all");

  return (
    <div className="p-4 animate-in fade-in-0 duration-700">
      <h1 className="mb-4">Statistik</h1>
      <Toolbar
        setTimeframe={setTimeframe}
        timeframe={timeframe}
        platform={platform}
        setPlatform={setPlatform}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <StatsCard timeframe={timeframe} />
          <PostsCard />
        </div>
        <ProgressChart timeframe={timeframe} platform={platform} />
      </div>
    </div>
  );
};

export default StatsPage;
