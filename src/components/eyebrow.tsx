export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.22em] ${
        dark ? "text-gold" : "text-violet"
      }`}
    >
      {children}
    </p>
  );
}
