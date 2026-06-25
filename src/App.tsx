import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Binary,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  CloudCog,
  Database,
  FileCheck2,
  FlaskConical,
  GitBranch,
  HeartPulse,
  Hospital,
  LockKeyhole,
  Mail,
  Microscope,
  Network,
  Radio,
  Rocket,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Brand } from "./components/Brand";
import { Header } from "./components/Header";
import { IntegrationVisual } from "./components/IntegrationVisual";
import { Reveal } from "./components/Reveal";
import { SectionHeading } from "./components/SectionHeading";

type CardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const expertise: CardItem[] = [
  { icon: Radio, title: "HL7 Expert", description: "Mensageria clínica robusta e rastreável." },
  { icon: HeartPulse, title: "FHIR R4", description: "APIs modernas para interoperabilidade real." },
  { icon: Blocks, title: "Low-Code", description: "Conectores entregues com muito mais velocidade." },
  { icon: BrainCircuit, title: "AI-Powered", description: "IA aplicada ao mapeamento e à validação." },
  { icon: Network, title: "HIS / LIS", description: "Ecossistemas hospitalares e laboratoriais." },
];

const marketProblems: CardItem[] = [
  {
    icon: Database,
    title: "Silos de Dados",
    description: "Informações clínicas isoladas atrasam decisões e aumentam o risco assistencial.",
  },
  {
    icon: GitBranch,
    title: "Padrões Incompatíveis",
    description: "Formatos, versões e regras distintas impedem uma comunicação segura entre sistemas.",
  },
  {
    icon: Clock3,
    title: "Integração Lenta e Cara",
    description: "Projetos tradicionais consomem meses, orçamento e energia das equipes internas.",
  },
];

const solutionCards: CardItem[] = [
  {
    icon: Binary,
    title: "Tradução Automática",
    description: "Conversão inteligente de mensagens, formatos e estruturas clínicas.",
  },
  {
    icon: BrainCircuit,
    title: "Mapeamento Semântico",
    description: "Correspondência de campos e terminologias apoiada por inteligência artificial.",
  },
  {
    icon: CheckCircle2,
    title: "Validação em Tempo Real",
    description: "Regras FHIR e de negócio aplicadas antes da informação chegar ao destino.",
  },
  {
    icon: Workflow,
    title: "Orquestração de Eventos",
    description: "Fluxos observáveis, resilientes e preparados para alta criticidade.",
  },
];

const stack: CardItem[] = [
  { icon: Radio, title: "HL7 v2/v3", description: "ADT, ORM, ORU, SIU e demais eventos clínicos." },
  { icon: HeartPulse, title: "FHIR R4", description: "Resources, profiles, bundles e APIs REST." },
  { icon: Hospital, title: "HIS Integration", description: "Prontuário, agenda, faturamento e internação." },
  { icon: FlaskConical, title: "LIS Integration", description: "Pedidos, amostras, resultados e laudos." },
  { icon: Bot, title: "IA & Machine Learning", description: "Automação, classificação e observabilidade." },
  { icon: Blocks, title: "Low-Code Platform", description: "Evolução ágil sem criar dependência técnica." },
];

const cases = [
  {
    icon: Microscope,
    category: "Laboratórios",
    title: "Resultados integrados, do pedido ao laudo",
    description: "Automação de fluxos laboratoriais com rastreabilidade ponta a ponta.",
    tags: ["Atria LIS", "SoftLab", "Labmax"],
  },
  {
    icon: Hospital,
    category: "Hospitais",
    title: "Jornadas clínicas sem ruptura",
    description: "Integrações entre assistência, diagnóstico e gestão hospitalar.",
    tags: ["MV Soul", "Salutem", "HIS"],
  },
  {
    icon: ScanLine,
    category: "Diagnóstico",
    title: "Telepatologia e PACS conectados",
    description: "Imagens, dados clínicos e laudos disponíveis no contexto certo.",
    tags: ["PACS", "DICOM", "Legados"],
  },
];

