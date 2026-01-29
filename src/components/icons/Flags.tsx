interface FlagProps {
  className?: string;
}

export function FlagUS({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 60 30" className={className}>
      <rect width="60" height="30" fill="#b22234" />
      <path d="M0,4h60v4h-60M0,12h60v4h-60M0,20h60v4h-60" fill="#fff" />
      <rect width="24" height="15" fill="#3c3b6e" />
    </svg>
  );
}

export function FlagAR({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 30 20" className={className}>
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6" fill="#74acdf" />
      <rect y="14" width="30" height="6" fill="#74acdf" />
      <circle cx="15" cy="10" r="2" fill="#f6b40e" />
    </svg>
  );
}
