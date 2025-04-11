"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect } from "react";
import StatSelect from "./stat-select";
// const chartData = [
//   {
//     month: "2025-01-01T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
//   {
//     month: "2025-01-02T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
//   {
//     month: "2025-01-03T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
//   {
//     month: "2025-01-04T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
//   {
//     month: "2025-01-05T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
//   {
//     month: "2025-01-06T00:00:00.000Z",
//     youtube: 100,
//     instagram: 200,
//   },
// ];

// const chartConfig = {
//   youtube: {
//     label: "Youtube",
//     color: "#FF0000",
//   },
//   instagram: {
//     label: "Instagram",
//     color: "#0000FF",
//   },
// } satisfies ChartConfig;

function ProgressChartCard({ platform, timeframe }: { platform: string; timeframe: string }) {
  const [chartData, setChartData] = useState<any>();
  
  const [stat, setStat] = useState<string>("followers");
  // const [viewsData, setViewsData] = useState<any>();
  // const [likesData, setLikesData] = useState<any>();
  // const [followersData, setFollowersData] = useState<any>();

  const [chartConfig, setChartConfig] = useState<ChartConfig>();
  const [currentPlatforms, setCurrentPlatforms] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/stats-test/dummy-data?platform=${platform}&timeframe=${timeframe}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChartConfig(data.chartConfig);
        setChartData(data.chartData);
        setCurrentPlatforms(data.platforms);
      });
  }, [platform, timeframe]);

  if (chartConfig && chartData) {
    console.log(chartConfig);
    console.log(chartData);
    return (
      <Card className="h-fit">
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Utveckling</CardTitle>
            <CardDescription>Se ny följare under senaste veckan</CardDescription>
          </div>
          <div>
            <StatSelect stat={stat} setStat={setStat} />
          </div>
        </CardHeader>
        <CardContent>
          {chartConfig && chartData && (
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="timestamp"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  // labelFormatter={(value) => {
                  //   const date = new Date(value).toDateString();
                  //   const time = new Date(value).getHours();
                  //   return `${date} ${time}`;
                  // }}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  {/* <linearGradient id="fillYoutube" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.youtube.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chartConfig.youtube.color} stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillInstagram" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartConfig.instagram.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={chartConfig.instagram.color} stopOpacity={0.1} />
                </linearGradient> */}
                  {currentPlatforms.map((p) => {
                    return (
                      <linearGradient key={p} id={`fill${p}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={chartConfig[p].color} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={chartConfig[p].color} stopOpacity={0.1} />
                      </linearGradient>
                    );
                  })}
                </defs>
                {/* <Area
                dataKey="instagram"
                type="natural"
                fill="url(#fillInstagram)"
                fillOpacity={0.4}
                stroke={chartConfig.instagram.color}
                stackId="a"
              />
              <Area
                dataKey="youtube"
                type="natural"
                fill="url(#fillYoutube)"
                fillOpacity={0.4}
                stroke={chartConfig.youtube.color}
                stackId="a"
              /> */}
                {currentPlatforms.map((p) => {
                  return (
                    <Area
                      key={p}
                      dataKey={p}
                      type="natural"
                      fill={`url(#fill${p})`}
                      fillOpacity={0.4}
                      stroke={chartConfig[p].color}
                      stackId="a"
                    />
                  );
                })}
              </AreaChart>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    );
  }

  return <div>Loading...</div>;
}

export default ProgressChartCard;
