import { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  gradient = false,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-20 sm:mb-24 lg:mb-32 ${className}`}>
      <h2 className={`
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-bold text-white
        mb-6 sm:mb-8 lg:mb-10
        leading-tight
        animate-fade-in-up       `}>
        {gradient ? <span className="gradient-text">{title}</span> : title}
      </h2>
      {subtitle && (
        <p className="text-xl sm:text-2xl md:text-3xl text-muted max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100 fill-backwards">
          {subtitle}
        </p>
      )}
    </div>
  );
}
