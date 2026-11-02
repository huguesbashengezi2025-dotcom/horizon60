"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { WhatsappIcon } from "@/components/icons";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinks } from "@/components/social-links";

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-border/60">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 sm:py-36">
        <Reveal><p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Contact</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-8xl">
            Un projet, une histoire <em className="text-primary">à raconter</em> ?
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground sm:text-lg">
            Collaboration, commande, diffusion ou simple message : écrivez-moi, je réponds vite.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${site.contact.email}`} className="group flex max-w-full items-center gap-2 rounded-full bg-primary px-5 py-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 sm:px-7 sm:text-base">
              <Mail className="size-5 shrink-0" /> <span className="truncate">{site.contact.email}</span>
              <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {site.contact.whatsapp && (
              <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-border px-7 py-4 transition-colors hover:border-green-500 hover:text-green-400">
                <WhatsappIcon className="size-5" /> WhatsApp
              </a>
            )}
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-12 text-sm uppercase tracking-[0.3em] text-muted-foreground">Suis-moi</p>
          <SocialLinks size="large" className="mt-5" />
        </Reveal>
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border/60 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="font-serif text-xl italic text-foreground">{site.name}</p>
        <p>© {year} {site.name}. Tous droits réservés.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
