import { Project, TeamMember, Testimonial, Service } from "./types";

// Sample project data - replace with real data
export const projects: Project[] = [
  {
    id: "1",
    title: "Modern Villa Residence",
    description: "A contemporary masterpiece featuring clean lines, sustainable materials, and seamless indoor-outdoor integration.",
    category: "residential",
    year: 2024,
    location: "Hubli-Dharwad, Karnataka",
    imageUrl: "/images/projects/project1.jpg",
    videoUrl: "/videos/project1.mp4",
    featured: true,
  },
  {
    id: "2",
    title: "Corporate Office Complex",
    description: "An innovative workspace designed to foster collaboration and creativity in a sustainable environment.",
    category: "commercial",
    year: 2023,
    location: "Bengaluru, Karnataka",
    imageUrl: "/images/projects/project2.jpg",
    videoUrl: "/videos/project2.mp4",
    featured: true,
  },
  {
    id: "3",
    title: "Urban Mixed-Use Development",
    description: "A vibrant urban development combining residential, retail, and public spaces.",
    category: "mixed-use",
    year: 2023,
    location: "Ballari, Karnataka",
    imageUrl: "/images/projects/project3.jpg",
    featured: true,
  },
];

// Sample team data - replace with real data
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Principal Architect",
    role: "Founder & Principal Architect",
    bio: "With extensive experience in architectural design across Karnataka, leading ROKVILLA with a vision for innovative and sustainable architecture.",
    imageUrl: "/images/team/team1.jpg",
    credentials: ["Licensed Architect", "Registered Architect"],
    email: "home@rokvilla.com",
  },
  {
    id: "2",
    name: "Senior Architect",
    role: "Senior Design Architect",
    bio: "Specializes in residential and commercial design with a focus on sustainable building practices across Karnataka.",
    imageUrl: "/images/team/team2.jpg",
    credentials: ["Licensed Architect"],
    email: "home@rokvilla.com",
  },
];

// Sample testimonials - replace with real data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "John Smith",
    projectName: "Modern Villa Residence",
    quote: "The team exceeded our expectations in every way. Their attention to detail and creative vision transformed our dream home into reality.",
    rating: 5,
  },
  {
    id: "2",
    clientName: "Jane Doe",
    projectName: "Corporate Headquarters",
    quote: "Professional, innovative, and a pleasure to work with. Our new headquarters has become a landmark in the city.",
    rating: 5,
  },
  {
    id: "3",
    clientName: "Michael Johnson",
    projectName: "Urban Development",
    quote: "Their sustainable approach and modern design sensibility made them the perfect choice for our project.",
    rating: 5,
  },
];

// Services offered - ROKVILLA's actual services
export const services: Service[] = [
  {
    id: "1",
    title: "Home Design",
    description: "Complete residential architectural design services tailored to your lifestyle and needs.",
    icon: "🏠",
    features: [
      "Custom Home Design",
      "Floor Plan Development",
      "3D Visualization",
      "Design Consultation",
    ],
  },
  {
    id: "2",
    title: "Home Construction",
    description: "End-to-end construction services with quality craftsmanship and timely delivery.",
    icon: "🏗️",
    features: [
      "Complete Construction",
      "Quality Materials",
      "Skilled Workers",
      "Project Management",
    ],
  },
  {
    id: "3",
    title: "Interior Design",
    description: "Beautiful and functional interior spaces that reflect your style.",
    icon: "🪑",
    features: [
      "Space Planning",
      "Material Selection",
      "Furniture Design",
      "Lighting Design",
    ],
  },
  {
    id: "4",
    title: "Structural Engineering",
    description: "Safe and efficient structural design for your home.",
    icon: "⚙️",
    features: [
      "Structural Analysis",
      "Foundation Design",
      "Load Calculations",
      "Safety Compliance",
    ],
  },
  {
    id: "5",
    title: "Home Furnishing",
    description: "Complete furnishing solutions to make your house a home.",
    icon: "🛋️",
    features: [
      "Furniture Selection",
      "Décor Planning",
      "Complete Setup",
      "Turnkey Solutions",
    ],
  },
  {
    id: "6",
    title: "Design & Build",
    description: "Integrated design and construction service for a seamless experience.",
    icon: "🔨",
    features: [
      "One-Stop Solution",
      "Design to Construction",
      "Cost Effective",
      "Time Saving",
    ],
  },
];

