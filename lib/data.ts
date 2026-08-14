import type { IconName } from "@/components/ui/Icon";

/**
 * Zentrale Inhaltsquelle der Website.
 * Alle Texte basieren ausschließlich auf Portfolio-Alexander-Boitz.pdf
 * und Lebenslauf-Alexander-Boitz.pdf — lediglich sprachlich verfeinert
 * und für Web-Lesbarkeit strukturiert.
 */

export const hero = {
  eyebrow: "Portfolio",
  name: "Alexander Boitz",
  roles: ["Marketing", "Grafikdesign"],
  claim:
    "Ich entwickle Marken, Kampagnen und visuelle Konzepte mit einem geschulten Blick fürs Detail und einem Gespür dafür, was Menschen wirklich bewegt.",
} as const;

export const about = {
  eyebrow: "Über mich",
  headline: "Strategie trifft Gestaltung. Das treibt mich an.",
  paragraphs: [
    "Mein Weg in Marketing und Design begann mit einer einfachen Beobachtung: Die besten Kampagnen entstehen dort, wo Strategie auf Gestaltung trifft. Genau dieses Zusammenspiel hat mich schon früh fasziniert und ist bis heute der rote Faden meiner Laufbahn.",
    "Bei DEDO Media habe ich Recruiting-Kampagnen für Steuerkanzleien entwickelt und dabei gelernt, wie datenbasiertes Targeting und starkes visuelles Design zusammen wirklich etwas bewegen. Danach habe ich bei Ticketmaster das Marketing für namhafte Sportmarken verantwortet, von der Kampagnenstrategie bis zur Content-Produktion für ein internationales Publikum.",
    "Je mehr Kampagnen ich betreut habe, desto klarer wurde mir eins: Am meisten hat mich immer die Gestaltung selbst fasziniert, also die Frage, wie eine Botschaft aussehen muss, damit sie wirkt. Im März 2023 habe ich diese Leidenschaft zum Beruf gemacht und mich als Grafikdesigner selbstständig gemacht.",
    "Seitdem entwickle ich für Kunden aus ganz unterschiedlichen Branchen Corporate Designs, Logos, Verpackungen und Websites. Mir ist dabei wichtig, strukturiert zu arbeiten, und dass am Ende jedes Projekt genauso überzeugt wie die Idee, die dahintersteckt.",
  ],
  pillars: [
    {
      title: "Warum Marketing?",
      text: "Weil eine gute Botschaft nur wirkt, wenn sie die richtigen Menschen erreicht. Genau das treibt mich an: Strategie und Kreativität zusammenzubringen.",
    },
    {
      title: "Warum Branding?",
      text: "Weil eine starke Marke mehr ist als nur ein Logo. Sie entsteht aus Strategie, Design und der Konsequenz, in jedem Detail dranzubleiben.",
    },
    {
      title: "Warum Design?",
      text: "Weil Gestaltung für mich die Sprache ist, in der ich am klarsten kommuniziere, vom ersten Logo-Entwurf bis zur fertigen Website.",
    },
  ],
} as const;

export interface Competency {
  icon: IconName;
  title: string;
  description: string;
}

