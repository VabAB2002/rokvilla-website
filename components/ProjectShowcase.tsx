"use client";

import Link from "next/link";
import { useState } from "react";

interface ShowcaseProject {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  link: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "1",
    title: "DESIGN",
    subtitle: "Architectural Excellence",
    imageUrl: "/images/showcase/design.jpg",
    link: "/services",
  },
  {
    id: "2",
    title: "BUILD",
    subtitle: "Quality Construction",
    imageUrl: "/images/showcase/build.jpg",
    link: "/services",
  },
  {
    id: "3",
    title: "FURNISH",
    subtitle: "Complete Décor",
    imageUrl: "/images/showcase/furnish.jpg",
    link: "/services",
  },
];

export default function ProjectShowcase() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {showcaseProjects.map((project, index) => (
            <ShowcaseCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseCard({
  project,
  index,
}: {
  project: ShowcaseProject;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={project.link}
      className="group block relative h-[280px] md:h-[320px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400">
        {/* Placeholder for service image */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-600">
          <div className="text-center text-white/60">
            {project.title === "DESIGN" && (
              <svg
                className="w-16 h-16 mx-auto mb-3"
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
            {project.title === "BUILD" && (
              <svg
                className="w-16 h-16 mx-auto mb-3"
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
            {project.title === "FURNISH" && (
              <svg
                className="w-16 h-16 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            )}
            <p className="text-xs">{project.title}</p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
          isHovered ? "bg-black/20" : ""
        }`}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        {/* Title and Arrow Container */}
        <div className="flex items-end justify-between">
          {/* Title */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-white/80 text-xs md:text-sm">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Arrow Icon */}
          <div
            className={`flex-shrink-0 ml-4 transform transition-all duration-500 ${
              isHovered ? "translate-x-2 translate-y-[-8px]" : ""
            }`}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
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

