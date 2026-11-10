export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill={light ? "#FFFFFF" : "#14305D"} />
      <path d="M14 30 32 15l18 15" fill="none" stroke={light ? "#14305D" : "#FFFFFF"} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 29v19h22V29" fill="none" stroke={light ? "#14305D" : "#FFFFFF"} strokeWidth="4.5" strokeLinejoin="round" />
      <rect x="28" y="36" width="8" height="12" rx="1.5" fill="#C2410C" />
    </svg>
  );
}
