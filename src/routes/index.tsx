import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Statyx — Streetwear Premium | Just Fly" },
      { name: "description", content: "Là où le streetwear rencontre l'art. Vêtements premium avec des designs iconiques de colombe, fabriqués en Europe. Découvrez la collection Statyx." },
      { property: "og:title", content: "Statyx — Streetwear Premium | Just Fly" },
      { property: "og:description", content: "Là où le streetwear rencontre l'art. Vêtements premium avec des designs iconiques de colombe." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
