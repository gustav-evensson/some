"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import SoMeLoader from "@/components/some-loader/some-loader";
import DataDisplay from "./data-display";

const StatsCard = ({ timeframe }: { timeframe: "1d" | "1w" | "1m" }) => {
  console.log(timeframe);

  return (
    <Card className="flex flex-col h-fit">
      <CardHeader>
        <CardTitle>Huvudsiffror</CardTitle>
        <CardDescription>Se Likes, Följare och Visningar</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 gap-4">
        <Suspense fallback={<SoMeLoader />}>
          <DataDisplay timeFrame={timeframe as "1d" | "1w" | "1m"} platform={"instagram"} />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
