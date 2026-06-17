import type { Metadata } from "next";
import { SiteChrome } from "./SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikram Patni | Metallurgy, Operations & Project Leadership",
  description:
    "Founder and CEO of Proventus Valuetech. Metallurgy, process engineering, plant performance, strategic sourcing, and project execution leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
