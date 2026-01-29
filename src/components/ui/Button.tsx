import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const sizes = {
  sm: "text-sm px-5 py-2.5",
  md: "text-base px-8 py-4",
  lg: "text-lg px-10 sm:px-14 py-4 sm:py-5",
};

export function Button({ 
  children, 
  href, 
  variant = "primary", 
  size = "md",
  className = "",
  onClick 
}: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  const sizeClass = sizes[size];
  
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${sizeClass} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${sizeClass} ${className}`}>
      {children}
    </button>
  );
}
