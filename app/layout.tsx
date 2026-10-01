import type { Metadata, Viewport } from "next";

import { poppins, satoshi } from "@/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace",
  },

  description:
    "ByteSpace is an online learning platform for discovering courses, developing professional skills, and connecting with creators.",

  applicationName: "ByteSpace",

  keywords: [
    "ByteSpace",
    "online courses",
    "learning platform",
    "professional development",
    "course creators",
  ],

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0445ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${satoshi.variable}
          ${poppins.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
