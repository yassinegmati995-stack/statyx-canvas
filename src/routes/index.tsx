import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Statyx — Premium Streetwear | Just Fly" },
      { name: "description", content: "Where streetwear meets art. Premium apparel featuring iconic dove designs, handcrafted in Europe. Discover the Statyx collection." },
      { property: "og:title", content: "Statyx — Premium Streetwear | Just Fly" },
      { property: "og:description", content: "Where streetwear meets art. Premium apparel featuring iconic dove designs." },
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
