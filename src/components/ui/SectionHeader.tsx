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
    <div className={`${centered ? "text-center" : ""} mb-16 sm:mb-20 lg:mb-28 ${className}`}>
      <h2 className={`
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold text-white 
        mb-4 sm:mb-6 lg:mb-8
        leading-tight
      `}>
        {gradient ? <span className="gradient-text">{title}</span> : title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
