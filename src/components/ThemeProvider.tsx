"use client";

import { ReactNode } from "react";
import { ThemeProvider as TP } from "@/contexts/ThemeContext";

type Theme = "dark" | "light";

export default function ThemeProvider({ children, initialTheme = "dark" }: { children: ReactNode; initialTheme?: Theme }) {
  return <TP initialTheme={initialTheme}>{children}</TP>;
}
