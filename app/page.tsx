import VideoHero from "@/components/VideoHero";
import ProjectShowcase from "@/components/ProjectShowcase";
import FeaturedShowcase from "@/components/FeaturedShowcase";
import DiscoverSection from "@/components/DiscoverSection";

export default function Home() {
  return (
    <div>
      {/* 1. Hero with big background */}
      <VideoHero
        title="ROK Solid Luxury."
        subtitle="Crafted by ROKVILLA"
        ctaText="Discover more"
        ctaLink="/projects"
        videoUrl="/videos/hero-video.mp4"
      />
      
      {/* 2. Three cards: DESIGN, BUILD, FURNISH */}
      <ProjectShowcase />
      
      {/* 3. Your ROKVILLA journey starts now - 2 big cards */}
      <FeaturedShowcase />
      
      {/* 4. Discover - 3 cards */}
      <DiscoverSection />
      
      {/* 5. Footer (included in layout.tsx) */}
    </div>
  );
}

