import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function HomePage() {
  const { userId } = auth();
  if (userId != null) redirect("/events");

  return (
    <div className="grid min-h-screen">
      <div className="size-full flex flex-col gap-4 text-center items-center justify-center">
        <h1 className="text-xl">Some Super Fancy Landing Page</h1>
        <Button
          asChild
        >
          <SignInButton />
        </Button>
        <Button
          asChild
        >
          <SignUpButton />
        </Button>
      </div>
    </div>
  );
}
