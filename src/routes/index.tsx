import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Instagram, Link2, Menu, MessageCircle, WandSparkles, X } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import logoHq from "@/assets/paulo-moraes-logo-hq.png";
const aniversarioAsset = { url: "/fotos/foto-aniversario.png" };
const aniversario26Asset = { url: "/fotos/foto-aniversario-26.png" };
const gestacaoAsset = { url: "/fotos/foto-gestacao.png" };
const gestacaoMaeFilhoAsset = { url: "/fotos/foto-gestacao-mae-filho.png" };
const familiaNatalAsset = { url: "/fotos/foto-familia-natal.png" };
const casalGramadoAsset = { url: "/fotos/foto-casal-gramado.png" };
const bebeBailarinaAsset = { url: "/fotos/foto-bebe-bailarina.png" };
const formaturaAsset = { url: "/fotos/foto-formatura.png" };
const formaturaEnfermagemAsset = { url: "/fotos/foto-formatura-enfermagem.png" };
const logoAsset = { url: logoHq };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paulo Moraes — Sites, Links e Fotos com IA" },
      { name: "description", content: "Portfólio de Paulo Moraes: criação de sites, links personalizados para redes sociais e fotos com inteligência artificial." },
      { property: "og:title", content: "Paulo Moraes — Criação Digital" },
      { property: "og:description", content: "Sites profissionais, links personalizados e fotos com IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Sites profissionais",
    text: "Sites modernos, que funcionam bem no celular e mostram seu trabalho com clareza.",
  },
  {
    icon: Link2,
    title: "Links personalizados",
    text: "Páginas exclusivas para Instagram e redes sociais, reunindo seus principais canais em um só lugar.",
  },
  {
    icon: WandSparkles,
    title: "Fotos com IA",
    text: "Criação de imagens personalizadas para profissionais, marcas e momentos especiais.",
  },
];

const photoTypes = ["Formatura", "Aniversário", "Gestação", "Retratos de momentos"];

const aiPhotos = [
  {
    url: aniversario26Asset.url,
    type: "Aniversário",
    alt: "Mulher segurando velas em formato do número 26 em frente ao rosto",
  },
  {
    url: aniversarioAsset.url,
    type: "Aniversário",
    alt: "Mulher com vestido preto segurando balões dourados com os números 32",
  },
  {
    url: gestacaoMaeFilhoAsset.url,
    type: "Gestação",
    alt: "Gestante sorrindo ao lado do filho, que abraça a barriga da mãe",
  },
  {
    url: gestacaoAsset.url,
    type: "Gestação",
    alt: "Casal em ensaio de gestante, com o marido abraçando a barriga da esposa",
  },
  {
    url: formaturaEnfermagemAsset.url,
    type: "Formatura",
    alt: "Formanda de Enfermagem com beca verde e preta segurando o canudo",
  },
  {
    url: formaturaAsset.url,
    type: "Formatura",
    alt: "Formando em Medicina com beca branca, capelo e canudo verde",
  },
  {
    url: familiaNatalAsset.url,
    type: "Retratos de momentos",
    alt: "Família de pijamas vermelhos em retrato de Natal ao lado da árvore",
  },
  {
    url: casalGramadoAsset.url,
    type: "Retratos de momentos",
    alt: "Casal sorrindo em frente ao mural de corações em Gramado",
  },
  {
    url: bebeBailarinaAsset.url,
    type: "Retratos de momentos",
    alt: "Bebê sorridente com vestido rosa de bailarina ao lado do espelho e da barra de ballet",
  },
];

