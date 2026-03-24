"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useLenis } from "./SmoothScroller";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top on route change
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Refresh GSAP ScrollTrigger after navigation
    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      ScrollTrigger.refresh();
    });
  }, [pathname, lenis]);

  // key={pathname} forces React to unmount/remount children on route change
  // This resets all Framer Motion animation states (whileInView, once: true)
  return <div key={pathname}>{children}</div>;
}
