"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const words = site.tagline.split(" ");

  return (
    <section ref={ref} className="relative flex h-svh min-h-[600px] items-center justify-center overflow-hidden">
      {/* Fond : vidéo YouTube si fournie, sinon lumière de projecteur animée */}
      <motion.div style={reduce ? undefined : { y, scale }} className="absolute inset-0">
        {site.showreelId ? (
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-40"
            src={`https://www.youtube.com/embed/${site.showreelId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${site.showreelId}&playsinline=1`}
            allow="autoplay"
            title="Bande-annonce"
          />
        ) : (
          <>
            <motion.div
              className="absolute left-1/2 top-[-20%] h-[90vh] w-[90vh] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
              animate={reduce ? undefined : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-[-30%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-red-900/30 blur-[120px]"
              animate={reduce ? undefined : { x: [0, -60, 0], y: [0, -40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />
      </motion.div>

      {/* Bandes noires façon écran de cinéma, qui s'ouvrent au chargement */}
      <motion.div initial={{ height: "50%" }} animate={{ height: "6%" }} transition={{ duration: 1.4, ease }} className="absolute inset-x-0 top-0 z-20 bg-black" />
      <motion.div initial={{ height: "50%" }} animate={{ height: "6%" }} transition={{ duration: 1.4, ease }} className="absolute inset-x-0 bottom-0 z-20 bg-black" />

      <motion.div style={reduce ? undefined : { opacity: fade }} className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 1.1, ease }}
          className="mb-6 text-xs uppercase text-primary sm:text-sm"
        >
          Films · Documentaires · Motivation
        </motion.p>
        <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 1.2 + i * 0.08, ease }}
              >
                {i === words.length - 1 ? <em className="text-primary">{w}</em> : w}
                {i < words.length - 1 && " "}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.9, ease }}
          className="mx-auto mt-8 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {site.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <a href="#films"><Play className="size-4 fill-current" /> Voir mes films</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-foreground/20 bg-transparent">
            <a href="#contact">Travailler ensemble</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#films"
        aria-label="Défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-[9%] z-30 text-muted-foreground"
      >
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
