"use client";
import { motion } from "framer-motion";
import { motivation, site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiktokIcon, YoutubeIcon } from "@/components/icons";
import { Breathing } from "./breathing";

export function Motivation() {
  return (
    <section id="motivation" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker="Mon message"
          title="Motivation"
          text="Derrière chaque vidéo, la même idée : te donner la force de croire en tes rêves et de ne jamais abandonner."
        />
        <Breathing />
        <div className="grid gap-5 sm:grid-cols-2">
          {motivation.map((m, i) => (
            <motion.article
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-accent/40 p-7 sm:p-9"
            >
              <span className="pointer-events-none absolute -right-4 -top-10 font-serif text-[9rem] leading-none text-primary/10 transition-colors duration-500 group-hover:text-primary/20">
                &ldquo;
              </span>
              <h3 className="relative font-serif text-3xl leading-tight sm:text-4xl">{m.title}</h3>
              <p className="relative mt-4 text-muted-foreground sm:text-lg">{m.text}</p>
            </motion.article>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <p className="text-muted-foreground">Une nouvelle histoire chaque jour sur</p>
            <div className="flex gap-3">
              <a href={site.socials.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-red-500 hover:text-red-400">
                <YoutubeIcon className="size-4" /> YouTube
              </a>
              <a href={site.socials.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground">
                <TiktokIcon className="size-4" /> TikTok
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
