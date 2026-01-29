import { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
}

const paddings = {
  sm: "p-5 sm:p-6",
  md: "p-6 sm:p-8 lg:p-10",
  lg: "p-8 sm:p-10 lg:p-12",
  xl: "p-10 sm:p-12 lg:p-16",
};

export function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "md",
  style
}: GlassCardProps) {
  return (
    <div
      className={`
        glass-card
        rounded-2xl sm:rounded-3xl
        ${paddings[padding]}
        ${hover ? "cursor-default" : ""}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
}