const projects = [
  {
    title: "Jéssica Luana",
    category: "Maquiadora",
    description: "Site profissional desenvolvido para apresentar o trabalho, os serviços e a presença digital da maquiadora.",
    url: "https://hug-of-code-25.lovable.app/",
  },
  {
    title: "Susape Augusto",
    category: "Site profissional",
    description: "Projeto desenvolvido para apresentar a presença profissional e os principais conteúdos do cliente.",
    url: "https://susapeaugusto.com.br/",
  },
  {
    title: "Grupo Vertice",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar o negócio e seus serviços.",
    url: "http://grupovertice.rmbuilder.site/vertice-auto-center",
  },
  {
    title: "Atelier barbers",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a barbearia e seus serviços.",
    url: "https://barber-sparkle-kit.lovable.app/",
  },
  {
    title: "ML estética",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a clínica e seus serviços de estética.",
    url: "https://clinicademoml.lovable.app/",
  },
  {
    title: "RG relogios",
    category: "Site profissional",
    description: "Site profissional desenvolvido para apresentar a marca e seus produtos.",
    url: "https://rgrelogios.lovable.app/",
  },
  {
    title: "Cabeleireiro",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo01",
  },
  {
    title: "Nail design",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo02",
  },
  {
    title: "Barbeiro, cabeleireiro",
    category: "Bio personalizada",
    description: "Link personalizado para reunir informações e canais de contato em um só lugar.",
    url: "https://fluxostudio.my.canva.site/modelo03",
  },
  {
    title: "Bio personalizada - Advogada",
    category: "Bio personalizada",
    description: "Link personalizado desenvolvido para apresentação profissional e contato.",
    url: "https://fluxostudio.my.canva.site/c-pia-de-advoagada",
  },
  {
    title: "Bio personalizada - Pizzaria",
    category: "Bio personalizada",
    description: "Link personalizado desenvolvido para apresentação do negócio e canais de contato.",
    url: "https://fluxostudio.my.canva.site/c-pia-de-pizzaria",
  },
  {
    title: "Bio personalizada - Confeiteira",
    category: "Bio personalizada",
    description: "Link personalizado desenvolvido para apresentação profissional e divulgação.",
    url: "https://fluxostudio.my.canva.site/c-pia-de-confeiteira",
  },
]

type ClickLight = { id: number; x: number; y: number };

