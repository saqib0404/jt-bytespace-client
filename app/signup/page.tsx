import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthField from "@/components/auth/AuthField";

export const metadata = {
  title: "Create Account | ByteSpace",
};

export default function SignupPage() {
  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="flex min-h-[650px] flex-col">
        <div>
          <p className="text-lg font-medium text-primary-600">
            Create an Account
          </p>

          <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            Welcome to
            <br />
            ByteSpace
          </h2>
        </div>

        <form
          className="mt-12 space-y-7"
        //   onSubmit={(event) => {
        //     event.preventDefault();
        //   }}
        >
          <AuthField
            id="full-name"
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Jamie Davis"
            autoComplete="name"
          />

          <AuthField
            id="signup-email"
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
          />

          <AuthField
            id="signup-password"
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            autoComplete="new-password"
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
              Continue
            </button>
          </div>
        </form>

        <p className="mt-auto pt-12 text-center text-neutral-500">
          Already have an account?{" "}
          <Link href="/signin" className="text-primary-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
