"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Clock, Info } from "lucide-react";
import { practices } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Practices() {
  const [open, setOpen] = useState<string | null>(practices[0].id);

  return (
    <section id="exercices" className="scroll-mt-20 border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          kicker="Au quotidien"
          title="Exercices"
          text="Sept exercices courts pour prendre soin de ton mental. Choisis-en un, essaie-le aujourd'hui."
        />
        <div className="divide-y divide-border/60 border-y border-border/60">
          {practices.map((p, i) => {
            const isOpen = open === p.id;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-4 py-6 text-left"
                >
                  <span className="w-8 shrink-0 font-serif text-xl italic text-primary/70">{i + 1}</span>
                  <span className="min-w-0 flex-1 font-serif text-2xl leading-tight transition-colors group-hover:text-primary sm:text-3xl">
                    {p.title}
                  </span>
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground sm:flex">
                    <Clock className="size-3" /> {p.duration}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0 text-primary">
                    <Plus className="size-6" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12">
                        <p className="text-muted-foreground sm:text-lg">{p.why}</p>
                        <p className="mt-1 text-xs text-muted-foreground sm:hidden">Durée : {p.duration}</p>
                        <ol className="mt-5 space-y-2">
                          {p.steps.map((s, j) => (
                            <li key={s} className="flex gap-3">
                              <span className="w-5 shrink-0 text-primary tabular-nums">{j + 1}.</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ol>
                        {p.quote && (
                          <blockquote className="mt-6 border-l-2 border-primary pl-4">
                            <p className="font-serif text-xl italic leading-snug sm:text-2xl">« {p.quote.text} »</p>
                            <footer className="mt-2 text-sm text-muted-foreground">{p.quote.source}</footer>
                          </blockquote>
                        )}
                        <p className={cn("mt-6 flex gap-2 rounded-xl bg-accent/60 p-4 text-sm text-muted-foreground")}>
                          <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{p.care}</span>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Ces exercices sont des pratiques de bien-être. Ils ne remplacent pas un avis ou un suivi médical ou psychologique.
            Si tu traverses une période difficile, parles-en à un professionnel de santé.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
