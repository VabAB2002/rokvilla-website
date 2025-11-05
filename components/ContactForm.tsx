"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // TODO: Implement email sending functionality using Resend, SendGrid, or EmailJS
      // For now, just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message:
          "Thank you for your message! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[48px]"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[48px]"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[48px]"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white min-h-[48px]"
        >
          <option value="">Select a project type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="institutional">Institutional</option>
          <option value="hospitality">Hospitality</option>
          <option value="mixed-use">Mixed Use</option>
          <option value="renovation">Renovation</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3.5 sm:py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none min-h-[120px]"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`p-4 sm:p-5 rounded-lg text-sm sm:text-base ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button - Larger touch target */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 sm:px-8 py-4 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg text-base sm:text-lg min-h-[56px] ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl active:scale-[0.98]"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
        * Required fields. We respect your privacy and will never share your
        information.
      </p>
    </form>
  );
}

