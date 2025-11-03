import Link from "next/link";
import { testimonials } from "@/lib/data";

export default function TestimonialsPreview() {
  const previewTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in delivering exceptional results and building lasting
            relationships with our clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating Stars */}
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.clientName}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.projectName}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}

