"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  ChartLineUp,
  CirclesThreePlus,
  Database,
  List,
  Pulse,
  Sparkle,
  X,
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const assets = {
  wordmark: "/assets/bidato-wordmark.png",
  monogram: "/assets/bidato-monogram.png",
  shield: "/assets/bidato-shield.png",
  systems: "/assets/bidato-systems.png",
  pulse: "/assets/bidato-pulse.png",
  performance: "/assets/bidato-performance.png",
};

const clientLogos = [
  { name: "Hospital Británico", src: "/clients/hospital-britanico.png", size: "britanico" },
  { name: "Sanatorio Finochietto", src: "/clients/sanatorio-finochietto.png", size: "finochietto" },
  { name: "iMAXE", src: "/clients/imaxe.png", size: "imaxe" },
  { name: "CITO", src: "/clients/cito.png", size: "cito" },
  { name: "Grupo Iraola", src: "/clients/grupo-iraola.png", size: "iraola" },
];

const capabilities = [
  {
    number: "01",
    title: "Transformación de Negocios",
    text: "Rediseñamos la operación para que estrategia, procesos y equipos avancen en una misma dirección.",
    className: "capability capability--wide capability--blue",
    icon: CirclesThreePlus,
  },
  {
    number: "02",
    title: "Datos e Inteligencia",
    text: "Convertimos información fragmentada en decisiones claras, oportunas y accionables.",
    className: "capability capability--narrow capability--image",
    icon: Database,
    image: assets.performance,
  },
  {
    number: "03",
    title: "Automatización",
    text: "Eliminamos fricción y tareas repetitivas para liberar capacidad operativa donde más importa.",
    className: "capability capability--narrow capability--ink",
    icon: Pulse,
  },
  {
    number: "04",
    title: "Inteligencia Artificial",
    text: "Aplicamos IA sobre problemas reales, con criterio de negocio, integración y adopción desde el inicio.",
    className: "capability capability--wide capability--light",
    icon: Sparkle,
  },
];

const principles = [
  {
    name: "Procesos",
    copy: "Dan forma al cambio. Revelan cuellos de botella, dependencias y oportunidades de alto impacto.",
    index: "01",
  },
  {
    name: "Tecnología",
    copy: "Acelera lo que está bien diseñado. Conecta datos, automatiza decisiones y multiplica capacidad.",
    index: "02",
  },
  {
    name: "Adopción",
    copy: "Convierte una implementación en una nueva forma de operar que los equipos pueden sostener y escalar.",
    index: "03",
  },
];

const approach = [
  ["01", "Diagnosticar", "Leemos la operación completa y encontramos dónde se pierde valor."],
  ["02", "Priorizar", "Ordenamos oportunidades por impacto, factibilidad y velocidad de aprendizaje."],
  ["03", "Implementar", "Integramos procesos y tecnología en ciclos concretos, medibles y visibles."],
  ["04", "Escalar", "Transferimos capacidades y extendemos lo que funciona a toda la organización."],
];

const sectors = [
  {
    title: "Salud",
    status: "Experiencia comprobada",
    description:
      "Conocimiento profundo de operaciones críticas, alta regulación, múltiples actores y decisiones sensibles.",
    image: assets.shield,
  },
  {
    title: "Servicios",
    status: "Metodología aplicable",
    description:
      "Procesos intensivos en coordinación, información y capacidad de respuesta.",
    image: assets.systems,
  },
  {
    title: "Operaciones complejas",
    status: "Metodología aplicable",
    description:
      "Entornos donde la escala amplifica la fricción y exige una visión sistémica.",
    image: assets.performance,
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#inicio" aria-label="BiDaTo Group, volver al inicio">
      <span className="brand__crop" aria-hidden="true">
        <img src={assets.monogram} alt="" />
      </span>
      <span className="brand__name">BiDaTo</span>
      <span className="brand__group">GROUP</span>
    </a>
  );
}

