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
  sm: "py-20 sm:py-24 lg:py-32",
  md: "py-24 sm:py-32 lg:py-40",
  lg: "py-32 sm:py-40 lg:py-52",
  xl: "py-40 sm:py-52 lg:py-64",
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
