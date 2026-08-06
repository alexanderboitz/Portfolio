# Alexander Boitz — Portfolio-Website

Persönliche Portfolio-Website für Recruiting-Zwecke. Gebaut mit Next.js (App Router), TypeScript, Tailwind CSS und Framer Motion.

## Erste Schritte

Voraussetzung: [Node.js](https://nodejs.org) ≥ 18 (mit npm) ist installiert.

```bash
cd "Webseite"
npm install
npm run dev
```

Die Seite läuft danach unter [http://localhost:3000](http://localhost:3000).

Produktion-Build lokal testen:

```bash
npm run build
npm run start
```

## Projektstruktur

```
app/            Next.js App Router: Layout, Seite, Metadata, sitemap.xml, robots.txt
components/
  ui/           Wiederverwendbare UI-Bausteine (Button, Card, Icon, SkillBar, LiteYouTube, Reveal …)
  layout/       Navbar, MobileMenu, Footer, Hintergrund-Effekte
sections/       Eine Datei je Seitenabschnitt (Hero, Über mich, Kompetenzen, Werdegang, Kenntnisse, Kontakt)
sections/projects/  Projekte-Sektion inkl. wiederverwendbarer Case-Study-Layouts
hooks/          useActiveSection (Navigation-Highlight), useScrolled (Navbar-Glass-Effekt)
lib/            data.ts (alle Inhalte), constants.ts (Meta/Links), utils.ts
styles/         tokens.css — Design-Tokens (Farben, Spacing) als CSS-Variablen
public/         Bilder, Lebenslauf-PDF, Favicon
```

## Inhalte pflegen

Alle Texte (Projekte, Kompetenzen, Werdegang, Kenntnisse, Kontakt) liegen zentral in [`lib/data.ts`](lib/data.ts). Änderungen an Texten, Reihenfolge oder neuen Projekten reichen dort — die Komponenten müssen nicht angefasst werden.

Bilder liegen in `public/images/…`, sprechend benannt nach Projekt. Neue Bilder einfach in den passenden Ordner legen und in `lib/data.ts` referenzieren (next/image übernimmt Optimierung & Lazy-Loading automatisch).

## Porträtfoto

Liegt unter `public/images/profile/alexander-boitz.jpg` und wird in `sections/About.tsx` angezeigt. Der Bildausschnitt wird per `object-position` gesteuert — bei einem neuen Foto ggf. den Wert `object-[50%_22%]` in `About.tsx` anpassen. Der Hero-Bereich bleibt bewusst porträtfrei (typografisch, im Linear/Stripe-Register).

## Hinweis zu Bildgrößen

Einige Quellbilder (v. a. die VineLabs-Verpackungsmockups) sind sehr hochauflösend (bis 5000×4000 px). `next/image` verkleinert und komprimiert sie automatisch zur Laufzeit — für performante Bildoptimierung im Self-Hosting-Betrieb (außerhalb von Vercel) zusätzlich installieren:

```bash
npm install sharp
```

## Vor dem Livegang

- `npm run build` lokal ausführen und Konsole auf Fehler/Warnungen prüfen.
- Lighthouse-Report in Chrome DevTools laufen lassen (Ziel: 90–100 in allen Kategorien).
- `SITE.url` und `SITE.email` in `lib/constants.ts` final prüfen.
- Eigene Domain + Hosting (empfohlen: Vercel) einrichten.
