import { site } from "@/content/site";
import { InstagramIcon, TelegramIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  { label: "YouTube", href: site.socials.youtube, Icon: YoutubeIcon, hover: "hover:border-red-500 hover:text-red-400" },
  { label: "TikTok", href: site.socials.tiktok, Icon: TiktokIcon, hover: "hover:border-foreground hover:text-foreground" },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon, hover: "hover:border-pink-500 hover:text-pink-400" },
  { label: "Telegram", href: site.socials.telegram, Icon: TelegramIcon, hover: "hover:border-sky-500 hover:text-sky-400" },
  { label: "WhatsApp", href: site.socials.whatsapp, Icon: WhatsappIcon, hover: "hover:border-green-500 hover:text-green-400" },
];

// Icônes des réseaux sociaux. "large" pour la section contact, "small" pour le pied de page.
export function SocialLinks({ size = "small", className }: { size?: "small" | "large"; className?: string }) {
  const large = size === "large";
  return (
    <ul className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      {links.map(({ label, href, Icon, hover }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className={cn(
              "flex items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5",
              large ? "size-14" : "size-10",
              hover
            )}
          >
            <Icon className={large ? "size-6" : "size-4"} />
          </a>
        </li>
      ))}
    </ul>
  );
}
