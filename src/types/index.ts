export interface Product {
  id: number;
  name: string;
  category: 'granito' | 'comedor' | 'baño' | 'cerámica';
  description: string;
  features: string[];
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}