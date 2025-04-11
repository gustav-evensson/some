import Instagram from "@/components/icons/social/instagram";
import TikTok from "@/components/icons/social/tiktok";
import YouTube from "@/components/icons/social/youtube";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { headers } from "next/headers";

const TrendsCard = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path");

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Trender</CardTitle>
        <CardDescription>Välj plattform att se trender på</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
        <TrendItem href={`${pathname}/trends`}>
          <Instagram className="size-10" />
        </TrendItem>
        <TrendItem href={`${pathname}/trends`}>
          <TikTok className="size-10" />
        </TrendItem>
        <TrendItem href={`${pathname}/trends`}>
          <YouTube className="size-10" />
        </TrendItem>
        <TrendItem href={`${pathname}/trends`}>
          <Instagram className="size-10" />
        </TrendItem>
      </CardContent>
    </Card>
  );
};

const TrendItem = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Button variant="outline" className="w-full h-full min-h-[100px] flex" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default TrendsCard;
