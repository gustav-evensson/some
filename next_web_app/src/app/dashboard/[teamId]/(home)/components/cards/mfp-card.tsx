import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";

const MfpCard = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-current-path");

  // const steps = [];

  // if (steps.length === 0 || !steps) {
  return (
    <Card className="w-full flex flex-col gap-2 items-center justify-center p-12">
      <h2 className="text-2xl font-semibold">
        Du har ingen <span className="text-primary">MFP</span>...
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-2">
        Börja med att skapa en Marknadsföringsplan
      </p>
      <Button variant="primary" asChild>
        <Link href={`${pathname}/mfp`}>Skapa MFP</Link>
      </Button>
    </Card>
  );
  // }
  // return (
  //   <Card className="w-full">
  //     <CardHeader>
  //       <CardTitle>Att göra</CardTitle>
  //       <CardDescription>Se nästa steg i din marknadsföring</CardDescription>
  //     </CardHeader>
  //     <CardContent className="flex flex-col flex-1 gap-4">
  //       <ul className="flex flex-col gap-2">
  //         {steps.map((step) => (
  //           <li key={step.name}>
  //             <Button
  //               variant={step.current ? "gradient-outline" : "outline"}
  //               className={cn(
  //                 "w-full h-auto !p-4 justify-between rounded-lg",
  //                 step.current && "!py-8"
  //               )}
  //               asChild
  //             >
  //               <Link href={`/dashboard/mfp/${step.name}`}>
  //                 <div>
  //                   <p>{step.name}</p>
  //                   <div className="flex items-center">
  //                     <span className="text-xs">{step.date}</span>
  //                     <Dot className="size-5 text-muted-foreground" />
  //                     {/* Calculate Days left */}
  //                     <span className="text-xs text-muted-foreground">
  //                       {Math.floor(
  //                         (new Date(step.date).getTime() - new Date().getTime()) /
  //                           (1000 * 60 * 60 * 24)
  //                       )}{" "}
  //                       dagar kvar
  //                     </span>
  //                   </div>
  //                 </div>
  //                 <ChevronRight className="size-4 text-muted-foreground" />
  //               </Link>
  //             </Button>
  //           </li>
  //         ))}
  //       </ul>
  //       <Button asChild variant="outline" className="w-full py-4 justify-between h-auto">
  //         <Link href={`${pathname}/stats`}>
  //           Se all statistik
  //           <ChevronRight className="w-4 h-4" />
  //         </Link>
  //       </Button>
  //     </CardContent>
  //   </Card>
  // );
};

export default MfpCard;
