import StatsCard from "./components/cards/stats-card/stats-card";
import TrendsCard from "./components/cards/trends-card";
import MfpCard from "./components/cards/mfp-card";
import { Button } from "@/components/ui/button";
import NotificationsCard from "./components/cards/notifications-card";
import ContactCard from "./components/cards/contact-card";
export default async function DashboardTeamPage() {
  return (
    <div className="p-4 animate-in fade-in-0 duration-700">
      <h1 className="mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-4 mb-4">
        <TrendsCard />
        <StatsCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <Button variant="primary" className="w-full py-16 text-2xl font-semibold rounded-lg">
            Skapa content
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <NotificationsCard />
            <ContactCard />
          </div>
        </div>
        <MfpCard />
      </div>
    </div>
  );
}
