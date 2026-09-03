export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  developer: string;
  architect: string;
  location: string;
  city: string;
  startingPrice: string;
  startingPriceNumeric: number;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  possession: string;
  units: string;
  configuration: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  completionPercent?: number;
}

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-grand-residence',
    name: 'The Grand Residence',
    tagline: 'Monumental Waterfront Architecture by Foster & Partners',
    developer: 'MAISON & Lodha Luxury Private Ventures',
    architect: 'Foster & Partners, London',
    location: 'Worli Sea Face, Mumbai',
    city: 'Mumbai',
    startingPrice: '₹ 24.5 Cr',
    startingPriceNumeric: 24.5,
    status: 'Ongoing',
    possession: 'Q4 2026',
    units: '36 Bespoke Sky Mansions',
    configuration: '4 & 5 BHK Duplexes & Penthouses',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Rising gracefully over the Arabian Sea, The Grand Residence is a masterwork of contemporary sculptural architecture. Featuring uninterrupted marine views, bronze-accented brise-soleil screens, cantilevered swimming pools on alternate floors, and seven-star hospitality curated by Saint Amand.',
    highlights: [
      'Architectural master design by Pritzker Prize laureates',
      'Double-height ceiling voids with floor-to-ceiling Low-E structural glass',
      '270° marine panoramic decks cantilevered over the coastline',
      'Single residence per floor for ultimate privacy and discretion'
    ],
    amenities: [
      'Private 40-meter Olympic Lap Pool',
      'Concierge Helipad on Rooftop',
      'Sommelier Cava & Private Dining Salon',
      'Holistic Ayurvedic & Hydrotherapy Spa',
      'Soundproof Screening Theatre & Cigar Lounge'
    ],
    completionPercent: 78
  },
  {
    id: 'proj-2',
    slug: 'lumina-sky-mansions',
    name: 'Lumina Sky Mansions',
    tagline: 'The Zenith of Vertical Villa Living in Bangalore',
    developer: 'MAISON Prime Developments & Embassy One',
    architect: 'WOHA Architects, Singapore',
    location: 'Bellary Road / Hebbal, Bangalore',
    city: 'Bangalore',
    startingPrice: '₹ 14.8 Cr',
    startingPriceNumeric: 14.8,
    status: 'Ongoing',
    possession: 'Q2 2027',
    units: '48 Sky Residences',
    configuration: '3, 4 & 5 BHK Sky Mansions',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'A revolutionary biophilic tower blending towering hanging gardens with sky villa proportions. Every residence features an expansive 800 sq.ft private garden terrace with deep planting beds and private plunge pool.',
    highlights: [
      'Vertical rainforest gardens engineered by renowned landscape artists',
      'Net-Zero Carbon certified building with rainwater harvesting',
      'Private biometric high-speed smart elevators with zero-touch call',
      'Triple-height podium lobby with curated museum-grade sculptures'
    ],
    amenities: [
      'Level 50 Cloud Club & Cocktail Bar',
      'Indoor Temperature Controlled Wave Pool',
      'Squash & Virtual Golf Simulator Suites',
      'Pet Spa & Grooming Lounge',
      'EV Supercharging for Every Parking Bay'
    ],
    completionPercent: 55
  },
  {
    id: 'proj-3',
    slug: 'the-aranya-gardens-delhi',
    name: 'The Aranya Enclave',
    tagline: 'Gated Diplomatic Sanctuary of Limited Edition Villas',
    developer: 'MAISON Capital & Max Estates',
    architect: 'Morphogenesis',
    location: 'Prithviraj Road, Lutyens Zone, Delhi',
    city: 'Delhi',
    startingPrice: '₹ 42.0 Cr',
    startingPriceNumeric: 42.0,
    status: 'Upcoming',
    possession: 'Q1 2028',
    units: '14 Private Estate Villas',
    configuration: '5 & 6 BHK Private Compound Mansions',
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'An unprecedented collection of only 14 standalone private estate villas in Delhi’s most coveted historic district. Clad in Dholpur sandstone and teak, surrounded by centenary trees, each residence includes private security cordons, banquet halls, and subterranean wellness vaults.',
    highlights: [
      'Ultra-exclusive 14-villa gated compound with embassy-grade security',
      '10,000 to 14,000 sq.ft expansive private footprints',
      'Private 4-car subterranean vaults per villa',
      'Dedicated staff quarters for 8 people per home'
    ],
    amenities: [
      'Private Club & Cigar Parlor for Estate Owners',
      'Chamberlain & White-Glove Butler Fleet',
      'Diplomatic Security Command Centre',
      'Private Landscaped Walking Arbors'
    ],
    completionPercent: 15
  },
  {
    id: 'proj-4',
    slug: 'the-courtyard-residences-pune',
    name: 'The Courtyard Residences',
    tagline: 'Modernist Pavilions in the Heart of Koregaon Park',
    developer: 'MAISON Heritage & Panchshil Realty',
    architect: 'Matteo Thun & Partners, Milan',
    location: 'North Main Road, Koregaon Park, Pune',
    city: 'Pune',
    startingPrice: '₹ 11.5 Cr',
    startingPriceNumeric: 11.5,
    status: 'Completed',
    possession: 'Ready for Immediate Possession',
    units: '28 Handcrafted Residences',
    configuration: '3 & 4 BHK Garden Apartments & Penthouses',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Completed in early 2025, The Courtyard Residences celebrates European minimalism under Maharashtra’s tranquil canopy. Awarded Best Ultra-Luxury Boutique Development by Architectural Digest, all homes are fully handed over with bespoke Italian kitchens.',
    highlights: [
      'Award-winning architectural project, 100% completed & occupied',
      'Oversized wraparound verandas with teak sun-breakers',
      'Natural granite stone reflecting ponds throughout',
      'Fully outfitted with Boffi kitchens & Poliform wardrobes'
    ],
    amenities: [
      'Heated 25m Saltwater Lap Pool',
      'Private Wine Cellar & Sommelier Tasting Room',
      'Art Gallery Foyer with Rotating Exhibitions',
      'Dedicated Chauffeurs Lounge & Rest Area'
    ],
    completionPercent: 100
  },
  {
    id: 'proj-5',
    slug: 'hyderabad-boulder-hills-villas',
    name: 'The Granite Terraces',
    tagline: 'Cliffside Architectural Villas in Gachibowli',
    developer: 'MAISON Infra & My Home Group',
    architect: 'Sanjay Puri Architects',
    location: 'Gachibowli / Financial District, Hyderabad',
    city: 'Hyderabad',
    startingPrice: '₹ 16.5 Cr',
    startingPriceNumeric: 16.5,
    status: 'Ongoing',
    possession: 'Q3 2026',
    units: '32 Cliffside Villas',
    configuration: '4 & 5 BHK Independent Hillside Villas',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Sculpted into Hyderabad’s iconic natural rock boulders, The Granite Terraces offers cantilevered glass living pavilions overlooking the city skyline. Designed with zero carbon footprint and passive solar architecture.',
    highlights: [
      'Bold cantilevered glass architectural forms',
      'Natural rock formation preservation within living spaces',
      'Private infinity pools spilling toward sunset horizons',
      'Complete home automation with gesture & voice integration'
    ],
    amenities: [
      'Cliff-Edge Infinity Swimming Pool',
      'Rock Garden & Zen Meditation Arbors',
      'Private Wellness Spa with Steam & Sauna',
      'Boutique Cafe & Library Lounge'
    ],
    completionPercent: 70
  },
  {
    id: 'proj-6',
    slug: 'the-ganga-crest-patna',
    name: 'The Ganga Crest',
    tagline: 'Iconic Waterfront Tower on Patna Marine Drive',
    developer: 'MAISON Capital & Patliputra Luxury Living',
    architect: 'Hafeez Contractor',
    location: 'Loknayak Ganga Path, Patna',
    city: 'Patna',
    startingPrice: '₹ 6.8 Cr',
    startingPriceNumeric: 6.8,
    status: 'Upcoming',
    possession: 'Q2 2027',
    units: '40 Riverside Apartments',
    configuration: '3 & 4 BHK Sky Condominiums',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'A 32-storey gleaming bronze landmark introducing high-altitude luxury living to Bihar’s capital. Featuring sky terraces facing the serene riverbed, full-service concierge, and an exclusive clubhouse.',
    highlights: [
      'First luxury branded residential tower in Eastern India',
      'All apartments boast direct panoramic views of the sacred Ganges',
      'High-speed Otis elevators & 100% DG power backup',
      'Earthquake-resistant Zone IV structural engineering'
    ],
    amenities: [
      'Sky Lounge on 30th Floor',
      'Infinity Pool & Sun Deck',
      'Multi-cuisine Banquet & Dining Hall',
      'Indoor Badminton Court & Gym'
    ],
    completionPercent: 20
  }
];
