import NotFoundButton from "./not-found-button";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-9xl font-bold text-foreground/30">404</h1>
      <p className="text-lg mb-4">
        Sidan du letar efter verkar inte finnas.
      </p>
      <NotFoundButton />
    </div>
  );
}
