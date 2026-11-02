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
    instagram: "https://www.instagram.com/bashengezi",
    telegram: "https://t.me/HuguesBashengezi",
    whatsapp: "https://wa.me/243893250105",
  },
  contact: {
    email: "huguesbashengezi2025@gmail.com",
    whatsapp: "243893250105",
  },
  stats: [
    { value: "11", label: "Films en ligne" },
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
  { title: "Quand un drapeau ouvre Manille aux Britanniques", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "SnUvsKR1ccM", poster: "from-red-950 via-stone-900 to-black" },
  { title: "L'expérience des fentes de Young", year: "2026", duration: "Moins de 90 s", genre: "Science", synopsis: "Une expérience simple qui a changé notre façon de voir la lumière, expliquée en moins de 90 secondes.", youtubeId: "aNdUgA8EnpM", poster: "from-sky-950 via-stone-900 to-black" },
  { title: "Les canons en bois qui ont ridiculisé l'armée du Nord", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "qvCpDZ8DhJg", poster: "from-stone-800 via-stone-900 to-black" },
  { title: "Le pire incendie de l'histoire des États-Unis… que tout le monde a oublié", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "riW1OyO7MY4", poster: "from-orange-950 via-stone-900 to-black" },
  { title: "L'avocat qui s'est tué en prouvant la thèse de son client", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "QzpZLC4dw34", poster: "from-slate-800 via-stone-900 to-black" },
  { title: "Des cerfs-volants de 20 mètres pour parler aux morts (Guatemala)", year: "2026", duration: "Moins de 90 s", genre: "Le Récit Oublié", synopsis: "Une histoire vraie et incroyable, racontée en moins de 90 secondes.", youtubeId: "bmBkqted5YI", poster: "from-fuchsia-950 via-stone-900 to-black" },
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

// Section Exercices : pratiques courtes de bien-être
export type Practice = {
  id: string;
  title: string;
  duration: string;
  why: string;
  steps: string[];
  quote?: { text: string; source: string };
  care: string;
};

export const practices: Practice[] = [
  {
    id: "respiration",
    title: "Respiration 4-4-6",
    duration: "1 min",
    why: "Une expiration plus longue que l'inspiration aide souvent le corps à ralentir et à se détendre.",
    steps: [
      "Assieds-toi, le dos droit, les épaules relâchées.",
      "Inspire par le nez pendant 4 secondes.",
      "Retiens doucement ton souffle pendant 4 secondes.",
      "Expire lentement par la bouche pendant 6 secondes.",
      "Répète 3 fois.",
    ],
    care: "Ne force jamais. Si la tête te tourne, arrête et reprends une respiration normale.",
  },
  {
    id: "meditation",
    title: "Méditation du souffle",
    duration: "5 min",
    why: "Porter son attention sur la respiration entraîne l'esprit à revenir au moment présent.",
    steps: [
      "Installe-toi au calme, assis confortablement, et mets un minuteur de 5 minutes.",
      "Ferme les yeux ou regarde un point devant toi.",
      "Observe ton souffle naturel, sans chercher à le changer.",
      "Quand ton esprit part ailleurs, remarque-le simplement et reviens au souffle.",
    ],
    care: "C'est normal d'être distrait souvent. Si 5 minutes c'est trop, commence par 2.",
  },
  {
    id: "victoires",
    title: "Journal des victoires",
    duration: "3 min",
    why: "Noter ce qui a marché aide à voir tes progrès, même les petits, au lieu de ne retenir que ce qui manque.",
    steps: [
      "Le soir, prends un carnet ou les notes de ton téléphone.",
      "Écris 3 victoires de la journée, même petites : « Je me suis levé à l'heure », « J'ai fini ma vidéo ».",
      "Relis la liste de la semaine le dimanche.",
    ],
    care: "Il n'y a pas de victoire trop petite. Le but est de remarquer, pas de te comparer.",
  },
  {
    id: "peur",
    title: "Une peur par jour",
    duration: "Variable",
    why: "Faire face à une petite peur, pas à pas, rend souvent la suivante plus facile.",
    steps: [
      "Choisis une petite chose qui te met un peu mal à l'aise : poser une question, publier une vidéo, appeler quelqu'un.",
      "Fais-la aujourd'hui, à ton rythme.",
      "Note ensuite comment ça s'est passé, en vrai.",
    ],
    quote: {
      text: "Celui qui ne surmonte pas chaque jour une peur n'a pas appris la leçon de la vie.",
      source: "Ralph Waldo Emerson, « Courage », conférence de 1859",
    },
    care: "Choisis une peur à ta mesure, jamais une action dangereuse pour toi ou pour les autres.",
  },
  {
    id: "gratitudes",
    title: "Trois gratitudes",
    duration: "2 min",
    why: "Remarquer ce qui va bien aide à équilibrer le regard qu'on porte sur sa journée.",
    steps: [
      "Avant de dormir, pense à 3 choses pour lesquelles tu es reconnaissant aujourd'hui.",
      "Sois précis : « le repas avec ma sœur » plutôt que « ma famille ».",
      "Pour chacune, demande-toi pourquoi elle compte pour toi.",
    ],
    care: "Les jours difficiles, une seule gratitude suffit. Ce n'est pas une obligation d'aller bien.",
  },
  {
    id: "chemin",
    title: "Visualiser le chemin",
    duration: "3 min",
    why: "Imaginer seulement le but ne suffit pas. Imaginer aussi les étapes et les obstacles prépare à mieux agir.",
    steps: [
      "Ferme les yeux et imagine ton objectif atteint, en détail.",
      "Imagine ensuite le chemin : la première étape que tu peux faire cette semaine.",
      "Pense à un obstacle probable, et à ce que tu feras s'il arrive : « Si…, alors je… ».",
    ],
    care: "La visualisation aide à se préparer, mais elle ne remplace pas l'action. Termine toujours par une étape concrète.",
  },
  {
    id: "ami",
    title: "Parle-toi comme à un ami",
    duration: "2 min",
    why: "On est souvent bien plus dur avec soi-même qu'avec les autres. Changer de ton aide à se relever après une erreur.",
    steps: [
      "Quand tu te critiques, arrête-toi un instant.",
      "Demande-toi : « Qu'est-ce que je dirais à un ami dans la même situation ? »",
      "Dis-toi la même chose, avec les mêmes mots bienveillants.",
    ],
    care: "Être bienveillant avec soi ne veut pas dire tout accepter. C'est se donner l'énergie de faire mieux.",
  },
];
