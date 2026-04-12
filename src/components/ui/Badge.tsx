import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Badge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span
    className={cn(
      "rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700",
      className
    )}
  >
    {children}
  </span>
);