const methodology = [
  { label: "Sprint 0", title: "Discovery", description: "Mapeamos processos, riscos e objetivos." },
  { label: "Sprint 1–2", title: "Prototipagem", description: "Conectores e fluxos ganham forma rapidamente." },
  { label: "Sprint 3–4", title: "Validação", description: "Testes clínicos, técnicos e de segurança." },
  { label: "Go-Live", title: "Monitoramento", description: "Entrada assistida e observabilidade contínua." },
];

const comparison = [
  ["Tempo de implementação", "3 a 6 meses", "< 4 semanas"],
  ["Custo total", "Alto e imprevisível", "Enxuto e escalável"],
  ["Padrões suportados", "Limitados", "HL7, FHIR, REST, legados"],
  ["IA nas integrações", "Não disponível", "Nativa"],
  ["Auditoria integrada", "Projeto separado", "Auditiplus integrada"],
  ["Suporte pós-go-live", "Reativo", "Contínuo e monitorado"],
];

const metrics = [
  ["+50", "integrações ativas"],
  ["+15", "clientes"],
  ["< 4", "semanas por conector"],
  ["99,9%", "uptime"],
  ["85%", "prazo reduzido"],
  ["60%", "economia"],
];

function FeatureCard({ icon: Icon, title, description }: CardItem) {
  return (
    <div className="glass-card group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-panel/80">
      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan transition group-hover:bg-cyan group-hover:text-navy">
        <Icon size={21} />
      </span>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Header />

      <main>
        <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-28">
          <div className="tech-grid absolute inset-0 bg-hero-grid" />
          <div className="absolute -left-40 top-28 h-96 w-96 rounded-full bg-cyan/10 blur-[110px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-green/10 blur-[120px]" />

          <div className="container-site relative z-10 grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow">
                <Sparkles size={13} />
                Interoperabilidade que transforma
              </span>
              <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Conectando o Futuro da{" "}
                <span className="gradient-text">Saúde Digital</span>
              </h1>
              <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.1em] text-cyan sm:text-base">
                Integrações Inteligentes com IA · HL7 · FHIR · HIS · LIS
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                Onde a tecnologia encontra a medicina — com precisão, velocidade e inteligência
                artificial.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato" className="button-primary">
                  Solicite uma avaliação técnica gratuita
                  <ArrowUpRight size={17} />
                </a>
                <a href="#solucoes" className="button-secondary">
                  Conheça nossas soluções
                  <ArrowRight size={17} />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                {["Healthtech desde 2021", "Security by design", "Suporte especialista"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2 text-xs font-semibold text-muted">
                      <Check size={15} className="text-green" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <IntegrationVisual />
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="border-y border-white/5 py-24 lg:py-32">
          <div className="container-site">
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <Reveal>
                <SectionHeading
                  eyebrow="Sobre a B2B"
                  title="Especialistas em fazer a saúde digital conversar"
                  description="Desde 2021, unimos engenharia de integração, conhecimento do ambiente clínico e inteligência artificial para conectar sistemas críticos com segurança e velocidade."
                />
              </Reveal>
              <Reveal delay={0.1} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {expertise.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="glass-card rounded-2xl p-5">
                    <Icon className="mb-4 text-cyan" size={22} />
                    <h3 className="font-display text-sm font-bold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-muted">{description}</p>
                  </div>
                ))}
                <div className="flex min-h-36 flex-col justify-between rounded-2xl border border-green/25 bg-green/10 p-5">
                  <Award className="text-green" size={23} />
                  <p className="font-display text-sm font-bold text-white">
                    Tecnologia com visão de negócio e impacto assistencial.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="O desafio"
                title="A Fragmentação na Saúde Digital Custa Vidas e Recursos"
                description="Quando dados não circulam, pessoas esperam. A B2B reduz a complexidade técnica para que a informação certa chegue ao lugar certo, no tempo certo."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {marketProblems.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <FeatureCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="solucoes" className="relative overflow-hidden border-y border-white/5 bg-panel/20 py-24 lg:py-32">
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
          <div className="container-site relative">
            <Reveal>
              <SectionHeading
                eyebrow="Solução B2B"
                title="Motor de Integração Inteligente — Powered by AI"
                description="Uma camada segura entre sistemas, capaz de traduzir, enriquecer, validar e distribuir dados clínicos em tempo real."
                align="center"
              />
            </Reveal>

            <Reveal delay={0.1} className="glass-card relative mt-14 rounded-3xl p-5 sm:p-8">
              <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
                {[
                  [Database, "Sistema Origem", "HIS · LIS · PACS"],
                  [BrainCircuit, "Motor IA B2B", "Análise semântica"],
                  [Binary, "Transformação", "Mapeamento de dados"],
                  [FileCheck2, "Validação FHIR", "Regras e profiles"],
                  [CloudCog, "Sistema Destino", "APIs · Legados"],
                ].map(([Icon, title, subtitle], index) => {
                  const FlowIcon = Icon as LucideIcon;
                  return (
                    <div key={title as string} className="contents">
                      <div className="relative rounded-2xl border border-white/10 bg-navy/65 p-4 text-center">
                        <FlowIcon className="mx-auto mb-3 text-cyan" size={23} />
                        <p className="font-display text-xs font-bold text-white sm:text-sm">
                          {title as string}
                        </p>
                        <p className="mt-1 text-[10px] text-muted">{subtitle as string}</p>
                      </div>
                      {index < 4 && (
                        <div className="flex items-center justify-center py-1">
                          <div className="flow-line h-px w-12 lg:w-5" />
                          <ChevronRight className="-ml-1 text-green" size={16} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {solutionCards.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <FeatureCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Stack tecnológico"
                title="Padrões sólidos. Arquitetura preparada para evoluir."
                description="Tecnologia moderna para integrar o que já existe e abrir caminho para o que vem depois."
              />
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stack.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <FeatureCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="border-y border-white/5 bg-white/[0.015] py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Cases de sucesso"
                title="Integrações que já operam onde cada segundo importa"
                description="Experiência em ambientes de alta criticidade, conectando plataformas líderes e sistemas legados."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {cases.map(({ icon: Icon, category, title, description, tags }, index) => (
                <Reveal key={category} delay={index * 0.08}>
                  <article className="glass-card group h-full overflow-hidden rounded-3xl">
                    <div className="relative h-40 overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan/10 via-panel to-green/10 p-6">
                      <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-cyan/20" />
                      <div className="absolute right-4 top-4 h-24 w-24 rounded-full border border-dashed border-green/20" />
                      <Icon className="absolute bottom-5 left-6 text-cyan" size={46} strokeWidth={1.2} />
                      <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-navy/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green">
                        {category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="auditiplus" className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-green/10 blur-[130px]" />
          <div className="container-site relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <Reveal>
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-green/30 bg-green/10 text-green shadow-greenGlow">
                <ShieldCheck size={28} />
              </span>
              <SectionHeading
                eyebrow="Auditiplus"
                title="Auditoria de TI integrada à realidade da saúde"
                description="Tecnologia sem governança cria risco. A Auditiplus avalia arquitetura, integrações, processos e controles para transformar conformidade em confiança."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {["LGPD", "CFM", "CFF", "ANVISA", "Segurança da Informação"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green/20 bg-green/5 px-3 py-1.5 text-[11px] font-bold text-green"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [ClipboardCheck, "Auditoria de TI em Saúde", "Avaliação de controles, processos e arquitetura tecnológica."],
                [LockKeyhole, "Segurança de Integrações", "Análise de acesso, tráfego, logs, rastreabilidade e exposição."],
                [BarChart3, "Relatórios Executivos", "Riscos traduzidos em prioridades claras para a liderança."],
                [ShieldCheck, "Conformidade Contínua", "Planos de ação aderentes às normas do setor de saúde."],
              ].map(([Icon, title, description], index) => {
                const AuditIcon = Icon as LucideIcon;
                return (
                  <Reveal key={title as string} delay={index * 0.07}>
                    <div className="glass-card h-full rounded-2xl p-6 hover:border-green/30">
                      <AuditIcon className="mb-5 text-green" size={23} />
                      <h3 className="font-display text-lg font-bold text-white">{title as string}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{description as string}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-panel/20 py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Metodologia ágil"
                title="Entregamos em Semanas o que o Mercado Leva Meses"
                description="Um processo direto, validado em ciclos curtos e com visibilidade total para sua equipe."
                align="center"
              />
            </Reveal>
            <div className="relative mt-14 grid gap-4 md:grid-cols-4">
              <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-cyan via-cyan to-green md:block" />
              {methodology.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.08} className="relative">
                  <div className="glass-card relative h-full rounded-2xl p-6 pt-16">
                    <span className="absolute left-6 top-0 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-4 border-navy bg-cyan font-display text-sm font-extrabold text-navy md:left-1/2 md:-translate-x-1/2">
                      {index + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">{item.label}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Diferenciais"
                title="Uma nova referência para projetos de integração"
                description="A combinação de especialização, plataforma, inteligência artificial e auditoria reduz riscos em todas as etapas."
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-3xl border border-white/10">
              <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-panel/90 px-4 py-5 text-xs font-bold sm:px-7 sm:text-sm">
                <span>Critério</span>
                <span className="text-muted">Mercado tradicional</span>
                <span className="text-cyan">B2B + Auditiplus</span>
              </div>
              {comparison.map(([criterion, market, b2b]) => (
                <div
                  key={criterion}
                  className="grid grid-cols-[1.3fr_1fr_1fr] items-center border-t border-white/5 bg-panel/35 px-4 py-5 text-[11px] sm:px-7 sm:text-sm"
                >
                  <span className="pr-3 font-semibold text-white">{criterion}</span>
                  <span className="pr-3 text-muted">{market}</span>
                  <span className="flex items-start gap-2 font-semibold text-green">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                    {b2b}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="metricas" className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-24 lg:py-32">
          <div className="tech-grid absolute inset-0 bg-hero-grid opacity-60" />
          <div className="container-site relative">
            <Reveal>
              <SectionHeading
                eyebrow="Resultados"
                title="Impacto que pode ser medido"
                description="Indicadores construídos em projetos reais, com foco em eficiência operacional e continuidade."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-6">
              {metrics.map(([value, label], index) => (
                <Reveal key={label} delay={index * 0.05}>
                  <div className="glass-card flex min-h-36 flex-col items-center justify-center rounded-2xl p-4 text-center">
                    <strong className="gradient-text font-display text-3xl font-extrabold sm:text-4xl">{value}</strong>
                    <span className="mt-2 text-xs font-semibold leading-5 text-muted">{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-24 lg:py-32">
          <div className="container-site">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-panel via-[#0c2034] to-[#082a2c] px-6 py-14 text-center shadow-glow sm:px-12 sm:py-20">
                <div className="tech-grid absolute inset-0 bg-hero-grid opacity-50" />
                <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan/15 blur-[100px]" />
                <div className="relative mx-auto max-w-3xl">
                  <span className="eyebrow">
                    <Rocket size={13} />
                    Próximo passo
                  </span>
                  <h2 className="font-display text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                    Vamos Conectar o Seu Sistema?
                  </h2>
                  <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    Sua infraestrutura de saúde pronta para o futuro: mais rápida, integrada e 100% segura.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="mailto:comercial@auditiplus.com.br?subject=Avaliação técnica gratuita"
                      className="button-primary"
                    >
                      Solicite sua avaliação técnica gratuita
                      <ArrowUpRight size={17} />
                    </a>
                    <a
                      href="mailto:comercial@auditiplus.com.br"
                      className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan"
                    >
                      <Mail size={17} className="text-green" />
                      comercial@auditiplus.com.br
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="container-site flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Brand />
          <p className="text-center text-xs leading-5 text-muted sm:text-right">
            © {new Date().getFullYear()} B2B Consultoria em Sistemas e TI + Auditiplus.
            <br />
            Tecnologia, interoperabilidade e confiança para a saúde.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
