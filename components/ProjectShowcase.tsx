"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 bg-[#F5F1E8]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
        className="max-w-[1400px] mx-auto w-full"
      >
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            From Design to Completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {showcaseProjects.map((project, index) => (
            <ShowcaseCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ShowcaseCard({
  project,
  index,
  isVisible,
}: {
  project: ShowcaseProject;
  index: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
    >
      <Link
        href={project.link}
        className="group block relative h-[245px] sm:h-[280px] lg:w-[435.84px] lg:h-[326.88px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 435px"
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
    </motion.div>
  );
}

