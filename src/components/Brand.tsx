import { Activity } from "lucide-react";

export function Brand() {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="B2B + Auditiplus">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
        <Activity size={21} strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-green ring-2 ring-navy" />
      </span>
      <span>
        <span className="block font-display text-lg font-extrabold leading-none tracking-[-0.03em] text-white">
          B2B<span className="text-cyan">+</span>
        </span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.2em] text-muted transition group-hover:text-green">
          Auditiplus
        </span>
      </span>
    </a>
  );
}
