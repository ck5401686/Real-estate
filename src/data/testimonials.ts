export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  property: string;
  quote: string;
  rating: number;
  avatar: string;
  year: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Vikramaditya Singhal',
    role: 'Managing Director, Horizon Capital',
    city: 'Mumbai',
    property: 'Worli Sea Face Sky Residence',
    quote: 'MAISON secured our sea-facing duplex off-market with complete discretion. The architectural curation and private walkthrough was unlike anything available in standard Indian real estate.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    year: '2025'
  },
  {
    id: 't-2',
    name: 'Dr. Ananya Roy-Kapoor',
    role: 'Founder, Biosphere Therapeutics',
    city: 'Delhi',
    property: 'Golf Links Heritage Pavilion',
    quote: 'Finding a freehold plot in Golf Links requires diplomatic precision. MAISON’s team handled legal provenance, title diligence, and heritage preservation seamlessly.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    year: '2025'
  },
  {
    id: 't-3',
    name: 'Siddharth & Meera Nair',
    role: 'Co-Founders, Verve Cloud Systems',
    city: 'Bangalore',
    property: 'Sadashivanagar Biophilic Estate',
    quote: 'We wanted a home where ancient banyan trees took center stage. The Canopy Estate is a living sculpture. Their post-purchase concierge support is peerless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    year: '2024'
  },
  {
    id: 't-4',
    name: 'Rajeshwar Varma',
    role: 'Chairman, Varma Global Industries',
    city: 'Hyderabad',
    property: 'Jubilee Hills Ridge Villa',
    quote: 'The cliffside cantilever engineering on our residence is extraordinary. MAISON represents the genuine upper echelon of architectural real estate in South Asia.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    year: '2025'
  }
];