function ArrowLink({ href, children, inverted = false, external = false }) {
  return (
    <a
      className={`arrow-link${inverted ? " arrow-link--inverted" : ""}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowUpRight weight="bold" aria-hidden="true" />
    </a>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Navegación principal">
        <BrandMark />
        <div className={`nav__links${open ? " is-open" : ""}`}>
          <a href="#capacidades" onClick={close}>Capacidades</a>
          <a href="#enfoque" onClick={close}>Enfoque</a>
          <a href="#experiencia" onClick={close}>Experiencia</a>
          <a className="nav__contact" href="#contacto" onClick={close}>
            Hablemos <ArrowUpRight weight="bold" />
          </a>
        </div>
        <button
          className="nav__toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X /> : <List />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__noise" aria-hidden="true" />
      <div className="hero__visual" aria-hidden="true">
        <img src={assets.systems} alt="" />
        <div className="hero__orbit hero__orbit--one" />
        <div className="hero__orbit hero__orbit--two" />
        <div className="hero__signal" />
      </div>

      <div className="hero__content page-grid">
        <p className="hero__eyebrow">Transformación / Datos / Automatización / IA</p>
        <h1 className="hero__title">
          <span>Transformamos la forma</span>
          <span>en que operan los negocios.</span>
        </h1>
        <div className="hero__bottom">
          <p className="hero__summary">
            Combinamos experiencia operacional y tecnología para construir organizaciones más eficientes,
            inteligentes y escalables.
          </p>
          <ArrowLink href="#contacto">Hablemos</ArrowLink>
        </div>
      </div>

      <a className="hero__scroll" href="#credibilidad" aria-label="Descubrir más">
        <span>Descubrir</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}

function Credibility() {
  const repeated = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="credibility" id="credibilidad">
      <div className="credibility__intro page-grid">
        <p>Experiencia que se prueba en la complejidad</p>
        <p>
          Trabajamos en entornos donde cada mejora exige precisión, coordinación y una comprensión profunda
          del negocio.
        </p>
      </div>
      <div className="marquee" aria-label="Organizaciones con las que BiDaTo tiene experiencia">
        <div className="marquee__track">
          {repeated.map((client, index) => (
            <div
              className={`client-logo client-logo--${client.size}`}
              key={`${client.name}-${index}`}
            >
              <img src={client.src} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const sentence = "La complejidad frena a las organizaciones.".split(" ");
  const problems = [
    ["Datos fragmentados", "Información dispersa que demora decisiones y debilita la confianza."],
    ["Procesos manuales", "Tiempo crítico atrapado en tareas repetitivas y difíciles de escalar."],
    ["Sistemas desconectados", "Herramientas que no comparten contexto ni construyen una visión integral."],
    ["Baja visibilidad", "Resultados que llegan tarde, sin causas claras ni capacidad de anticipación."],
  ];

  return (
    <section className="problem chapter" id="problema">
      <div className="page-grid">
        <h2 className="word-reveal" aria-label="La complejidad frena a las organizaciones.">
          {sentence.map((word, index) => (
            <span key={`${word}-${index}`}>{word}</span>
          ))}
        </h2>
        <div className="problem__layout">
          <p className="problem__lead">
            Cuando la operación crece sin una arquitectura común, el esfuerzo aumenta y el valor se vuelve
            cada vez más difícil de capturar.
          </p>
          <div className="problem__list">
            {problems.map(([title, text], index) => (
              <article className="problem-row" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="capabilities chapter" id="capacidades">
      <div className="page-grid">
        <div className="section-heading">
          <p>Procesos / Datos / Automatización / IA</p>
          <h2>Convertimos complejidad en performance.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ number, title, text, className, icon: Icon, image }) => (
            <article className={className} key={title}>
              {image && <img className="capability__image" src={image} alt="" aria-hidden="true" />}
              <div className="capability__top">
                <span>{number}</span>
                <Icon weight="light" aria-hidden="true" />
              </div>
              <div className="capability__body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  return (
    <section className="differentiator chapter" id="enfoque">
      <div className="differentiator__grid page-grid">
        <div className="differentiator__statement">
          <p>Nuestra diferencia</p>
          <h2>La tecnología por sí sola no transforma un negocio.</h2>
          <p className="differentiator__quote">
            La tecnología acelera. Los procesos guían. Las personas hacen que el cambio perdure.
          </p>
        </div>
        <div className="principles">
          {principles.map(({ name, copy, index }) => (
            <article className="principle" key={name}>
              <span>{index}</span>
              <div className="principle__symbol" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach chapter" id="metodo">
      <div className="page-grid">
        <div className="section-heading section-heading--light">
          <p>Una ruta clara hacia el valor</p>
          <h2>De la oportunidad al impacto medible.</h2>
        </div>
        <div className="approach__rail">
          <div className="approach__progress" aria-hidden="true" />
          {approach.map(([number, title, text]) => (
            <article className="approach-step" key={title}>
              <span>{number}</span>
              <div className="approach-step__marker" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section className="experience chapter" id="experiencia">
      <div className="page-grid">
        <div className="experience__heading">
          <h2>
            Experiencia en
            <span className="inline-image" aria-hidden="true">
              <img src={assets.pulse} alt="" />
            </span>
            entornos complejos. Una metodología preparada para escalar.
          </h2>
          <p>
            Nuestra experiencia en salud demuestra una forma de trabajo preparada para operaciones críticas.
            Esa metodología puede adaptarse a nuevos desafíos sin inventar atajos ni sobredimensionar la tecnología.
          </p>
        </div>

        <div className="sector-accordion">
          {sectors.map((sector, index) => (
            <button
              className={`sector${active === index ? " is-active" : ""}`}
              type="button"
              key={sector.title}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-expanded={active === index}
            >
              <img src={sector.image} alt="" aria-hidden="true" />
              <span className="sector__veil" aria-hidden="true" />
              <span className="sector__number">0{index + 1}</span>
              <span className="sector__content">
                <span className="sector__status">{sector.status}</span>
                <strong>{sector.title}</strong>
                <span>{sector.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contacto">
      <img className="contact__wordmark" src={assets.wordmark} alt="" aria-hidden="true" />
      <div className="contact__orb" aria-hidden="true" />
      <div className="contact__inner page-grid">
        <p>La conversación empieza con una oportunidad concreta.</p>
        <h2>¿Dónde está tu próxima oportunidad de generar valor?</h2>
        <ArrowLink
          href="https://www.linkedin.com/company/bidato-group/"
          inverted
          external
        >
          Encontrémosla
        </ArrowLink>
        <div className="contact__details">
          <span>BiDaTo Group</span>
          <span>Latinoamérica</span>
          <a href="https://www.linkedin.com/company/bidato-group/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="page-grid footer__inner">
        <BrandMark />
        <p>Transformación de negocios a través de procesos, datos, automatización e IA.</p>
        <div className="footer__links">
          <a href="#capacidades">Capacidades</a>
          <a href="#enfoque">Enfoque</a>
          <a href="#experiencia">Experiencia</a>
        </div>
        <span>© {new Date().getFullYear()} BiDaTo Group</span>
      </div>
    </footer>
  );
}

export default function App() {
  const app = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) return;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav-shell", { y: -30, opacity: 0, duration: 0.7 })
        .from(".hero__eyebrow", { y: 18, opacity: 0, duration: 0.6 }, "-=0.25")
        .from(".hero__title span", { yPercent: 105, opacity: 0, duration: 1.15, stagger: 0.09 }, "-=0.25")
        .from(".hero__bottom", { y: 28, opacity: 0, duration: 0.75 }, "-=0.7")
        .from(".hero__visual", { scale: 0.86, opacity: 0, duration: 1.4 }, "-=1.05");

      gsap.to(".hero__visual", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.fromTo(
        ".word-reveal span",
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.14,
          ease: "none",
          scrollTrigger: { trigger: ".word-reveal", start: "top 78%", end: "bottom 42%", scrub: 0.8 },
        },
      );

      gsap.utils.toArray(".problem-row, .capability, .approach-step").forEach((element) => {
        gsap.from(element, {
          y: 58,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.fromTo(
        ".approach__progress",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ".approach__rail", start: "top 74%", end: "bottom 62%", scrub: 0.8 },
        },
      );

      ScrollTrigger.matchMedia({
        "(min-width: 900px)": () => {
          ScrollTrigger.create({
            trigger: ".differentiator__grid",
            start: "top 12%",
            end: "bottom 86%",
            pin: ".differentiator__statement",
            pinSpacing: false,
          });

          gsap.utils.toArray(".principle").forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 90, opacity: 0.35 },
              {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 42%",
                  scrub: 0.8,
                },
              },
            );
            gsap.to(card, {
              y: index * -10,
              scrollTrigger: {
                trigger: card,
                start: "top 34%",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
        },
      });
    },
    { scope: app },
  );

  return (
    <div ref={app}>
      <Navigation />
      <main className="overflow-x-hidden w-full max-w-full">
        <Hero />
        <Credibility />
        <Problem />
        <Capabilities />
        <Differentiator />
        <Approach />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
