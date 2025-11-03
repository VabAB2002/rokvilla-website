"use client";

import Link from "next/link";
import { useState } from "react";

interface FeaturedProject {
  id: string;
  title: string;
  label: string;
  description: string;
  imageUrl: string;
  link: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "1",
    title: "Villa Residences",
    label: "Residential",
    description: "Luxury homes with modern architecture. Complete design & construction.",
    imageUrl: "/images/featured/villa.jpg",
    link: "/projects/villa",
  },
  {
    id: "2",
    title: "Modern Homes",
    label: "Contemporary",
    description: "Stylish contemporary living spaces. Premium quality & finish.",
    imageUrl: "/images/featured/modern.jpg",
    link: "/projects/modern",
  },
];

export default function FeaturedShowcase() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-white text-gray-900">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Your ROKVILLA journey starts now.
          </h2>
        </div>

        {/* 2 Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={project.link}
      className="group block relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Placeholder gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800">
          {/* This will be replaced with actual project images */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-white/30">
              <svg
                className="w-32 h-32 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className="text-sm">Featured Project Image</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
          isHovered ? "bg-black/10" : ""
        }`}
      />

      {/* Top Label */}
      <div className="absolute top-6 left-6">
        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded">
          {project.label}
        </span>
      </div>

      {/* Title - Top Right */}
      <div className="absolute top-6 right-6">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          {project.title.split(" ")[0]}
        </h3>
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-end justify-between">
          {/* Description */}
          <div className="flex-1">
            <p className="text-white/90 text-sm md:text-base max-w-md">
              {project.description}
            </p>
          </div>

          {/* Explore Button */}
          <div
            className={`flex-shrink-0 ml-6 transform transition-all duration-500 ${
              isHovered ? "translate-x-2" : ""
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm md:text-base font-medium">
                Explore
              </span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
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

