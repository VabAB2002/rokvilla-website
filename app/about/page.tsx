import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ROKVILLA",
  description: "Learn about ROKVILLA Design & Build Co.'s history, mission, and design philosophy that drives our innovative architectural solutions across Karnataka.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
              About ROKVILLA
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              A design & construction company based in Karnataka, specializing in
              home design & construction with a dedicated in-house team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                We are a design & construction company based in <strong>Hubli-Dharwad, 
                Ballari & Bengaluru</strong> with expertise in home design & construction.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                With <strong>10+ home construction projects</strong> and <strong>20+ home 
                design projects</strong> successfully completed, we have established ourselves 
                as a trusted partner for residential projects across Karnataka.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We have an in-house team of <strong>Architects, Interior Designers, 
                Construction Workers & Structural Engineers</strong> capable of handling 
                residential design & construction of any size.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl font-bold text-gray-700 mb-2">30+</div>
                <div className="text-lg sm:text-xl text-gray-600">Total Projects</div>
                <div className="mt-4 sm:mt-6 space-y-2 text-gray-600 text-sm sm:text-base">
                  <p>10+ Constructions</p>
                  <p>20+ Designs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-blue-100 to-purple-100 aspect-square rounded-lg flex items-center justify-center p-6 sm:p-8">
              <div className="text-center">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">One Stop Solution</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-xl sm:text-2xl text-gray-800 font-medium mb-4 sm:mb-6 leading-relaxed">
                Become a one stop solution for all home Designing, building & 
                furnishing needs of customers.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We strive to simplify the home-building journey for our clients by 
                offering comprehensive services under one roof—from initial design 
                concepts to final construction and furnishing, ensuring a seamless 
                and stress-free experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our In-House Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated team of professionals ready to bring your dream home to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Architects */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Architects
              </h3>
              <p className="text-gray-600">
                Expert design and planning
              </p>
            </div>

            {/* Interior Designers */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Interior Designers
              </h3>
              <p className="text-gray-600">
                Beautiful interior spaces
              </p>
            </div>

            {/* Structural Engineers */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Structural Engineers
              </h3>
              <p className="text-gray-600">
                Strong & safe structures
              </p>
            </div>

            {/* Construction Workers */}
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Construction Workers
              </h3>
              <p className="text-gray-600">
                Skilled execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Awards & Recognition
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry
              leaders and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                AIA Design Award
              </h3>
              <p className="text-gray-600 mb-2">2024</p>
              <p className="text-sm text-gray-500">
                Excellence in Residential Architecture
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Green Building Award
              </h3>
              <p className="text-gray-600 mb-2">2023</p>
              <p className="text-sm text-gray-500">
                Sustainable Design Innovation
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Best Commercial Project
              </h3>
              <p className="text-gray-600 mb-2">2023</p>
              <p className="text-sm text-gray-500">
                Urban Design Excellence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

