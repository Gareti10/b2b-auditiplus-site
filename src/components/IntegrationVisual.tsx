import { BrainCircuit, CheckCheck, Database, Network, ServerCog } from "lucide-react";

const nodes = [
  { label: "HIS", top: "12%", left: "4%", color: "cyan" },
  { label: "LIS", top: "72%", left: "2%", color: "green" },
  { label: "PACS", top: "8%", right: "2%", color: "green" },
  { label: "FHIR", top: "74%", right: "1%", color: "cyan" },
];

export function IntegrationVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="absolute inset-[12%] rounded-full border border-cyan/10" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-green/15" />
      <div className="absolute inset-[4%] rounded-full bg-cyan/5 blur-3xl" />

      {nodes.map((node, index) => (
        <div
          key={node.label}
          className={`absolute z-10 flex h-16 w-16 items-center justify-center rounded-2xl border bg-navy/90 font-display text-[11px] font-extrabold shadow-xl sm:h-20 sm:w-20 sm:text-xs ${
            node.color === "cyan"
              ? "border-cyan/30 text-cyan shadow-cyan/5"
              : "border-green/30 text-green shadow-green/5"
          }`}
          style={{
            top: node.top,
            left: node.left,
            right: node.right,
            animationDelay: `${index * 0.45}s`,
          }}
        >
          {node.label}
          <span
            className={`signal-dot absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full ${
              node.color === "cyan" ? "bg-cyan" : "bg-green"
            }`}
          />
        </div>
      ))}

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 540 540" fill="none">
        <path d="M90 105C160 140 178 187 234 233" stroke="#00CFFF" strokeOpacity=".35" />
        <path d="M80 435C165 402 185 352 235 305" stroke="#00D084" strokeOpacity=".35" />
        <path d="M450 98C385 135 360 182 306 230" stroke="#00D084" strokeOpacity=".35" />
        <path d="M464 430C390 400 361 350 305 305" stroke="#00CFFF" strokeOpacity=".35" />
        <circle cx="270" cy="270" r="125" stroke="#00CFFF" strokeOpacity=".12" strokeDasharray="4 8" />
      </svg>

      <div className="absolute inset-[27%] flex flex-col items-center justify-center rounded-[2rem] border border-cyan/30 bg-panel/95 p-5 text-center shadow-glow backdrop-blur-xl sm:p-8">
        <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-green text-navy">
          <BrainCircuit size={30} />
        </span>
        <span className="font-display text-sm font-extrabold text-white sm:text-lg">Motor IA B2B</span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-muted sm:text-[10px]">
          Integração inteligente
        </span>
        <div className="mt-4 flex items-center gap-2 text-[9px] font-bold text-green sm:text-[10px]">
          <CheckCheck size={13} />
          VALIDAÇÃO ATIVA
        </div>
      </div>

      <div className="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-navy/90 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-muted">
        <Database size={13} className="text-cyan" />
        <Network size={13} className="text-green" />
        <ServerCog size={13} className="text-cyan" />
      </div>
    </div>
  );
}
