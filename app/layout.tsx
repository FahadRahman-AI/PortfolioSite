import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/app/components/GrainOverlay";
import Cursor from "@/app/components/Cursor";
import { PreloaderProvider } from "@/app/context/PreloaderContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-editorial",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Fahad — Emerging Videographer | Birmingham, UK",
  description:
    "Early-stage videography portfolio. Short-form video, local promos, and passion projects. Birmingham-based, open to collaborations.",
  openGraph: {
    title: "Fahad — Videographer",
    description:
      "A beginner videographer building a cinematic portfolio, one frame at a time.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${cormorant.variable} ${dmMono.variable} h-full`}
    >
      <body
        className={`${dmMono.className} min-h-full bg-[var(--black)] text-[var(--white)] antialiased`}
      >
        <PreloaderProvider>
          {children}
          <Cursor />
          <GrainOverlay />
        </PreloaderProvider>
      </body>
    </html>
  );
}
