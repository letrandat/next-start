import type { Metadata } from "next";

import AppNavBar from "@/components/app-navbar";
import { Providers } from "@/components/hero-ui-providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Speed Run Nex.js",
  description: "Speed Run Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">
        <Providers>
          <AppNavBar />
          <main className="grow bg-[url(/light-bg.svg)] bg-cover bg-repeat">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
