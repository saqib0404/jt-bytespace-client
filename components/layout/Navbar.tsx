"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/#courses",
  },
  {
    label: "Creators",
    href: "/#creators",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex h-24 items-center justify-between"
        >
          <Logo variant="light" />

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  rounded-sm
                  text-sm
                  text-white/90
                  transition-colors
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-secondary-400
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/signin"
              className="
                rounded-sm
                text-sm
                text-white/90
                transition-colors
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-secondary-400
              "
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="
                rounded-sm
                text-sm
                text-white/90
                transition-colors
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-secondary-400
              "
            >
              Join Us
            </Link>

            <button
              type="button"
              aria-label="Open shopping bag"
              className="
                rounded-md
                text-white
                transition-opacity
                hover:opacity-80
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-secondary-400
              "
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
            </button>
          </div>

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-colors
              hover:bg-white/10
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-secondary-400
              md:hidden
            "
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="
            border-t
            border-white/15
            bg-primary-600/95
            px-5
            pb-6
            pt-3
            backdrop-blur-xl
            md:hidden
          "
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-[1200px] flex-col"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="
                  border-b
                  border-white/10
                  py-4
                  text-base
                  text-white
                "
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link
                href="/signin"
                onClick={closeMenu}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  text-sm
                  font-medium
                  text-white
                "
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={closeMenu}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  bg-secondary-400
                  text-sm
                  font-medium
                  text-neutral-950
                "
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
