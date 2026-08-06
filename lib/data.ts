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
  roles: ["Marketing", "Eventmanagement", "Grafikdesign"],
  claim:
    "Ich entwickle Marken, Kampagnen und Erlebnisse — mit einem geschulten Blick fürs Detail und einem Gespür dafür, was Menschen wirklich bewegt.",
} as const;

export const about = {
  eyebrow: "Über mich",
  headline: "Vom Spielfeldrand ins Rampenlicht der Marken.",
  paragraphs: [
    "Mein Weg begann nicht am Schreibtisch, sondern auf dem Spielfeld: Mit dem Studium Sport & Event Management an der University of Applied Science Europe in Berlin habe ich früh gelernt, was eine Veranstaltung, eine Kampagne oder eine Marke wirklich bewegt — Menschen, Emotionen und der richtige Auftritt im richtigen Moment.",
    "Diese Leidenschaft für Bewegung und Inszenierung habe ich ins Marketing getragen: Bei DEDO Media entwickelte ich Recruiting-Kampagnen für Steuerkanzleien, bei Ticketmaster verantwortete ich das Marketing für Sportkunden wie die European League of Football und produzierte vor Ort bei den European Championships 2022 in München Content für internationale Reichweite.",
    "Je mehr Kampagnen ich betreute, desto klarer wurde: Die eigentliche Faszination lag für mich immer in der Gestaltung selbst — in der Frage, wie eine Botschaft aussehen muss, damit sie wirkt. Im März 2023 habe ich diese Leidenschaft zum Beruf gemacht und bin als freiberuflicher Grafikdesigner in die Selbstständigkeit gestartet.",
    "Seitdem entwickle ich für Kunden aus unterschiedlichsten Branchen Corporate Designs, Logos, Verpackungen und Websites — strukturiert, markenorientiert und mit dem Anspruch, dass jedes Projekt genauso überzeugt wie die Idee dahinter.",
  ],
  pillars: [
    {
      title: "Warum Marketing?",
      text: "Weil eine gute Botschaft nur wirkt, wenn sie die richtigen Menschen erreicht — und genau das treibt mich an: Strategie und Kreativität zusammenzubringen.",
    },
    {
      title: "Warum Events?",
      text: "Weil Live-Momente Marken greifbar machen. Von der European League of Football bis zu den European Championships München habe ich erlebt, wie viel Energie in guter Organisation steckt.",
    },
    {
      title: "Warum Design?",
      text: "Weil Gestaltung die Sprache ist, in der ich am klarsten kommuniziere — vom ersten Logo-Entwurf bis zur fertigen Website.",
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
      "Kampagnenkonzeption, Meta Ads und datenbasiertes Targeting für messbare Ergebnisse.",
  },
  {
    icon: "design",
    title: "Grafikdesign",
    description:
      "Von Logo bis Layout: visuelle Konzepte, die eine klare Handschrift tragen.",
  },
  {
    icon: "branding",
    title: "Branding",
    description:
      "Corporate Designs, die eine Marke konsistent und wiedererkennbar machen.",
  },
  {
    icon: "content",
    title: "Content Creation",
    description:
      "Grafiken, Texte und Bewegtbild für Social Media, Blogs und Kampagnen.",
  },
  {
    icon: "social",
    title: "Social Media",
    description:
      "Ansprechende Anzeigen und Beiträge, die Zielgruppen wirklich erreichen.",
  },
  {
    icon: "event",
    title: "Eventmanagement",
    description:
      "Planung und Umsetzung firmeneigener Events sowie Betreuung von Veranstaltern.",
  },
  {
    icon: "adobe",
    title: "Adobe Creative Cloud",
    description:
      "Photoshop, Illustrator und InDesign auf fortgeschrittenem Niveau.",
  },
  {
    icon: "presentation",
    title: "Präsentationsdesign",
    description:
      "Überzeugende Keynotes und PowerPoint-Präsentationen für Kunden und Pitches.",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
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
  logos: { src: string; alt: string; name: string }[];
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
      "Meine erste berufliche Station nach dem Studium: Bei einer Berliner Agentur, spezialisiert auf Personalgewinnung für Steuerkanzleien, verantwortete ich die Erstellung und Schaltung von Werbeanzeigen in sozialen Netzwerken.",
    challenge:
      "Steuerkanzleien im gesamten Bundesgebiet suchten Fachkräfte in einem hart umkämpften Bewerbermarkt — austauschbare Stellenanzeigen erzielten kaum Resonanz.",
    solution:
      "Ich konzipierte und gestaltete Meta Ads mit starkem visuellem Fokus, kombinierte kreatives Grafikdesign mit datenbasiertem Targeting und sprach Fachkräfte im Steuerwesen gezielt an.",
    result:
      "Messbare Steigerung von Kampagnenleistung und Kundenzufriedenheit durch ansprechende, zielgruppengenaue Anzeigenkreationen.",
    tags: ["Meta Ads", "Social Recruiting", "Grafikdesign"],
    media: "gallery",
    gallery: [
      { src: "/images/werbeanzeigen/ad-01.jpg", alt: "Recruiting-Anzeige für Steuerfachangestellte, Ausschreibung mit Fotomotiv" },
      { src: "/images/werbeanzeigen/ad-02.jpg", alt: "Meta-Ad-Kreation für eine Steuerkanzlei im Bewerbermarketing" },
      { src: "/images/werbeanzeigen/ad-03.jpg", alt: "Recruiting-Anzeige mit Call-to-Action 'Jetzt bewerben'" },
      { src: "/images/werbeanzeigen/ad-04.jpg", alt: "Werbeanzeige für die Kanzlei Kayser im Corporate Design" },
      { src: "/images/werbeanzeigen/ad-05.jpg", alt: "Social-Media-Anzeige für Bilanzbuchhalter (m/w/d)" },
      { src: "/images/werbeanzeigen/ad-06.jpg", alt: "Alltax Recruiting-Kampagne, Anzeigenmotiv 1" },
      { src: "/images/werbeanzeigen/ad-07.jpg", alt: "Alltax Recruiting-Kampagne, Anzeigenmotiv 2" },
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
      "Bei Ticketmaster verantwortete ich das Marketing sämtlicher Sportkunden, Vereine und Veranstaltungen sowie die Organisation firmeneigener Events — darunter die European League of Football in ihrer zweiten Saison.",
    challenge:
      "Die European League of Football sollte vor dem Saisonstart mit hochwertigem Content in der Football-Community und auf den firmeneigenen Kanälen sichtbar gemacht werden.",
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
      { src: "/images/sportmarketing/season-preview.jpg", alt: "Ticketmaster Season Preview 2022, Titelgrafik European League of Football" },
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
      "Als Exklusivpartner der European Championships 2022 war Ticketmaster bei den Europameisterschaften in neun Sportarten vor Ort — von Tischtennis über Leichtathletik bis Volleyball.",
    challenge:
      "Der Instagram-Kanal von Ticketmaster sollte authentisches Bild- und Videomaterial von der Veranstaltung zeigen — ohne dabei Wettkampfszenen zu nutzen, die aus rechtlichen Gründen nicht freigegeben waren.",
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
    videoTitle: "European Championships München — Highlight-Video",
  },
  {
    id: "branding",
    number: "04",
    title: "Branding",
    role: "Freiberuflicher Grafikdesigner",
    company: "Selbstständig",
    period: "seit 03/2023",
    summary:
      "Im März 2023 habe ich meine Leidenschaft zum Beruf gemacht. Seitdem entwickle ich für Kunden unterschiedlicher Branchen Corporate Designs — von Logos über Verpackungen bis zu kompletten Webseiten.",
    challenge:
      "Jedes Kundenprojekt bringt eigene Anforderungen mit: von der Markenneugründung bis zum kompletten Web-Auftritt eines etablierten Unternehmens — wie zuletzt bei einem Baustofftransport-Unternehmen.",
    solution:
      "Eigenständige Kundenakquise, Konzeption und Umsetzung: Ich entwickle Logos, Verpackungsdesigns und Präsentationen und übernehme bei Bedarf die komplette Webseitengestaltung — von der ersten Idee bis zur launch-fertigen Seite.",
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
      { src: "/images/branding/logos/weber-consulting-logo.png", alt: "Logo Weber Consulting", name: "Weber Consulting" },
      { src: "/images/branding/logos/vinelabs-logo.png", alt: "Logo VineLabs", name: "VineLabs" },
    ],
    webdesign: {
      src: "/images/branding/webdesign/spt-website.jpg",
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

export const toolSkills: ToolSkill[] = [
  { name: "MS Office", level: "Hervorragende Kenntnisse", bar: 95 },
  { name: "Slack", level: "Hervorragende Kenntnisse", bar: 95 },
  { name: "Zoom", level: "Hervorragende Kenntnisse", bar: 95 },
  { name: "Adobe Photoshop", level: "Fortgeschrittene Kenntnisse", bar: 75 },
  { name: "Adobe Illustrator", level: "Fortgeschrittene Kenntnisse", bar: 75 },
  { name: "Adobe InDesign", level: "Fortgeschrittene Kenntnisse", bar: 75 },
];

export const languages = [
  { name: "Deutsch", level: "Muttersprache" },
  { name: "Englisch", level: "Fließend in Wort und Schrift" },
];

export const drivingLicense = "Führerschein Klasse B";

export const contact = {
  eyebrow: "Kontakt",
  headline: "Lass uns sprechen.",
  text: "Ob neues Projekt, offene Position oder einfach ein Austausch über gute Gestaltung — ich freue mich auf deine Nachricht.",
};
