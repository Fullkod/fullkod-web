// The Fullkod symbol, in two pieces: the violet "<" and the gold ">".
// Each piece can be animated on its own (see .symbol-left / .symbol-right in globals.css).

type Props = {
  className?: string;
  animated?: boolean;
};

const VIOLET_PATH = "M136,32 128,24 24,128 109.75,213.75 137.18,166.25 128,175.43 80.57,128Z";
const GOLD_PATH = "M120,224 128,232 232,128 146.25,42.25 118.82,89.75 128,80.57 175.43,128Z";

export function BrandSymbol({ className = "", animated = false }: Props) {
  return (
    <svg
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <path
        d={VIOLET_PATH}
        fill="#5B21B6"
        className={animated ? "symbol-left" : undefined}
      />
      <path
        d={GOLD_PATH}
        fill="#F2B705"
        className={animated ? "symbol-right" : undefined}
      />
    </svg>
  );
}

// The name's "/" bar: separates sections and goes with the headings.
export function Slash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 96" aria-hidden="true" className={className} focusable="false">
      <polygon fill="#F2B705" points="26,0 40,0 14,96 0,96" />
    </svg>
  );
}

// Gold pieces of the symbol peeking in from both edges of a dark section.
// The section must be `relative overflow-hidden` and its content `relative` to sit on top.
export function GoldEdges() {
  return (
    <>
      <svg
        viewBox="0 0 256 256"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute -left-28 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rotate-180 opacity-[0.22] md:-left-24 md:h-[34rem] md:w-[34rem]"
      >
        <path d={GOLD_PATH} fill="#F2B705" />
      </svg>
      <svg
        viewBox="0 0 256 256"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute -right-28 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 opacity-[0.22] md:-right-24 md:h-[34rem] md:w-[34rem]"
      >
        <path d={GOLD_PATH} fill="#F2B705" />
      </svg>
    </>
  );
}
