import type { Metadata } from "next";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team - Architecture Firm",
  description: "Meet the talented architects and designers behind our innovative projects.",
};

export default function TeamPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A diverse group of passionate architects, designers, and
              professionals committed to creating exceptional spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group"
              >
                {/* Photo */}
                <div className="aspect-square bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-gray-600 text-lg">
                      {member.name}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Credentials */}
                  {member.credentials && member.credentials.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {member.credentials.map((credential, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact */}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collaboration */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe the best results come from working together,
                combining diverse perspectives and expertise.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering the highest quality work in
                every project, no matter the size.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Honesty, transparency, and ethical practices guide all our
                professional relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re always looking for talented individuals who share our
            passion for innovative architecture.
          </p>
          <a
            href="mailto:careers@architecturefirm.com"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}

