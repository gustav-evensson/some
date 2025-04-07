"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundButton() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button onClick={handleClick} variant="outline">
      <ArrowLeft className="size-4" />
      Gå tillbaka
    </Button>
  );
}
