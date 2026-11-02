"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { films, documentaries, type Film } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { FilmCard } from "./film-card";
import { VideoModal } from "./video-modal";

export function Works() {
  const [active, setActive] = useState<Film | null>(null);
  const docsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: docsRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);

  return (
    <>
      <section id="films" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading kicker="Filmographie" title="Mes films" text="Des films courts et puissants pour te rappeler que tout est possible. Touche une affiche pour lancer le film." />
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {films.map((f, i) => (
            <FilmCard key={f.title} film={f} index={i} onOpen={() => setActive(f)} className={i % 2 === 1 ? "lg:mt-12" : ""} />
          ))}
        </div>
      </section>

      <section id="documentaires" ref={docsRef} className="scroll-mt-20 overflow-hidden border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading kicker="Le réel" title="Documentaires" text="Des parcours vrais, des gens qui se battent. Des histoires réelles pour nourrir ta motivation." />
        </div>
        <motion.div style={{ x }} className="flex gap-5 px-4 sm:px-6">
          {documentaries.map((f, i) => (
            <div key={f.title} className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]">
              <FilmCard film={f} index={i} onOpen={() => setActive(f)} />
            </div>
          ))}
        </motion.div>
      </section>

      <VideoModal film={active} onClose={() => setActive(null)} />
    </>
  );
}
