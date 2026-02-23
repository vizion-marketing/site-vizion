"use client";

import React from "react";
import { useComingSoon } from "./ComingSoonProvider";

interface ComingSoonLinkProps {
  children: React.ReactNode;
  className?: string;
}

export function ComingSoonLink({ children, className }: ComingSoonLinkProps) {
  const { open } = useComingSoon();

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
