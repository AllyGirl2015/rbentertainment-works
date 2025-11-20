import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AudioSight from "@/components/AudioSight";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "RBEW - Reality Builders Entertainment Works | Creative Studio",
  description: "Welcome to Reality Builders Entertainment Works - where imagination is engineered. We craft stories, games, mods, and cinematic experiences across novels, FiveM, Minecraft, and more.",
  keywords: ["RBEW", "Reality Builders", "Entertainment", "FiveM roleplay", "Minecraft RP", "storytelling", "game development", "creative studio"],
  authors: [{ name: "Alissa M.R. Eldridge" }],
  openGraph: {
    title: "RBEW - Reality Builders Entertainment Works",
    description: "Crafting immersive stories, games, and worlds that transform entertainment.",
    url: "https://rbew.com",
    siteName: "Reality Builders Entertainment Works",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RBEW - Reality Builders Entertainment Works",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RBEW - Reality Builders Entertainment Works",
    description: "Crafting immersive stories, games, and worlds that transform entertainment.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <AudioSight />
      <CTA />
    </>
  );
}
