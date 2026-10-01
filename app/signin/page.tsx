import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthField from "@/components/auth/AuthField";
import SocialButtons from "@/components/auth/SocialButtons";

export const metadata = {
  title: "Sign In | ByteSpace",
};

export default function SigninPage() {
  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex min-h-[650px] flex-col">
        <div>
          <p className="text-lg font-medium text-primary-600">Sign In</p>

          <h2 className="mt-3 font-heading text-4xl font-semibold text-neutral-950 sm:text-5xl">
            Welcome Back
          </h2>
        </div>

        <form className="mt-12 space-y-7">
          <AuthField
            id="signin-email"
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
          />

          <AuthField
            id="signin-password"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="current-password"
          />

          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="
                rounded-full
                bg-secondary-400
                px-8 py-3
                font-medium
                text-neutral-950
                transition-transform
                hover:scale-[1.03]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary-600
              "
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />

          <span className="text-sm text-neutral-400">or</span>

          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <SocialButtons />

        <p className="mt-auto pt-12 text-center text-neutral-500">
          New user?{" "}
          <Link href="/signup" className="text-primary-600 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
