"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ComingSoonModal } from "./ComingSoonModal";

interface ComingSoonContextType {
  open: () => void;
}

const ComingSoonContext = createContext<ComingSoonContextType>({ open: () => {} });

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <ComingSoonContext.Provider value={{ open }}>
      {children}
      <ComingSoonModal isOpen={isOpen} onClose={close} />
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  return useContext(ComingSoonContext);
}
