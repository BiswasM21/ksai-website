"use client";

import { ReactNode } from "react";
import { ThemeProvider as TP } from "@/contexts/ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <TP>{children}</TP>;
}
