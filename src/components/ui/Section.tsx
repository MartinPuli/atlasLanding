"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacings = {
  sm: "py-16 sm:py-20 lg:py-24",
  md: "py-20 sm:py-28 lg:py-36",
  lg: "py-24 sm:py-36 lg:py-48",
  xl: "py-32 sm:py-44 lg:py-56",
};

export function Section({ 
  children, 
  className = "", 
  id, 
  dark = false,
  spacing = "lg" 
}: SectionProps) {
  const { ref, isVisible } = useScrollReveal(0.08);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        relative w-full
        ${spacings[spacing]}
        ${dark ? "bg-black/40" : ""}
        ${className}
        transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {children}
    </section>
  );
}
