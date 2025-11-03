// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  year: number;
  location: string;
  imageUrl: string;
  videoUrl?: string;
  featured?: boolean;
}

export type ProjectCategory = 
  | "residential" 
  | "commercial" 
  | "institutional" 
  | "hospitality" 
  | "mixed-use";

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  credentials?: string[];
  email?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  clientName: string;
  projectName: string;
  quote: string;
  imageUrl?: string;
  rating?: number;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  projectType?: string;
}

