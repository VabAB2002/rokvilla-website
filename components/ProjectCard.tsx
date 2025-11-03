"use client";

import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Project Image/Video Thumbnail */}
        <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
          {project.videoUrl ? (
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={project.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-110 transition-transform duration-500">
              <span className="text-gray-600 text-sm">
                Image: {project.title}
              </span>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
        </div>

        {/* Project Info */}
        <div className="p-6 bg-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{project.description}</p>
          <p className="text-sm text-gray-500 mt-2">{project.location}</p>
        </div>
      </div>
    </Link>
  );
}

