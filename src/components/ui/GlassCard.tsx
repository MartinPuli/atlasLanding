import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
}

const paddings = {
  sm: "p-4 sm:p-5",
  md: "p-5 sm:p-6 lg:p-8",
  lg: "p-6 sm:p-8 lg:p-10",
  xl: "p-8 sm:p-10 lg:p-14",
};

export function GlassCard({ 
  children, 
  className = "", 
  hover = true,
  padding = "md" 
}: GlassCardProps) {
  return (
    <div className={`
      glass-card 
      rounded-2xl sm:rounded-3xl 
      ${paddings[padding]}
      ${hover ? "cursor-default" : ""}
      ${className}
    `}>
      {children}
    </div>
  );
}
