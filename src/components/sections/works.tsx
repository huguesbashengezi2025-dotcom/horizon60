"use client";
import { useState } from "react";
import { films, type Film } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { FilmCard } from "./film-card";
import { VideoModal } from "./video-modal";

export function Works() {
  const [active, setActive] = useState<Film | null>(null);

  return (
    <>
      <section id="films" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
        <SectionHeading kicker="Filmographie" title="Mes films" text="Des films courts et puissants pour te rappeler que tout est possible. Touche une affiche pour lancer le film." />
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((f, i) => (
            <FilmCard key={f.title} film={f} index={i} onOpen={() => setActive(f)} className={i % 2 === 1 ? "lg:mt-12" : ""} />
          ))}
        </div>
      </section>

      <VideoModal film={active} onClose={() => setActive(null)} />
    </>
  );
}
