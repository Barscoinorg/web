"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { useSessionStore } from "@/store/session";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isLoggedIn } = useSessionStore();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}
