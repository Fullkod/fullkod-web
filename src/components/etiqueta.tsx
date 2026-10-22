export function Etiqueta({
  children,
  oscuro = false,
}: {
  children: React.ReactNode;
  oscuro?: boolean;
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.22em] ${
        oscuro ? "text-gold" : "text-violet"
      }`}
    >
      {children}
    </p>
  );
}
