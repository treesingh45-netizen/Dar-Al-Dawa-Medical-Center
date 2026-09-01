export type PageId = 'home' | 'about' | 'departments' | 'doctors' | 'facilities' | 'blog' | 'contact';

export interface Department {
  id: string;
  name: string;
  category: 'medical' | 'dental' | 'aesthetic' | 'gyn_obs' | 'diabetology' | 'pulmonology' | 'pediatrics' | 'radiology' | 'urology' | 'ent' | 'oncology' | 'anesthesiology';
  icon: string;
  description: string;
  conditions: string[];
  leadDoctor: string;
  leadDoctorRole?: string;
  hours: string;
  image?: string;
}

export interface DoctorSchedule {
  day: string;
  morning: string;
  evening: string;
}

export interface DoctorDegree {
  degree: string;
  institution: string;
  year: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  departmentId: string;
  departmentName: string;
  qualification: string;
  experience: string;
  timings: string;
  phone: string;
  email: string;
  bio: string;
  image: string;
  degrees: DoctorDegree[];
  schedule: DoctorSchedule[];
  specializations: string[];
  featured?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
}

export interface FacilityGalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    specialty: string;
    image: string;
    bio: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  department: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentData {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  department: string;
  doctor?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}
