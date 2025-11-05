"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FlowingMenu from "@/components/FlowingMenu";

interface DiscoverCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const discoverCards: DiscoverCard[] = [
  {
    id: "1",
    title: "DESIGN DOCKET",
    description: "Complete architectural design packages for your dream home.",
    imageUrl: "/images/discover/design-docket.jpg",
    link: "/services",
  },
  {
    id: "2",
    title: "BUILD PACKAGES",
    description: "End-to-end construction solutions with quality assurance.",
    imageUrl: "/images/discover/build-packages.jpg",
    link: "/services",
  },
  {
    id: "3",
    title: "STYLING/MAKEOVER",
    description: "Transform your spaces with premium interior design & décor.",
    imageUrl: "/images/discover/styling.jpg",
    link: "/services",
  },
];

export default function DiscoverSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex flex-col items-center justify-center bg-[#F5F1E8]"
    >
      {/* Section Title - Full Width FlowingMenu */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
        className="w-full mb-8 sm:mb-10 md:mb-12"
      >
        <div className="h-[80px] md:h-[100px] relative bg-[#060010] overflow-hidden">
          <FlowingMenu items={[{
            link: '/services',
            text: 'Discover',
            image: 'https://picsum.photos/600/400?random=3'
          }]} />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        {/* 3 Cards Grid - Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {discoverCards.map((card, index) => (
            <DiscoverCard
              key={card.id}
              card={card}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscoverCard({
  card,
  index,
  isVisible,
}: {
  card: DiscoverCard;
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
    >
      <Link
        href={card.link}
        className="group block relative h-[350px] sm:h-[400px] md:h-[420px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 active:scale-[0.98]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
        <Image
          src={card.imageUrl}
          alt={card.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
          quality={85}
        />
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
          isHovered ? "bg-black/20" : ""
        }`}
      />

      {/* Content - Bottom - Better mobile sizing */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
        <div className="flex items-end justify-between gap-3">
          {/* Title and Description */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 leading-tight">
              {card.title}
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Arrow Icon - Larger for touch devices */}
          <div
            className={`flex-shrink-0 transform transition-all duration-500 ${
              isHovered ? "translate-x-2 translate-y-[-8px]" : ""
            }`}
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line Accent (appears on hover) */}
      <div
        className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-500 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
      </Link>
    </motion.div>
  );
}

