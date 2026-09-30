import type { Metadata } from "next";
import "./globals.css";
import { poppins, satoshi } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "ByteSpace",
  description:
    "Access hundreds of professional courses with ByteSpace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}