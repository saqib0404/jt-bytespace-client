import Link from "next/link";

import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

const browseLinks = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
];

const developmentLinks = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
];

const platformLinks = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
];

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-neutral-700">{title}</h3>

      <ul className="mt-5 space-y-4">
        {links.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="
                text-sm
                text-neutral-600
                transition-colors
                hover:text-primary-600
                focus-visible:outline-none
                focus-visible:text-primary-600
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.7fr_1fr_1fr_1fr] lg:gap-16 lg:py-20">
          <div>
            <Logo variant="dark" />

            <p className="mt-5 max-w-[430px] text-sm leading-6 text-neutral-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="mt-8 flex max-w-[500px] flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="
                  h-12
                  min-w-0
                  flex-1
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  px-5
                  text-sm
                  text-neutral-950
                  outline-none
                  placeholder:text-neutral-500
                  focus:border-primary-600
                  focus:ring-2
                  focus:ring-primary-100
                "
              />

              <button
                type="button"
                className="
                  h-12
                  rounded-full
                  bg-secondary-400
                  px-7
                  text-sm
                  font-medium
                  text-neutral-950
                  transition-transform
                  hover:scale-[1.02]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary-600
                "
              >
                Search
              </button>
            </div>

            <p className="mt-5 max-w-[500px] text-xs leading-5 text-neutral-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <FooterColumn title="Browse" links={browseLinks} />

          <FooterColumn title="Development" links={developmentLinks} />

          <FooterColumn title="Platform" links={platformLinks} />
        </div>

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-neutral-200
            py-7
            text-xs
            text-neutral-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="#" className="hover:text-primary-600">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-primary-600">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-primary-600">
              Cookies Settings
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
