"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  link: string;
  size: "small" | "medium" | "large";
  customSize?: { width: number; height: number };
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    title: "Serenity Sculpture",
    location: "Modern Interior",
    imageUrl: "/images/featured/card-1.jpg",
    link: "/projects",
    size: "small",
    customSize: { width: 241, height: 345 },
  },
  {
    id: "2",
    title: "Dusk Residence",
    location: "Contemporary Living",
    imageUrl: "/images/featured/card-2.jpg",
    link: "/projects",
    size: "medium",
    customSize: { width: 223, height: 221 },
  },
  {
    id: "3",
    title: "Urban Architecture",
    location: "City Design",
    imageUrl: "/images/featured/card-3.jpg",
    link: "/projects",
    size: "small",
    customSize: { width: 369, height: 547 },
  },
  {
    id: "4",
    title: "Pool House Paradise",
    location: "Luxury Living",
    imageUrl: "/images/featured/card-4.jpg",
    link: "/projects",
    size: "medium",
    customSize: { width: 248, height: 168 },
  },
  {
    id: "5",
    title: "Elegant Dining",
    location: "Interior Design",
    imageUrl: "/images/penthouse.jpg",
    link: "/projects",
    size: "small",
    customSize: { width: 269, height: 180 },
  },
  {
    id: "6",
    title: "Minimalist Sanctuary",
    location: "Zen Living",
    imageUrl: "/images/featured/card-6.jpg",
    link: "/projects",
    size: "small",
    customSize: { width: 248, height: 374 },
  },
];

export default function FeaturedShowcase() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const [isHoveringSection, setIsHoveringSection] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16 bg-[#F5F1E8] text-gray-900"
    >
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Your ROKVILLA journey starts now.
          </h2>
        </motion.div>

        {/* Mood Board Container */}
        <div
          className="relative w-full"
          style={{ minHeight: "800px" }}
          onMouseEnter={() => setIsHoveringSection(true)}
          onMouseLeave={() => {
            setIsHoveringSection(false);
            setHoveredCardId(null);
          }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
              isSectionHovered={isHoveringSection}
              isCardHovered={hoveredCardId === project.id}
              onCardHover={() => setHoveredCardId(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  isVisible,
  isSectionHovered,
  isCardHovered,
  onCardHover,
}: {
  project: FeaturedProject;
  index: number;
  isVisible: boolean;
  isSectionHovered: boolean;
  isCardHovered: boolean;
  onCardHover: () => void;
}) {
  // Card size dimensions - use custom size if provided, otherwise use default
  const cardSizes = {
    small: { width: 280, height: 200 },
    medium: { width: 380, height: 280 },
    large: { width: 480, height: 360 },
  };

  const cardSize = project.customSize || cardSizes[project.size];

  // Stacked state - all cards centered with slight random offsets
  const stackedState = [
    { x: -12, y: -8, rotate: -7 },    // Card 1 - stacked
    { x: 8, y: 10, rotate: 5 },       // Card 2 - stacked
    { x: 0, y: 0, rotate: 0 },        // Card 3 - CENTER (Modern Dining) - no rotation
    { x: -10, y: 12, rotate: 6 },     // Card 4 - stacked
    { x: 15, y: -10, rotate: -4 },    // Card 5 - stacked
    { x: -8, y: -12, rotate: 3 },     // Card 6 - stacked
  ];

  // Scattered positions on hover
  const scatteredPositions = [
    { x: -550, y: -220, rotate: 0 },   // Card 1 (Serenity Sculpture) - Top Left corner
    { x: -550, y: 220, rotate: 0 },    // Card 2 (Dusk Residence) - Bottom Left corner
    { x: 0, y: 0, rotate: 0 },         // Card 3 (Urban Architecture) - CENTER - stays centered
    { x: 650, y: 300, rotate: 0 },     // Card 4 (Pool House Paradise) - Bottom Right corner (moved down)
    { x: 650, y: -400, rotate: 0 },    // Card 5 (Elegant Dining) - Top Right corner (moved up)
    { x: 480, y: -40, rotate: 0 },     // Card 6 (Minimalist Sanctuary) - Middle Right (adjusted for spacing)
  ];

  // Initial fade-in from bottom (for scroll animation)
  const fadeInFromBottom = { 
    x: stackedState[index].x, 
    y: stackedState[index].y + 400 
  }; // All cards start from below their stacked position

  // Get current position based on state
  const getCurrentPosition = () => {
    if (!isVisible) {
      // Before scroll animation - fade in from bottom
      return {
        x: fadeInFromBottom.x,
        y: fadeInFromBottom.y,
        rotate: 0,
        scale: 0.95,
        opacity: 0,
      };
    }

    if (isSectionHovered) {
      // Scattered mood board layout
      return {
        x: scatteredPositions[index].x,
        y: scatteredPositions[index].y,
        rotate: scatteredPositions[index].rotate,
        scale: isCardHovered ? 1.08 : 1,
        opacity: 1,
      };
    } else {
      // Stacked state (center)
      return {
        x: stackedState[index].x,
        y: stackedState[index].y,
        rotate: stackedState[index].rotate,
        scale: 1,
        opacity: 1,
      };
    }
  };

  const position = getCurrentPosition();

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        rotate: position.rotate,
        scale: position.scale,
        opacity: position.opacity,
        zIndex: isCardHovered ? 50 : index,
      }}
      transition={{
        duration: 0.6,
        delay: 0,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${cardSize.width}px`,
        height: `${cardSize.height}px`,
        marginLeft: `-${cardSize.width / 2}px`,
        marginTop: `-${cardSize.height / 2}px`,
        willChange: isSectionHovered ? 'transform' : 'auto',
      }}
      onMouseEnter={onCardHover}
    >
      <Link
        href={project.link}
        className="group block relative w-full h-full rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1200px) 380px, 480px"
            className="object-cover"
            loading="lazy"
            quality={85}
          />
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isCardHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Text Label - Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-white font-semibold text-sm md:text-base mb-1">
            {project.title}
          </h3>
          <p className="text-white/80 text-xs">
            {project.location}
          </p>
        </div>

        {/* Subtle border on hover */}
        <div
          className={`absolute inset-0 border-2 border-white transition-opacity duration-300 rounded-lg ${
            isCardHovered ? "opacity-40" : "opacity-0"
          }`}
        />
      </Link>
    </motion.div>
  );
}

