import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1>Välkommen till SoMe</h1>
      <Button asChild variant="primary">
        <Link href="/dashboard">
          Gå till dashboard
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}