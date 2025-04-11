import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { headers } from "next/headers";

const ContactCard = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skapa kontakt</CardTitle>
        <CardDescription>Kontakta personer för att samarbeta</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button asChild variant="outline" className="w-full p-4 justify-between h-auto">
          <Link href={`${pathname}/some-find/editors`}>
            <div>
              <p>Redigerare</p>
              <p className="text-sm text-muted-foreground">Hitta redigerare</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="w-full p-4 justify-between h-auto">
          <Link href={`${pathname}/some-find/influencers`}>
            <div>
              <p>Influencers</p>
              <p className="text-sm text-muted-foreground">Hitta influencers</p>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
