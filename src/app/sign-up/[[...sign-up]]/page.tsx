import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617]">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
        fallbackRedirectUrl="/"
        signInUrl="/sign-in"
      />
    </div>
  );
}