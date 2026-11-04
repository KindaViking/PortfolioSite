import type { Metadata } from "next";
import "@fontsource/metal-mania";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/silkscreen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrungeFilter from "@/components/GrungeFilter";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | ${site.role}`,
    template: `%s | ${site.fullName}`,
  },
  description: site.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="relative flex min-h-full flex-col">
        <GrungeFilter />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