function CursorLight() {
  const [clickLights, setClickLights] = useState<ClickLight[]>([]);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glowSize = () => (window.innerWidth < 768 ? 110 : 180);
    const applyGlow = (x: number, y: number) => {
      const half = glowSize() / 2;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - half}px, ${y - half}px, 0)`;
      }
    };
    const onMove = (event: MouseEvent) => {
      applyGlow(event.clientX, event.clientY);
    };
    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) applyGlow(touch.clientX, touch.clientY);
    };
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) applyGlow(touch.clientX, touch.clientY);
    };
    const onTouchEnd = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = "translate3d(-400px, -400px, 0)";
      }
    };
    const onClick = (event: MouseEvent) => {
      const id = performance.now();
      setClickLights((current) => [...current, { id, x: event.clientX, y: event.clientY }].slice(-12));
      window.setTimeout(() => {
        setClickLights((current) => current.filter((light) => light.id !== id));
      }, 1500);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("click", onClick);
    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="pointer-events-none fixed left-0 top-0 z-[45] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.035)_38%,transparent_72%)] mix-blend-screen max-md:h-[110px] max-md:w-[110px]" />
      {clickLights.map((light) => (
        <div key={light.id} className="click-light pointer-events-none fixed z-[45] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.05)_42%,transparent_72%)] mix-blend-screen" style={{ left: light.x - 60, top: light.y - 60 }} />
      ))}
    </>
  );
}

function Index() {
  const [photoFilter, setPhotoFilter] = useState<string | null>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoState, setVideoState] = useState<"waiting" | "playing" | "fading">("waiting");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const visiblePhotos = photoFilter ? aiPhotos.filter((photo) => photo.type === photoFilter) : aiPhotos;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIntroVisible(false);
      setVideoState("playing");
      document.body.style.overflow = previousOverflow;
    }, 3300);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (videoState !== "playing" || !video) return;

    video.muted = false;
    video.play().catch(() => undefined);
  }, [videoState]);

  const handleVideoEnded = () => {
    setVideoState("fading");
  };


  return (
    <main className="min-h-screen overflow-hidden bg-[#000000] text-white">
      {introVisible && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
          <div className="intro-panel intro-panel-top absolute inset-x-0 top-0 h-1/2 bg-[#000000]" />
          <div className="intro-panel intro-panel-bottom absolute inset-x-0 bottom-0 h-1/2 bg-[#000000]" />
          <div className="intro-content absolute inset-0 flex flex-col items-center justify-center gap-7">
            <div className="relative flex h-80 w-80 items-center justify-center overflow-hidden sm:h-96 sm:w-96">
              <div className="intro-glow absolute inset-0 rounded-full bg-white/20 blur-3xl" />
              <div className="relative h-full w-full scale-[1.55]">
                <img src={logoAsset.url} alt="" className="intro-logo h-full w-full object-contain drop-shadow-2xl" />
              </div>
            </div>
            <div className="intro-line h-px w-40 bg-white/50" />
            <p className="intro-tagline text-sm uppercase tracking-[0.4em] text-white/60">Paulo Moraes</p>
          </div>
        </div>
      )}
      <CursorLight />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#000000]/80 backdrop-blur-xl">
          <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3">
               <img src={logoAsset.url} alt="Logo Paulo Moraes" className="h-14 w-14 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.18)] sm:h-16 sm:w-16" />
            </a>
            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-sm text-white/60 md:flex">
              <a href="#servicos" className="transition hover:text-white">Serviços</a>
              <a href="#projetos" className="transition hover:text-white">Projetos</a>
              <a href="#sobre" className="transition hover:text-white">Sobre</a>
              <a href="#contato" className="transition hover:text-white">Contato</a>
            </nav>
            <a href="#contato" className="hidden rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 sm:inline-flex">Vamos conversar</a>
            <button
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-white/30 hover:text-white md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#000000]/95 backdrop-blur-xl md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 text-sm">
              {[["#servicos", "Serviços"], ["#projetos", "Projetos"], ["#sobre", "Sobre"], ["#contato", "Contato"]].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/5 py-3 text-white/70 transition hover:text-white last:border-b-0">{label}</a>
              ))}
              <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Vamos conversar</a>
            </nav>
          </div>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.09),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.04),transparent_28%)]" />
        {videoState !== "waiting" && (
          <div className="absolute inset-0 z-0 bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              className={`h-full w-full object-cover object-center max-md:object-contain max-md:bg-black transition-opacity duration-[1200ms] ease-out ${videoState === "fading" ? "opacity-0" : "opacity-100"}`}
              aria-hidden="true"
            >
              <source src="/videos/video-principal.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </div>
        )}
          <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div>
            <div className="rise-1 mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-white" />Design digital • Sites • IA</div>
            <h1 className="rise-2 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">Seu trabalho merece ser visto da melhor forma!</h1>
            <div className="rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projetos" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]">Ver meu portfólio <ArrowUpRight size={17} /></a>
              <a href="#contato" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/[0.05]">Falar comigo</a>
            </div>
          </div>
          <div className="rise-4 relative mx-auto w-full max-w-md">
            <div className="aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#000000] shadow-2xl shadow-black">
              <img src={logoAsset.url} alt="Paulo Moraes Digital Creative Studio" className="h-full w-full scale-[1.7] object-contain" fetchPriority="high" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="border-t border-white/10 bg-[#000000]">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div className="max-w-2xl"><p className="text-2xl font-semibold tracking-tight sm:text-3xl">Serviços</p><h2 className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-white/35">Soluções digitais para colocar sua marca no lugar certo.</h2></div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">{services.map(({ icon: Icon, title, text }) => <article key={title} className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045]"><div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]"><Icon size={19} className="text-white/70" /></div><h3 className="mt-8 text-xl font-medium">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="projetos" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div><p className="text-2xl font-semibold tracking-tight sm:text-3xl">Portfólio</p><h2 className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/35">Websites</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/40">Sites profissionais desenvolvidos para apresentar marcas, profissionais e negócios de forma moderna, clara e profissional na internet.</p></div>
          <div className="mt-14"><div><div className="mt-6 grid gap-5 md:grid-cols-3">{projects.filter((project) => project.category !== "Bio personalizada").map((project) => <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#000000]"><a href={project.url} target="_blank" rel="noreferrer" className="relative block aspect-[4/3] overflow-hidden bg-black"><img src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=900`} alt={`Capa do site ${project.title}`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" loading="lazy" /><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" /><div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">Site</div></a><div className="p-6"><p className="text-xs uppercase tracking-[0.18em] text-white/30">{project.category}</p><h3 className="mt-2 text-xl font-medium">{project.title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{project.description}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white">Ver projeto <ArrowUpRight size={15} /></a></div></article>)}</div></div>
            <div className="mt-10 border-t border-white/10 pt-8"><p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">Bio personalizada</p><p className="mt-3 max-w-xl text-sm leading-6 text-white/40">Links personalizados para Instagram e redes sociais, reunindo informações e canais importantes em uma única página.</p><div className="mt-6 grid gap-5 md:grid-cols-3">{projects.filter((project) => project.category === "Bio personalizada").map((project) => <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#000000]"><a href={project.url} target="_blank" rel="noreferrer" className="relative block aspect-[4/3] overflow-hidden bg-black"><img src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=900`} alt={`Capa da bio personalizada ${project.title}`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" loading="lazy" /><div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" /><div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur-sm">Bio personalizada</div></a><div className="p-6"><p className="text-xs uppercase tracking-[0.18em] text-white/30">Bio personalizada</p><h3 className="mt-2 text-xl font-medium">{project.title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{project.description}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white">Ver projeto <ArrowUpRight size={15} /></a></div></article>)}</div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#000000]">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="text-sm font-medium uppercase tracking-[0.2em] text-white/35">Fotos com IA</p></div>
          <div><p className="text-sm leading-6 text-white/40">Também crio fotos personalizadas com inteligência artificial para profissionais e momentos importantes, com propostas visuais que podem ser usadas nas redes sociais, divulgação e apresentação pessoal.</p><div className="mt-8 flex flex-wrap gap-2">{photoTypes.map((type) => <button key={type} type="button" onClick={() => setPhotoFilter((current) => (current === type ? null : type))} className={`rounded-full border px-4 py-2 text-sm transition ${photoFilter === type ? "border-white bg-white text-black" : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"}`}>{type}</button>)}</div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visiblePhotos.map((photo) => <figure key={photo.url} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"><img src={photo.url} alt={photo.alt} className="aspect-[3/4] w-full object-cover transition duration-500 hover:scale-[1.03]" loading="lazy" /><figcaption className="p-4 text-xs uppercase tracking-[0.15em] text-white/45">{photo.type}</figcaption></figure>)}</div></div>
        </div>
      </section>

      <section id="sobre" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div><p className="text-xs uppercase tracking-[0.25em] text-white/35">Sobre mim</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Prazer, eu sou Paulo.</h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8 text-white/70">Trabalho há mais de 2 anos com criação de sites e marketing digital, ajudando profissionais e empresas a fortalecerem sua presença na internet.</p><p className="mt-5 text-base leading-7 text-white/40">Acredito que cada profissional, marca ou negócio merece uma presença digital à altura do seu trabalho. Para auxiliar nisso, ofereço soluções personalizadas como criação de sites e websites, links personalizados e fotos profissionais desenvolvidas com inteligência artificial. Tudo pensado para valorizar sua imagem e fortalecer sua presença online, ampliando a visibilidade do seu trabalho e negócio.</p></div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-white/35">Contato</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Tem uma ideia? Vamos transformar em algo profissional.</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/45">Entre em contato para conversar sobre seu site, seu link personalizado ou suas fotos com IA.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/5584921668965?text=Ol%C3%A1%2C%20Paulo%21%20gostaria%20de%20realizar%20um%20projeto%20contigo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"><MessageCircle size={17} /> WhatsApp</a>
            <a href="https://www.instagram.com/paulo_victor808/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition hover:border-white/30 hover:bg-white/[0.05]"><Instagram size={17} /> Instagram</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 — Criação digital, sites e imagens com IA.</span></div>
      </footer>
    </main>
  );
}
