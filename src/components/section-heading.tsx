import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      <Reveal><p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p></Reveal>
      <Reveal delay={0.1}><h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-6xl">{title}</h2></Reveal>
      {text && <Reveal delay={0.2}><p className="mt-5 text-muted-foreground sm:text-lg">{text}</p></Reveal>}
    </div>
  );
}
