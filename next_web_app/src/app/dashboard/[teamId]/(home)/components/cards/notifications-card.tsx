import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { headers } from "next/headers";

const notifications = [
  {
    from: "Gustav",
    chatId: "123",
    content: {
      type: "message",
      message: "Hej, hur mår du?",
    },
    date: "2023-12-25T08:30:00Z",
    read: false,
  },
  {
    from: "Simon",
    chatId: "124",
    content: {
      type: "file",
      file: "Fil_049950595050",
    },
    date: "2024-01-02T14:45:00Z",
    read: false,
  },
  // {
  //   from: "Simon",
  //   chatId: "125",
  //   content: {
  //     type: "message",
  //     message: "Hann du kolla på det vi pratade om igår?",
  //   },
  //   date: "2024-01-03T09:15:00Z",
  //   read: false,
  // },
];

const NotificationsCard = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Händelser</CardTitle>
        <CardDescription>Senaste händelserna</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {notifications
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((notification) => (
            <div className="relative" key={notification.date}>
              <div
                className={cn(
                  "size-3 rounded-br-md rounded-tl-md absolute top-0 left-0 bg-primary",
                  notification.read ? "opacity-0" : "opacity-100"
                )}
              />
              <Button asChild variant="outline" className={cn("w-full py-4 justify-between h-auto", !notification.read && "border-primary")}>
                <Link href={`${pathname}/chat`}>
                  <div>
                    <p>{notification.from}</p>
                    <p>
                      {notification.content.type === "message"
                        ? notification.content.message
                        : notification.content.file}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default NotificationsCard;
