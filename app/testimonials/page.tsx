import type { Metadata } from "next";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials - Architecture Firm",
  description: "Read what our clients have to say about working with us and see the impact of our architectural designs.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover why clients choose us for their most important
              architectural projects and hear about their experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                30+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                10+
              </div>
              <div className="text-gray-600">Homes Built</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                20+
              </div>
              <div className="text-gray-600">Designs Created</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                3
              </div>
              <div className="text-gray-600">City Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Rating */}
                {testimonial.rating && (
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                )}

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Client Info */}
                <div className="border-t pt-6">
                  <p className="font-bold text-gray-900 text-lg mb-1">
                    {testimonial.clientName}
                  </p>
                  <p className="text-gray-600">{testimonial.projectName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-8">💬</div>
            <blockquote className="text-2xl md:text-3xl text-gray-900 font-medium mb-8 leading-relaxed">
              &ldquo;Working with this architecture firm was an absolute
              pleasure. They took our vision and transformed it into something
              beyond our wildest dreams. Their attention to detail,
              professionalism, and creative approach made the entire process
              seamless.&rdquo;
            </blockquote>
            <div className="text-xl">
              <p className="font-bold text-gray-900 mb-1">Sarah Johnson</p>
              <p className="text-gray-600">CEO, Tech Innovations Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted By Leading Organizations
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;ve had the privilege of working with amazing clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg flex items-center justify-center h-32"
              >
                <span className="text-gray-400">Client Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our growing list of satisfied clients and let us bring your
            architectural vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
}

