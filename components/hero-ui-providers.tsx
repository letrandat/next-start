"use client";

import { useRouter } from "next/navigation";

import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
