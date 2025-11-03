import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Image/Video */}
      <section className="relative h-[60vh] bg-gray-900">
        {project.videoUrl ? (
          <VideoPlayer videoUrl={project.videoUrl} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-600 text-xl">Project Media</span>
          </div>
        )}
      </section>

      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Additional sections can be added here */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This project represents our commitment to creating spaces that
                  blend functionality with aesthetic appeal. Every detail has been
                  carefully considered to ensure the design meets the client&apos;s
                  needs while pushing the boundaries of architectural innovation.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Design Process
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our design process began with extensive research and
                  collaboration with the client to understand their vision. We
                  conducted site analysis, developed multiple concepts, and
                  refined the design through iterative feedback sessions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sustainability Features
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Environmental responsibility was a key consideration throughout
                  the project. We incorporated sustainable materials, energy-
                  efficient systems, and passive design strategies to minimize
                  the building&apos;s environmental impact.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Project Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                      Category
                    </p>
                    <p className="text-lg text-gray-900 font-medium capitalize">
                      {project.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg text-gray-900 font-medium">
                      {project.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
                      Year
                    </p>
                    <p className="text-lg text-gray-900 font-medium">
                      {project.year}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gray-900 text-white text-center rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Projects
          </h2>
          <div className="text-center text-gray-600">
            <p>More projects coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

