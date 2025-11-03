"use client";

import Link from "next/link";
import { useState } from "react";

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
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Discover
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {discoverCards.map((card, index) => (
            <DiscoverCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscoverCard({
  card,
  index,
}: {
  card: DiscoverCard;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={card.link}
      className="group block relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Placeholder gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white/30">
              {card.title === "DESIGN DOCKET" && (
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              )}
              {card.title === "BUILD PACKAGES" && (
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              )}
              {card.title === "STYLING/MAKEOVER" && (
                <svg
                  className="w-24 h-24 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              )}
              <p className="text-sm">Service Image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
          isHovered ? "bg-black/20" : ""
        }`}
      />

      {/* Content - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-end justify-between">
          {/* Title and Description */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {card.title}
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              {card.description}
            </p>
          </div>

          {/* Arrow Icon */}
          <div
            className={`flex-shrink-0 ml-4 transform transition-all duration-500 ${
              isHovered ? "translate-x-2 translate-y-[-8px]" : ""
            }`}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
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
  );
}

