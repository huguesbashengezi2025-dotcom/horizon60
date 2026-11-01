"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import type { Film } from "@/content/site";
import { cn } from "@/lib/utils";

// Affiche de film qui s'incline légèrement en suivant la souris
export function FilmCard({ film, onOpen, index, className }: { film: Film; onOpen: () => void; index: number; className?: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  return (
    <motion.button
      ref={ref}
      onClick={onOpen}
      onPointerMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { mx.set(0.5); my.set(0.5); }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
      className={cn("group relative block w-full overflow-hidden rounded-2xl border border-border/60 text-left", className)}
    >
      <div className={cn("relative aspect-[3/4] bg-gradient-to-br", film.poster)}>
        {film.youtubeId && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://i.ytimg.com/vi/${film.youtubeId}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <span className="absolute left-4 top-4 font-serif text-6xl italic text-white/15">{String(index + 1).padStart(2, "0")}</span>
        <span className="absolute right-4 top-4 flex size-12 scale-75 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Play className="size-5 fill-current" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-xs uppercase tracking-widest text-primary">{film.genre} · {film.year}</p>
          <h3 className="mt-2 font-serif text-3xl text-white">{film.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-white/70 transition-all duration-500 sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-20 sm:group-hover:opacity-100">
            {film.synopsis}
          </p>
          <p className="mt-3 text-xs text-white/50">{film.duration}</p>
        </div>
      </div>
    </motion.button>
  );
}