export const competencies: Competency[] = [
  {
    icon: "marketing",
    title: "Marketing",
    description:
      "Ich entwickle Kampagnen, schalte Meta Ads und nutze Daten, um die richtige Zielgruppe zu erreichen.",
  },
  {
    icon: "design",
    title: "Grafikdesign",
    description:
      "Vom Logo bis zum Layout entwickle ich visuelle Konzepte mit einer klaren eigenen Handschrift.",
  },
  {
    icon: "branding",
    title: "Branding",
    description:
      "Ich baue Corporate Designs, die eine Marke konsistent und wiedererkennbar machen.",
  },
  {
    icon: "content",
    title: "Content Creation",
    description:
      "Ich produziere Grafiken, Texte und Bewegtbild für Social Media, Blogs und Kampagnen.",
  },
  {
    icon: "social",
    title: "Social Media",
    description:
      "Ich gestalte Anzeigen und Beiträge, die Zielgruppen wirklich erreichen.",
  },
  {
    icon: "web",
    title: "Webdesign",
    description:
      "Von der ersten Idee bis zur fertigen Seite begleite ich Websiteprojekte komplett.",
  },
  {
    icon: "adobe",
    title: "Adobe Creative Cloud",
    description:
      "Photoshop, Illustrator und InDesign nutze ich auf fortgeschrittenem Niveau.",
  },
  {
    icon: "presentation",
    title: "Präsentationsdesign",
    description:
      "Ich gestalte Keynotes und PowerPoint-Präsentationen, die bei Kunden und in Pitches überzeugen.",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  /** "cover" füllt die Kachel komplett aus (kann Ränder anschneiden),
   *  "contain" (Standard) zeigt das Bild immer vollständig, ggf. mit
   *  dezentem Rand. Nur für Bilder setzen, bei denen ein Zuschnitt
   *  optisch unproblematisch ist. */
  fit?: "cover" | "contain";
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface BaseProject {
  id: string;
  number: string;
  title: string;
  role: string;
  company: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  tags: string[];
  link?: ProjectLink;
}

export interface GalleryProject extends BaseProject {
  media: "gallery";
  gallery: GalleryImage[];
}

export interface VideoProject extends BaseProject {
  media: "video";
  youtubeId: string;
  videoTitle: string;
}

export interface BrandingProject extends BaseProject {
  media: "branding";
  verpackung: GalleryImage[];
  /** `emphasize` gibt hochformatigen Logos (z. B. Weber Consulting) am Desktop
   *  mehr Höhe, damit sie neben breitformatigen Logos gleichwertig wirken. */
  logos: { src: string; alt: string; name: string; emphasize?: boolean }[];
  webdesign: GalleryImage;
}

export type Project = GalleryProject | VideoProject | BrandingProject;

export const projects: Project[] = [
  {
    id: "werbeanzeigen",
    number: "01",
    title: "Werbeanzeigen",
    role: "Online Marketing Manager",
    company: "DEDO Media GmbH, Berlin",
    period: "04/2021 – 03/2022",
    summary:
      "Nach dem Studium habe ich bei einer Berliner Agentur angefangen, die sich auf Personalgewinnung für Steuerkanzleien spezialisiert hat. Dort war ich für die Erstellung und Schaltung von Werbeanzeigen in sozialen Netzwerken verantwortlich.",
    challenge:
      "Steuerkanzleien im ganzen Bundesgebiet suchten Fachkräfte in einem hart umkämpften Markt. Austauschbare Stellenanzeigen kamen dabei kaum an.",
    solution:
      "Ich habe Meta Ads mit starkem visuellem Fokus konzipiert und gestaltet und dabei kreatives Grafikdesign mit datenbasiertem Targeting kombiniert, um Fachkräfte im Steuerwesen gezielt anzusprechen.",
    result:
      "Am Ende stand eine messbare Steigerung von Kampagnenleistung und Kundenzufriedenheit, dank Anzeigen, die genau bei der Zielgruppe ankamen.",
    tags: ["Meta Ads", "Social Recruiting", "Grafikdesign"],
    media: "gallery",
    gallery: [
      { src: "/images/werbeanzeigen/ad-01.jpg", alt: "Recruiting-Anzeige für Steuerfachangestellte, Ausschreibung mit Fotomotiv", fit: "cover" },
      { src: "/images/werbeanzeigen/ad-02.jpg", alt: "Meta-Ad-Kreation für eine Steuerkanzlei im Bewerbermarketing" },
      { src: "/images/werbeanzeigen/ad-03.jpg", alt: "Recruiting-Anzeige mit Call-to-Action 'Jetzt bewerben'" },
      { src: "/images/werbeanzeigen/ad-04.jpg", alt: "Werbeanzeige für die Kanzlei Kayser im Corporate Design" },
      { src: "/images/werbeanzeigen/ad-05.jpg", alt: "Social-Media-Anzeige für Bilanzbuchhalter (m/w/d)" },
      { src: "/images/werbeanzeigen/ad-06.jpg", alt: "Alltax Recruiting-Kampagne, Anzeigenmotiv 1", fit: "cover" },
      { src: "/images/werbeanzeigen/ad-07.jpg", alt: "Alltax Recruiting-Kampagne, Anzeigenmotiv 2", fit: "cover" },
    ],
  },
  {
    id: "sportmarketing",
    number: "02",
    title: "Sportmarketing & Content Creation",
    role: "Manager Sports Marketing & Events Central Europe",
    company: "Ticketmaster GmbH",
    period: "04/2022 – 02/2023",
    summary:
      "Bei Ticketmaster habe ich das Marketing für sämtliche Sportkunden, Vereine und Veranstaltungen verantwortet und firmeneigene Events organisiert, darunter die European League of Football in ihrer zweiten Saison.",
    challenge:
      "Vor dem Saisonstart sollte die European League of Football mit hochwertigem Content sichtbar werden, sowohl in der Football-Community als auch auf den firmeneigenen Kanälen.",
    solution:
      "Für die Vorberichterstattung entwickelte ich ansprechende Grafiken und Texte für den Ticketmaster-Sportblog und steuerte deren Distribution über Social-Media-Kanäle und relevante Football-Communities.",
    result:
      "Reichweitenstarke Season-Preview-Beiträge für alle Teams der Liga, die zur Sichtbarkeit der ELF-Saison 2022 beitrugen.",
    tags: ["Content Creation", "Sportmarketing", "B2B-Kampagnen"],
    link: {
      href: "https://blog.ticketmaster.de/sport/so-spektakulaer-wird-die-european-league-of-football2022-10695/",
      label: "Blogbeitrag ansehen",
    },
    media: "gallery",
    gallery: [
      { src: "/images/sportmarketing/season-preview.jpg", alt: "Ticketmaster Season Preview 2022, Titelgrafik European League of Football", fit: "cover" },
      { src: "/images/sportmarketing/berlin-thunder.jpg", alt: "Season-Preview-Grafik Berlin Thunder" },
      { src: "/images/sportmarketing/frankfurt-galaxy.jpg", alt: "Season-Preview-Grafik Frankfurt Galaxy" },
      { src: "/images/sportmarketing/leipzig-kings.jpg", alt: "Season-Preview-Grafik Leipzig Kings" },
      { src: "/images/sportmarketing/sea-devils.jpg", alt: "Season-Preview-Grafik Sea Devils" },
    ],
  },
  {
    id: "videoproduktion",
    number: "03",
    title: "Videoproduktion",
    role: "European Championships München",
    company: "Ticketmaster GmbH · Exklusivpartner",
    period: "August 2022",
    summary:
      "Als Exklusivpartner der European Championships 2022 war Ticketmaster bei den Europameisterschaften in neun Sportarten vor Ort, von Tischtennis über Leichtathletik bis Volleyball.",
    challenge:
      "Der Instagram-Kanal von Ticketmaster sollte authentisches Bild- und Videomaterial von der Veranstaltung zeigen, durfte dabei aber keine Wettkampfszenen nutzen, die aus rechtlichen Gründen nicht freigegeben waren.",
    solution:
      "Ich war vor Ort und produzierte Foto- und Videomaterial für Stories und Beiträge sowie ein Highlight-Video für den YouTube-Kanal, mit Fokus auf stimmungsvolle Publikumsimpressionen statt Wettkampfszenen.",
    result:
      "Ein eigenständig produziertes Highlight-Video sowie durchgängige Instagram-Betreuung während der gesamten Veranstaltung.",
    tags: ["Videoproduktion", "Content vor Ort", "Social Media"],
    link: {
      href: "https://www.youtube.com/watch?v=nVHQmqGC698",
      label: "Video auf YouTube ansehen",
    },
    media: "video",
    youtubeId: "nVHQmqGC698",
    videoTitle: "European Championships München: Highlight-Video",
  },
  {
    id: "branding",
    number: "04",
    title: "Branding",
    role: "Freiberuflicher Grafikdesigner",
    company: "Selbstständig",
    period: "seit 03/2023",
    summary:
      "Im März 2023 habe ich meine Leidenschaft zum Beruf gemacht. Seitdem entwickle ich für Kunden aus unterschiedlichen Branchen Corporate Designs, von Logos über Verpackungen bis zu kompletten Webseiten.",
    challenge:
      "Jedes Kundenprojekt bringt eigene Anforderungen mit, von der Markenneugründung bis zum kompletten Web-Auftritt eines etablierten Unternehmens, wie zuletzt bei einem Baustofftransport-Unternehmen.",
    solution:
      "Ich kümmere mich selbst um Kundenakquise, Konzeption und Umsetzung: Ich entwickle Logos, Verpackungsdesigns und Präsentationen und übernehme bei Bedarf auch die komplette Webseitengestaltung, von der ersten Idee bis zur fertigen Seite.",
    result:
      "Mehrere abgeschlossene Markenauftritte, u. a. für Sven Peterburs Transport GmbH (komplettes Branding & Webdesign), Weber Consulting und VineLabs, sowie individuelle Verpackungslösungen wie den „Mein Finanzordner“ für Hauptstadt Finanz.",
    tags: ["Branding", "Logodesign", "Verpackungsdesign", "Webdesign"],
    media: "branding",
    verpackung: [
      { src: "/images/branding/verpackung/hauptstadt-finanz-ordner.png", alt: "Verpackungsdesign 'Mein Finanzordner' für Hauptstadt Finanz" },
      { src: "/images/branding/verpackung/hauptstadt-finanz-gutachten.png", alt: "Gutachten-Mockup im Corporate Design von Hauptstadt Finanz" },
      { src: "/images/branding/verpackung/vinelabs-aussenseite.png", alt: "VineLabs Verpackungsdesign, Außenseite der Box" },
      { src: "/images/branding/verpackung/vinelabs-innenseite.png", alt: "VineLabs Verpackungsdesign, Innenseite der Box" },
    ],
    logos: [
      { src: "/images/branding/logos/spt-logo.png", alt: "Logo Sven Peterburs Transport GmbH", name: "Sven Peterburs Transport GmbH" },
      { src: "/images/branding/logos/weber-consulting-logo.png", alt: "Logo Weber Consulting", name: "Weber Consulting", emphasize: true },
      { src: "/images/branding/logos/vinelabs-logo.png", alt: "Logo VineLabs", name: "VineLabs" },
    ],
    webdesign: {
      src: "/images/branding/webdesign/spt-website.png",
      alt: "Website-Design für Sven Peterburs Transport GmbH, Startseite im Browser-Mockup",
    },
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Freiberuflicher Grafikdesigner",
    company: "Selbstständig",
    period: "seit 03/2023",
    points: [
      "Konzeption und Umsetzung von Designprojekten für Kunden unterschiedlicher Branchen",
      "Entwicklung von Corporate Designs, Logos, Verpackungen und Präsentationen (PowerPoint/Keynote)",
      "Eigenständige Kundenakquise und Projektmanagement, inkl. Erstellung einer Unternehmenswebsite für ein Transportunternehmen",
    ],
  },
  {
    role: "Manager Sports Marketing & Events Central Europe",
    company: "Ticketmaster GmbH",
    period: "04/2022 – 02/2023",
    points: [
      "Leitung des Marketings für Sportkunden (Vereine & Veranstalter) mit Fokus auf Umsatzsteigerung durch Ticketverkäufe",
      "Strategische Betreuung von B2B-Kunden sowie Planung und Durchführung von Marketing-Workshops",
      "Enge Zusammenarbeit mit Partnern zur Maximierung von Event-Reichweite und Sales-Performance",
    ],
  },
  {
    role: "Online Marketing Manager",
    company: "DEDO Media GmbH, Berlin",
    period: "04/2021 – 03/2022",
    points: [
      "Konzeption und Umsetzung von Social-Media-Kampagnen im Recruiting-Bereich für Steuerkanzleien",
      "Gestaltung und Optimierung von Meta Ads (Texte & Visuals) zur gezielten Ansprache von Fachkräften",
      "Steigerung von Kampagnenleistung und Kundenzufriedenheit durch kreatives Grafikdesign und datenbasiertes Targeting",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Sport & Event Management B.Sc.",
    school: "University of Applied Science Europe, Berlin",
    period: "10/2016 – 01/2021",
  },
  {
    degree: "Abitur",
    school: "Max-Delbrück-Gymnasium, Berlin",
    period: "08/2009 – 07/2015",
  },
];

export interface ToolSkill {
  name: string;
  level: string;
  /** rein visueller Balkenwert, keine Marketingaussage über exakte Prozentwerte */
  bar: number;
}

// Sortiert nach Kenntnisstand absteigend, damit die Balken im Layout eine
// ruhige, gleichmäßige Reihenfolge ergeben statt einer zufälligen Mischung.
export const toolSkills: ToolSkill[] = [
  { name: "Adobe Premiere Pro", level: "Expertenkenntnisse", bar: 100 },
  { name: "Canva", level: "Expertenkenntnisse", bar: 100 },
  { name: "Affinity", level: "Expertenkenntnisse", bar: 100 },
  { name: "MS Office", level: "Hervorragende Kenntnisse", bar: 95 },
  { name: "Adobe Photoshop", level: "Fortgeschrittene Kenntnisse", bar: 75 },
  { name: "Adobe Illustrator", level: "Fortgeschrittene Kenntnisse", bar: 75 },
  { name: "Adobe InDesign", level: "Fortgeschrittene Kenntnisse", bar: 75 },
  { name: "Claude", level: "Fortgeschrittene Kenntnisse", bar: 75 },
];

export const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Fließend in Wort und Schrift" },
];

export const drivingLicense = "Führerschein Klasse B";

export const contact = {
  eyebrow: "Kontakt",
  headline: "Lass uns sprechen.",
  text: "Ob neues Projekt, offene Position oder einfach ein Austausch über gute Gestaltung, ich freue mich auf deine Nachricht.",
};
