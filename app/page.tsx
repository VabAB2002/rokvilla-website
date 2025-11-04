"use client";

import { useEffect, useRef } from "react";
import VideoHero from "@/components/VideoHero";
import ProjectShowcase from "@/components/ProjectShowcase";
import FeaturedShowcase from "@/components/FeaturedShowcase";
import DiscoverSection from "@/components/DiscoverSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for section scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!scrollContainerRef.current) return;

      const sections = scrollContainerRef.current.querySelectorAll(
        "[data-scroll-section]"
      );
      if (sections.length === 0) return;

      // Find current section in viewport
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentIndex = index;
        }
      });

      // Navigate on arrow key press
      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        e.preventDefault();
        sections[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        e.preventDefault();
        sections[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="snap-y snap-mandatory overflow-y-auto h-screen overscroll-none"
      style={{ 
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y'
      }}
    >
      {/* 1. Hero with big background */}
      <div data-scroll-section className="snap-start">
        <VideoHero
          title="ROK Solid Luxury."
          subtitle="Crafted by ROKVILLA"
          ctaText="Discover more"
          ctaLink="/projects"
          videoUrl="/videos/hero-video.mp4"
        />
      </div>

      {/* 2. Three cards: DESIGN, BUILD, FURNISH */}
      <div data-scroll-section className="snap-start">
        <ProjectShowcase />
      </div>

      {/* 3. Your ROKVILLA journey starts now - 2 big cards */}
      <div data-scroll-section className="snap-start">
        <FeaturedShowcase />
      </div>

      {/* 4. Discover - 3 cards */}
      <div data-scroll-section className="snap-start">
        <DiscoverSection />
      </div>

      {/* 5. Map Section - Visit Our Offices */}
      <div data-scroll-section className="snap-start">
        <MapSection />
      </div>

      {/* 6. Footer */}
      <div data-scroll-section className="snap-start">
        <Footer />
      </div>
    </div>
  );
}

