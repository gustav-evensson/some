import Sidebar from "./components/sidebar/sidebar";

export default async function DashboardLayout({ children, params }: { children: React.ReactNode, params: { teamId: string } }) {

  const { teamId } = await params;

  return (
    <div className="flex h-screen">
      <Sidebar teamId={teamId} />
      <main className="pl-16 flex-1 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}