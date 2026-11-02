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

// Exercices guidés de la section Motivation (tirés des vidéos)
export type ExerciseStep = { label: string; seconds: number; scale: number };
export type Exercise = {
  id: string;
  title: string;
  intro: string;
  instructions: string[];
  steps: ExerciseStep[];
  cycles: number;
  end: string;
};

export const exercises: Exercise[] = [
  {
    id: "stress",
    title: "Calme ton stress en 60 s",
    intro: "Ton cerveau peut réapprendre le calme. Fais cet exercice chaque matin, il deviendra une habitude.",
    instructions: [
      "Inspire profondément pendant 4 secondes.",
      "Retiens ton souffle pendant 4 secondes.",
      "Expire lentement pendant 6 secondes.",
      "Répète 3 fois et visualise-toi calme, comme un lac immobile.",
    ],
    steps: [
      { label: "Inspire", seconds: 4, scale: 1 },
      { label: "Retiens", seconds: 4, scale: 1 },
      { label: "Expire", seconds: 6, scale: 0.55 },
    ],
    cycles: 3,
    end: "Bravo. Sens le calme.",
  },
  {
    id: "habitude",
    title: "Efface une habitude en 60 s",
    intro: "Chaque fois que tu répètes un comportement, ton cerveau le renforce. Pour changer, crée un nouveau chemin et répète-le.",
    instructions: [
      "Ferme les yeux et inspire profondément.",
      "Expire lentement, laisse le stress sortir comme une brume.",
      "Visualise le moment où tu dis non à cette vieille habitude.",
      "Répète : « Je choisis de laisser aller cette habitude. »",
    ],
    steps: [
      { label: "Ferme les yeux, inspire", seconds: 5, scale: 1 },
      { label: "Expire lentement", seconds: 6, scale: 0.55 },
      { label: "Visualise-toi dire non", seconds: 12, scale: 0.8 },
      { label: "Imagine un chemin lumineux", seconds: 12, scale: 1 },
      { label: "« Je choisis de laisser aller »", seconds: 12, scale: 0.8 },
      { label: "Ouvre doucement les yeux", seconds: 5, scale: 0.55 },
    ],
    cycles: 1,
    end: "Garde cette intention toute la journée.",
  },
];
