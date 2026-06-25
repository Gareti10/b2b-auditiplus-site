import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./Brand";

const links = [
  ["Início", "inicio"],
  ["Sobre", "sobre"],
  ["Soluções", "solucoes"],
  ["Stack", "stack"],
  ["Cases", "cases"],
  ["Auditiplus", "auditiplus"],
  ["Métricas", "metricas"],
  ["Contato", "contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-white/10 bg-navy/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-[76px] items-center justify-between">
        <Brand />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={`#${href}`}
              className="text-xs font-semibold text-muted transition hover:text-cyan"
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="button-primary hidden !px-5 !py-2.5 lg:inline-flex">
          Avaliação gratuita
          <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy/95 px-5 pb-5 backdrop-blur-xl xl:hidden"
          >
            <div className="container-site !px-0 pt-3">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-3 text-sm font-semibold text-muted hover:text-cyan"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
