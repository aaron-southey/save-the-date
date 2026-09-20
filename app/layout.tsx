import type { Metadata } from "next";
import { wedding } from "@/lib/wedding";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(wedding.site.url),
  title: wedding.site.title,
  description: wedding.site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: wedding.site.title,
    description: wedding.site.description,
    type: "website",
    url: "/",
    images: [{ url: wedding.site.ogImage, width: 1200, height: 630, alt: "Aaron and Charlotte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: wedding.site.title,
    description: wedding.site.description,
    images: [wedding.site.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans bg-[#f4ede2]">{children}</body>
    </html>
  );
}
