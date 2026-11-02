"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw } from "lucide-react";

// Exercice guidé : inspire 4 s, retiens 4 s, expire 6 s, 3 cycles.
const steps = [
  { label: "Inspire", seconds: 4, scale: 1 },
  { label: "Retiens", seconds: 4, scale: 1 },
  { label: "Expire", seconds: 6, scale: 0.55 },
];
const CYCLES = 3;

export function Breathing() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState(0);
  const [left, setLeft] = useState(steps[0].seconds);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    timer.current = setInterval(() => setLeft((l) => l - 1), 1000);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [running]);

  useEffect(() => {
    if (!running || left > 0) return;
    const next = step + 1;
    if (next < steps.length) { setStep(next); setLeft(steps[next].seconds); return; }
    if (cycle + 1 < CYCLES) { setCycle(cycle + 1); setStep(0); setLeft(steps[0].seconds); return; }
    setRunning(false); setDone(true);
  }, [left, running, step, cycle]);

  const start = () => { setDone(false); setCycle(0); setStep(0); setLeft(steps[0].seconds); setRunning(true); };
  const current = steps[step];
  const scale = running ? current.scale : 0.55;

  return (
    <div className="mb-12 grid items-center gap-10 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/40 to-transparent p-7 sm:p-10 lg:grid-cols-2">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary">Exercice de 60 secondes</p>
        <h3 className="font-serif text-4xl leading-tight sm:text-5xl">Calme ton stress en 60 s</h3>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Ton cerveau peut réapprendre le calme. Fais cet exercice chaque matin, il deviendra une habitude.
        </p>
        <ol className="mt-6 space-y-2 text-sm sm:text-base">
          <li><span className="text-primary">1.</span> Inspire profondément pendant 4 secondes.</li>
          <li><span className="text-primary">2.</span> Retiens ton souffle pendant 4 secondes.</li>
          <li><span className="text-primary">3.</span> Expire lentement pendant 6 secondes.</li>
          <li><span className="text-primary">4.</span> Répète 3 fois et visualise-toi calme, comme un lac immobile.</li>
        </ol>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex size-64 items-center justify-center sm:size-72">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
            animate={{ scale }}
            transition={{ duration: running ? current.seconds : 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-primary/50 bg-primary/10"
            animate={{ scale }}
            transition={{ duration: running ? current.seconds : 0.6, ease: "easeInOut" }}
          />
          <div className="relative text-center" aria-live="polite">
            {running ? (
              <>
                <p className="font-serif text-4xl">{current.label}</p>
                <p className="mt-1 text-5xl font-light tabular-nums text-primary">{left}</p>
                <p className="mt-2 text-xs text-muted-foreground">Cycle {cycle + 1} sur {CYCLES}</p>
              </>
            ) : (
              <p className="max-w-[12rem] font-serif text-2xl">{done ? "Bravo. Sens le calme." : "Prêt ?"}</p>
            )}
          </div>
        </div>
        {!running && (
          <button
            onClick={start}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            {done ? <RotateCcw className="size-4" /> : <Play className="size-4 fill-current" />}
            {done ? "Recommencer" : "Commencer l'exercice"}
          </button>
        )}
      </div>
    </div>
  );
}
