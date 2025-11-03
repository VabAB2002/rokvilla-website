"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCategory } from "@/lib/types";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const categories: Array<ProjectCategory | "all"> = [
    "all",
    "residential",
    "commercial",
    "institutional",
    "hospitality",
    "mixed-use",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categoryLabels: Record<ProjectCategory | "all", string> = {
    all: "All Projects",
    residential: "Residential",
    commercial: "Commercial",
    institutional: "Institutional",
    hospitality: "Hospitality",
    "mixed-use": "Mixed Use",
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of innovative architectural designs that
              transform spaces and inspire communities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

