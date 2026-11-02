// Tout le contenu du site est ici. Remplacer les valeurs provisoires par les vraies.

export type Film = {
  title: string;
  year: string;
  duration: string;
  genre: string;
  synopsis: string;
  youtubeId?: string; // identifiant de la vidéo YouTube (ce qui suit "v=" dans le lien)
  tiktokUrl?: string; // lien de la vidéo TikTok
  poster: string; // dégradé provisoire en attendant les vraies miniatures
};

export const site = {
  name: "Horizon 060",
  tagline: "Des histoires qui donnent la force d'avancer.",
  intro:
    "Je suis Hugues Bashengezi, réalisateur à Kinshasa. À travers Horizon 060, je crée des films de motivation pour inspirer chacun à croire en ses rêves et à ne jamais abandonner.",
  author: "Hugues Bashengezi",
  location: "Kinshasa, RDC",
  showreelId: "", // vidéo YouTube d'accueil (bande-annonce), optionnelle
  socials: {
    youtube: "https://www.youtube.com/@LeRecitOublie-bash01",
    tiktok: "https://www.tiktok.com/@hugues.bashengezi",
  },
  contact: {
    email: "huguesbashengezi2025@gmail.com",
    whatsapp: "", // ex. "243810000000"
  },
  stats: [
    { value: "5", label: "Films en ligne" },
    { value: "90s", label: "Max par histoire" },
    { value: "1", label: "Histoire par jour" },
  ],
};

export const films: Film[] = [
  { title: "La guerre du cochon", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "1859 : les États-Unis et l'Angleterre au bord de la guerre à cause d'un cochon. 12 ans de face-à-face, une seule victime.", youtubeId: "1_oNm3Li1LQ", poster: "from-amber-950 via-stone-900 to-black" },
  { title: "Récit TikTok n°1", year: "2026", duration: "Format court", genre: "TikTok", synopsis: "Une histoire vraie à découvrir sur mon compte TikTok.", tiktokUrl: "https://vt.tiktok.com/ZSgENYrtC/", poster: "from-pink-950 via-stone-900 to-black" },
  { title: "Récit TikTok n°2", year: "2026", duration: "Format court", genre: "TikTok", synopsis: "Une autre histoire vraie à découvrir sur mon compte TikTok.", tiktokUrl: "https://vt.tiktok.com/ZSgELELak/", poster: "from-violet-950 via-stone-900 to-black" },
  { title: "Il a pris Paris avec une simple feuille de papier", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "7nhUhtIMn8o", poster: "from-blue-950 via-stone-900 to-black" },
  { title: "Une guerre déclenchée par un chien ?", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "Ht5yRjUpyEY", poster: "from-emerald-950 via-stone-900 to-black" },
  { title: "5h du matin", year: "2025", duration: "6 min", genre: "Discipline", synopsis: "Pendant que la ville dort, certains construisent leur avenir.", poster: "from-rose-950 via-red-950 to-black" },
];

// Messages de la section Motivation
export const motivation = [
  { title: "Commence avant d'être prêt", text: "Personne ne se sent prêt le premier jour. Ceux qui avancent sont ceux qui commencent quand même." },
  { title: "Ta situation n'est pas ta destination", text: "D'où tu viens ne décide pas où tu vas. Chaque jour est une nouvelle chance de changer ton histoire." },
  { title: "La discipline bat le talent", text: "Le talent ouvre la porte. La discipline, jour après jour, te fait aller jusqu'au bout." },
  { title: "Tomber fait partie du chemin", text: "Chaque échec t'apprend quelque chose. L'important n'est pas de tomber, c'est de te relever." },
];
