import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#020617]">
      <SignIn
        appearance={{
          baseTheme: dark,
        }}
        fallbackRedirectUrl="/"
        signUpUrl="/sign-up"
      />
    </div>
  );
}