"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";
import { exercises } from "@/content/site";
import { cn } from "@/lib/utils";

// Exercices guidés : un cercle doré qui respire avec un compte à rebours.
export function Breathing() {
  const [index, setIndex] = useState(0);
  const ex = exercises[index];
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState(0);
  const [left, setLeft] = useState(ex.steps[0].seconds);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [running]);

  useEffect(() => {
    if (!running || left > 0) return;
    const next = step + 1;
    if (next < ex.steps.length) { setStep(next); setLeft(ex.steps[next].seconds); return; }
    if (cycle + 1 < ex.cycles) { setCycle(cycle + 1); setStep(0); setLeft(ex.steps[0].seconds); return; }
    setRunning(false); setDone(true);
  }, [left, running, step, cycle, ex]);

  const reset = (i: number) => { setRunning(false); setDone(false); setCycle(0); setStep(0); setIndex(i); setLeft(exercises[i].steps[0].seconds); };
  const start = () => { setDone(false); setCycle(0); setStep(0); setLeft(ex.steps[0].seconds); setRunning(true); };
  const current = ex.steps[step];
  const scale = running ? current.scale : 0.55;

  return (
    <div className="mb-12 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/40 to-transparent p-7 sm:p-10">
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {exercises.map((e, i) => (
          <button
            key={e.id}
            role="tab"
            aria-selected={i === index}
            onClick={() => reset(i)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              i === index ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"
            )}
          >
            {e.title}
          </button>
        ))}
      </div>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div key={ex.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Exercice de 60 secondes</p>
            <h3 className="font-serif text-4xl leading-tight sm:text-5xl">{ex.title}</h3>
            <p className="mt-4 text-muted-foreground sm:text-lg">{ex.intro}</p>
            <ol className="mt-6 space-y-2 text-sm sm:text-base">
              {ex.instructions.map((t, i) => (
                <li key={t}><span className="text-primary">{i + 1}.</span> {t}</li>
              ))}
            </ol>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex size-64 items-center justify-center sm:size-72">
            <motion.div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" animate={{ scale }} transition={{ duration: running ? current.seconds : 0.6, ease: "easeInOut" }} />
            <motion.div className="absolute inset-4 rounded-full border border-primary/50 bg-primary/10" animate={{ scale }} transition={{ duration: running ? current.seconds : 0.6, ease: "easeInOut" }} />
            <div className="relative px-6 text-center" aria-live="polite">
              {running ? (
                <>
                  <p className="font-serif text-3xl leading-tight">{current.label}</p>
                  <p className="mt-1 text-5xl font-light tabular-nums text-primary">{left}</p>
                  {ex.cycles > 1 && <p className="mt-2 text-xs text-muted-foreground">Cycle {cycle + 1} sur {ex.cycles}</p>}
                </>
              ) : (
                <p className="max-w-[13rem] font-serif text-2xl">{done ? ex.end : "Prêt ?"}</p>
              )}
            </div>
          </div>
          {!running && (
            <button onClick={start} className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105">
              {done ? <RotateCcw className="size-4" /> : <Play className="size-4 fill-current" />}
              {done ? "Recommencer" : "Commencer l'exercice"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
