// El símbolo de Fullkod, en dos piezas: el «<» violeta y el «>» dorado.
// Cada pieza puede animarse por separado (ver clases .simbolo-izq / .simbolo-der en globals.css).

type Props = {
  className?: string;
  animado?: boolean;
};

const VIOLETA = "M136,32 128,24 24,128 109.75,213.75 137.18,166.25 128,175.43 80.57,128Z";
const ORO = "M120,224 128,232 232,128 146.25,42.25 118.82,89.75 128,80.57 175.43,128Z";

export function Simbolo({ className = "", animado = false }: Props) {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <path
        d={VIOLETA}
        fill="#5B21B6"
        className={animado ? "simbolo-izq" : undefined}
      />
      <path
        d={ORO}
        fill="#F2B705"
        className={animado ? "simbolo-der" : undefined}
      />
    </svg>
  );
}

// La barra «/» del nombre: separa secciones y acompaña los títulos.
export function Barra({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 96" aria-hidden="true" className={className} focusable="false">
      <polygon fill="#F2B705" points="26,0 40,0 14,96 0,96" />
    </svg>
  );
}
