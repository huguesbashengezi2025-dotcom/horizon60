"use client";
import { motion } from "framer-motion";

const words = ["Motivation", "Discipline", "Courage", "Kinshasa", "Rêves", "Persévérance", "Horizon 060"];

// Bandeau de mots qui défile en continu
export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border/60 py-6">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap font-serif text-3xl italic text-muted-foreground sm:text-4xl"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w} <span className="text-primary">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
