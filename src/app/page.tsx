import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

// Page provisoire : sera remplacée par le vrai site une fois le brief validé.
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-4 text-center">
      <Reveal><p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Bientôt en ligne</p></Reveal>
      <Reveal delay={0.1}><h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">Votre site arrive.</h1></Reveal>
      <Reveal delay={0.2}><p className="text-lg text-muted-foreground">Base prête : Next.js, Tailwind, Framer Motion et shadcn/ui.</p></Reveal>
      <Reveal delay={0.3}><Button size="lg">Nous contacter</Button></Reveal>
    </main>
  );
}
