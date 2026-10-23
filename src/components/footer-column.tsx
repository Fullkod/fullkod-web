"use client";

import { useId, useState } from "react";

// Footer column: a collapsible section on mobile (like the FAQ), always open from `md` up.
export function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-white/10 md:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between py-5 text-left md:pointer-events-none md:cursor-default md:py-0"
      >
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold">{title}</span>
        <span
          aria-hidden="true"
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition duration-300 md:hidden ${
            open ? "rotate-45 bg-gold text-ink" : ""
          }`}
        >
          +
        </span>
      </button>
      <div id={id} className={`${open ? "block" : "hidden"} pb-6 md:mt-5 md:block md:pb-0`}>
        {children}
      </div>
    </div>
  );
}
