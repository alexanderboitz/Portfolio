import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SITE } from "@/lib/constants";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundFX } from "@/components/layout/BackgroundFX";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Alexander Boitz",
    "Marketing Portfolio",
    "Grafikdesign",
    "Eventmanagement",
    "Branding",
    "Social Media Marketing",
    "Content Creation",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#071F3F",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: "Marketing & Grafikdesign",
  email: `mailto:${SITE.email}`,
  url: SITE.url,
  knowsAbout: [
    "Marketing",
    "Grafikdesign",
    "Branding",
    "Eventmanagement",
    "Content Creation",
    "Social Media",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={montserrat.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <BackgroundFX />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
