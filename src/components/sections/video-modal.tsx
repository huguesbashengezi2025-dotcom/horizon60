"use client";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Film } from "@/content/site";
import { site } from "@/content/site";

// Lecteur plein écran qui ouvre la vidéo YouTube du film
export function VideoModal({ film, onClose }: { film: Film | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {film && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button onClick={onClose} aria-label="Fermer" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 hover:bg-white/20">
            <X className="size-5" />
          </button>
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-xl border border-border bg-black">
              {film.youtubeId ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={film.title}
                />
              ) : film.tiktokUrl ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="font-serif text-3xl">{film.title}</p>
                  <a href={film.tiktokUrl} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">
                    Regarder sur TikTok
                  </a>
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <p className="font-serif text-3xl">{film.title}</p>
                  <p className="text-muted-foreground">Vidéo bientôt disponible.</p>
                  <a href={site.socials.youtube} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">
                    Voir la chaîne YouTube
                  </a>
                </div>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl">{film.title}</h3>
              <p className="text-sm text-muted-foreground">{film.genre} · {film.year} · {film.duration}</p>
            </div>
            {film.youtubeId && (
              <a href={`https://www.youtube.com/watch?v=${film.youtubeId}`} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-primary underline underline-offset-4">
                Regarder sur YouTube
              </a>
            )}
            <p className="mt-2 text-muted-foreground">{film.synopsis}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
