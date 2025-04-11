"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

const dummyData = {
  tiktok: {
    day: {
      likes: 140,
      followers: 18,
      views: 1800,
    },
    week: {
      likes: 1400,
      followers: 36,
      views: 18000,
    },
    month: {
      likes: 14000,
      followers: 48,
      views: 180000,
    },
  },
  instagram: {
    day: {
      likes: 150,
      followers: 18,
      views: 1700,
    },
    week: {
      likes: 1500,
      followers: 36,
      views: 17000,
    },
    month: {
      likes: 1000,
      followers: 48,
      views: 170000,
    },
  },
  youtube: {
    day: {
      likes: 160,
      followers: 18,
      views: 1400,
    },
    week: {
      likes: 1600,
      followers: 36,
      views: 14000,
    },
    month: {
      likes: 16000,
      followers: 48,
      views: 140000,
    },
  },
};

const getData = async (
  platform: string,
  timeFrame: string
): Promise<{ likes: number; followers: number; views: number }> => {
  const response = new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error - dummy data
      resolve(dummyData[platform][timeFrame] as { likes: number; followers: number; views: number });
    }, 300);
  });
  return response as Promise<{ likes: number; followers: number; views: number }>;
};

const DataDisplay = ({
  timeFrame,
  platform,
}: {
  timeFrame: "1d" | "1w" | "1m";
  platform: string;
}) => {
  const [data, setData] = useState<{ likes: number; followers: number; views: number } | null>(
    null
  );

  useEffect(() => {
    setData(null);
    getData(platform, timeFrame).then(setData);
  }, [platform, timeFrame]);

  if (!data)
    return (
      <div className="flex-1 grid grid-cols-3 gap-4 min-h-[150px]">
        <SkeletonDisplayBlock />
        <SkeletonDisplayBlock />
        <SkeletonDisplayBlock />
      </div>
    );

  return (
    <div className="flex-grow grid grid-cols-3 gap-4 min-h-[150px]">
      <DisplayBlock data={data.likes} label="Likes" />
      <DisplayBlock data={data.followers} label="Följare" />
      <DisplayBlock data={data.views} label="Visningar" />
    </div>
  );
};

const DisplayBlock = ({ data, label }: { data: number; label: string }) => {
  const formatData = (data: number): { value: number; suffix: string } => {
    if (data >= 1000) {
      return { value: data / 1000, suffix: "k" };
    }
    return { value: data, suffix: "" };
  };

  const { value, suffix } = formatData(data);

  return (
    <div className="h-full bg-secondary/50 dark:bg-secondary/30 rounded-lg p-4">
      <span className="text-2xl font-bold block animate-in fade-in-0 duration-700">
        {value}
        {suffix}
      </span>
      <span className="animate-in fade-in-0 duration-700">{label}</span>
    </div>
  );
};

const SkeletonDisplayBlock = () => {
  return (
    <div className="h-full bg-secondary/50 dark:bg-secondary/30 rounded-lg p-4">
      <Skeleton className="h-8 w-1/2 mb-2" />
      <Skeleton className="h-[19px] w-full" />
    </div>
  );
};

export default DataDisplay;
