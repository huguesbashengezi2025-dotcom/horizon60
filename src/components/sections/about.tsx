"use client";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { YoutubeIcon, TiktokIcon } from "@/components/icons";

export function About() {
  return (
    <section id="apropos" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-stone-800 via-stone-900 to-black">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.8_0.13_80/0.35),transparent_60%)]"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-end p-6">
              <p className="font-serif text-7xl italic text-white/10 sm:text-8xl">{site.name}</p>
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal><p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">À propos</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
              Derrière la caméra, <em className="text-primary">{site.author}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground sm:text-lg">{site.intro}</p>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Mes vidéos sont pensées pour YouTube comme pour TikTok : des formats longs pour aller au fond des choses, des formats courts pour un shot de motivation au quotidien.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border/60 py-8">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 * i}>
                <p className="font-serif text-4xl text-primary sm:text-5xl"><Counter value={s.value} /></p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 flex gap-3">
              <a href={site.socials.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-red-500 hover:text-red-400">
                <YoutubeIcon className="size-5" /> YouTube
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-foreground">
                <TiktokIcon className="size-5" /> TikTok
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
