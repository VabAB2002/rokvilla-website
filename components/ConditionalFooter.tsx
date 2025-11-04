"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Don't render footer on homepage as it's included in the scroll container
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
}

