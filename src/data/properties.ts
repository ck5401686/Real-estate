export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  location: string;
  city: 'Mumbai' | 'Delhi' | 'Bangalore' | 'Pune' | 'Hyderabad' | 'Patna';
  neighborhood: string;
  price: string;
  priceNumeric: number; // in Cr for filtering
  type: 'Penthouse' | 'Villa' | 'Sky Residence' | 'Duplex' | 'Estate' | 'Mansion';
  status: 'For Sale' | 'For Rent';
  bhk: number;
  bathrooms: number;
  area: string; // e.g. "4,850 sq.ft"
  areaNumeric: number;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  amenities: string[];
  floorPlan: {
    levels: string;
    specs: { label: string; value: string }[];
    svgType: 'penthouse' | 'villa' | 'estate';
  };
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    avatar: string;
  };
  nearby: { place: string; distance: string; type: string }[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    slug: 'the-grand-residence-worli',
    title: 'The Grand Residence',
    tagline: 'Panoramic Arabian Sea Vista & Private Infinity Plunge Pool',
    location: 'Worli Sea Face, Mumbai',
    city: 'Mumbai',
    neighborhood: 'Worli',
    price: '₹ 28.5 Cr',
    priceNumeric: 28.5,
    type: 'Sky Residence',
    status: 'For Sale',
    bhk: 5,
    bathrooms: 6,
    area: '6,400 sq.ft',
    areaNumeric: 6400,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Commanding uninterrupted 270-degree horizons over the Arabian Sea, The Grand Residence at Worli Sea Face is an architectural triumph of quiet luxury. Designed with travertine stone slabs, custom Italian bronze millwork, and double-height ceiling voids, this residence features direct private elevator access, temperature-regulated wine vault, and a cantilevered open-air terrace with heated plunge pool.',
    features: [
      '270° Unobstructed Arabian Sea & Sealink Panorama',
      'Private High-Speed Biometric Elevator Direct to Foyer',
      'Master Wing with Dual En-Suite Bathrooms & Dressing Suites',
      'Automated Lutron Architectural Lighting & Bang & Olufsen Acoustics',
      '1,200 sq.ft Double-Height Living Pavilion'
    ],
    amenities: [
      'Private Heated Infinity Plunge Pool',
      'Valet Concierge & 4 Dedicated Stacks',
      'Sommelier Wine Cellar',
      'Private Spa & Cedar Sauna',
      'Residents Private Helipad Access',
      'Clubhouse & Private Screening Room'
    ],
    floorPlan: {
      levels: 'Level 42 & 43 Duplex Penthouse',
      specs: [
        { label: 'Living & Dining Gallery', value: '42 ft x 26 ft' },
        { label: 'Master Sanctuary', value: '28 ft x 22 ft' },
        { label: 'Sunset Deck', value: '38 ft x 14 ft' },
        { label: 'Chef Show Kitchen', value: '20 ft x 16 ft' }
      ],
      svgType: 'penthouse'
    },
    agent: {
      name: 'Aditya Singhania',
      title: 'Senior Managing Partner — Private Estates',
      phone: '+91 98201 44882',
      email: 'aditya.singhania@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Bandra-Worli Sea Link', distance: '1.2 km', type: 'Connectivity' },
      { place: 'The St. Regis Mumbai', distance: '2.5 km', type: 'Hospitality' },
      { place: 'Palladium Luxury Mall', distance: '2.8 km', type: 'Retail' },
      { place: 'Bombay Gymkhana', distance: '7.4 km', type: 'Private Clubs' }
    ]
  },
  {
    id: 'prop-2',
    slug: 'the-aranya-pavilion-golf-links',
    title: 'The Aranya Pavilion',
    tagline: 'Private Diplomatic Enclave Sanctuary with Japanese Zen Courtyard',
    location: 'Golf Links, Central Delhi',
    city: 'Delhi',
    neighborhood: 'Lutyens Bungalow Zone',
    price: '₹ 45.0 Cr',
    priceNumeric: 45.0,
    type: 'Villa',
    status: 'For Sale',
    bhk: 6,
    bathrooms: 7,
    area: '9,200 sq.ft',
    areaNumeric: 9200,
    featured: true,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Set amidst the historic foliage of the Golf Links diplomatic enclave, The Aranya Pavilion marries heritage Delhi stone facades with modernist European proportions. Flanked by mature jacaranda groves, the estate features a contemplative central water courtyard, staff quarters for six, underground vehicular vault, and bullet-resistant double glazing.',
    features: [
      'Rare Freehold Lutyens Perimeter Acreage',
      'Reflecting Pools & Rainwater Harvesting Zen Courtyards',
      'Commercial-Grade Poggenpohl Preparation & Catering Kitchen',
      'Dedicated Diplomatic Office & Secure Briefing Lounge',
      'Geothermal Floor Heating & Multi-Zone VRV Air Purification'
    ],
    amenities: [
      'Olympic-Length Heated Lap Pool',
      'Private 6-Car Subterranean Vault',
      'Wellness Pavilion with Turkish Hammam',
      'Perimeter Smart Sensor Security Lattice',
      'Separate Security & Chauffeur Suites'
    ],
    floorPlan: {
      levels: 'Ground + 2 Storey Private Villa',
      specs: [
        { label: 'Grand Atrium', value: '45 ft x 30 ft' },
        { label: 'Diplomatic Formal Salon', value: '35 ft x 24 ft' },
        { label: 'Presidential Suite', value: '30 ft x 25 ft' },
        { label: 'Internal Japanese Garden', value: '40 ft x 40 ft' }
      ],
      svgType: 'villa'
    },
    agent: {
      name: 'Rohit Mathur',
      title: 'Director — Heritage & Prime Residences',
      phone: '+91 98110 55219',
      email: 'rohit.mathur@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Delhi Golf Club', distance: '0.4 km', type: 'Recreation' },
      { place: 'India Gate & Rajpath', distance: '1.8 km', type: 'Landmark' },
      { place: 'Khan Market Boutique Quarter', distance: '0.9 km', type: 'Fine Dining' },
      { place: 'The Oberoi New Delhi', distance: '0.6 km', type: 'Hospitality' }
    ]
  },
  {
    id: 'prop-3',
    slug: 'the-canopy-estate-sadashivanagar',
    title: 'The Canopy Estate',
    tagline: 'Modernist Biophilic Sanctuary with Ancient Banyan Canopy',
    location: 'Sadashivanagar, Bangalore',
    city: 'Bangalore',
    neighborhood: 'Sadashivanagar',
    price: '₹ 19.8 Cr',
    priceNumeric: 19.8,
    type: 'Estate',
    status: 'For Sale',
    bhk: 5,
    bathrooms: 5,
    area: '7,100 sq.ft',
    areaNumeric: 7100,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Echoing Bangalore’s botanical heritage, The Canopy Estate is a masterwork of exposed board-formed concrete, Teak louver screens, and indoor-outdoor glass thresholds. Positioned in prestigious Sadashivanagar, this urban sanctuary features soaring ceilings, rooftop stargazing observatory deck, and an organic infinity pool nestled beneath century-old banyan canopies.',
    features: [
      'Architectural Concrete & Reclaimed Burma Teak Millwork',
      'Floor-to-Ceiling Thermal Insulated Glass Sliders',
      'Rooftop Stargazing Lounge & Cocktail Bar',
      'Integrated Solar Microgrid with 100% Off-Grid Capability',
      'Central Skylit Courtyard with Living Vertical Moss Walls'
    ],
    amenities: [
      'Chlorine-Free Natural Filtration Pool',
      'Private 8-Seat Acoustic Dolby Atmos Theatre',
      'Personal Yoga & Meditation Pavilion',
      'EV Supercharging Garage for 4 Vehicles',
      'Landscape Irrigation Fed by Natural Rainwells'
    ],
    floorPlan: {
      levels: 'Triplex Architectural Residence',
      specs: [
        { label: 'Great Room & Lanai', value: '40 ft x 28 ft' },
        { label: 'Master Courtyard Suite', value: '26 ft x 22 ft' },
        { label: 'Rooftop Observatory', value: '32 ft x 18 ft' },
        { label: 'Library & Study', value: '18 ft x 16 ft' }
      ],
      svgType: 'estate'
    },
    agent: {
      name: 'Nandita Rao',
      title: 'Principal Associate — South India Estates',
      phone: '+91 98450 77123',
      email: 'nandita.rao@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Sankey Tank Lakeside Promenade', distance: '0.8 km', type: 'Nature' },
      { place: 'Bangalore Palace Grounds', distance: '2.1 km', type: 'Heritage' },
      { place: 'Four Seasons Hotel Bangalore', distance: '3.4 km', type: 'Hospitality' },
      { place: 'Kempegowda International Airport Access', distance: '28 km', type: 'Transit' }
    ]
  },
  {
    id: 'prop-4',
    slug: 'the-monolith-sky-villa-jubilee-hills',
    title: 'The Monolith Sky Villa',
    tagline: 'Sculptural Cantilevered Penthouse with Panoramic Ridge Views',
    location: 'Road No. 36, Jubilee Hills, Hyderabad',
    city: 'Hyderabad',
    neighborhood: 'Jubilee Hills',
    price: '₹ 22.0 Cr',
    priceNumeric: 22.0,
    type: 'Penthouse',
    status: 'For Sale',
    bhk: 4,
    bathrooms: 5,
    area: '5,800 sq.ft',
    areaNumeric: 5800,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Perched high upon the granite ridge of Jubilee Hills, The Monolith is an ultra-rare penthouse of monumental stone, dark oak timber, and glass. Feauturing custom bronze fluted panels, a temperature-controlled terrace plunge pool, and floor-to-ceiling glass wrapping around the City of Pearls.',
    features: [
      'Unobstructed Durgam Cheruvu & City Skyline Views',
      'Private Sky Terrace with Heated Plunge Pool & Barbecue Station',
      'Bespoke Poliform Wardrobes & Dornbracht Bath Fixtures',
      'Acoustically Isolated Music & Listening Salon',
      'Dual Key Elevator Security System'
    ],
    amenities: [
      'Private Infinity Deck',
      'Bespoke Fitness Studio',
      'Cigar & Whiskey Tasting Lounge',
      'Concierge & Butler On-Call Service',
      'Dedicated Chauffeur Rest Lounge'
    ],
    floorPlan: {
      levels: 'Single-Floor Penthouse Suite',
      specs: [
        { label: 'Living Pavilion', value: '38 ft x 24 ft' },
        { label: 'Master Sanctuary', value: '25 ft x 20 ft' },
        { label: 'Sky Deck', value: '30 ft x 15 ft' },
        { label: 'Gourmet Kitchen', value: '18 ft x 14 ft' }
      ],
      svgType: 'penthouse'
    },
    agent: {
      name: 'Kavita Reddy',
      title: 'Associate Director — Luxury Acquisitions',
      phone: '+91 99890 33411',
      email: 'kavita.reddy@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Jubilee Hills International Centre', distance: '1.1 km', type: 'Private Clubs' },
      { place: 'KBR National Park', distance: '1.7 km', type: 'Greenery' },
      { place: 'Taj Krishna Banjara Hills', distance: '4.2 km', type: 'Hospitality' },
      { place: 'HITEC City Tech District', distance: '4.8 km', type: 'Business' }
    ]
  },
  {
    id: 'prop-5',
    slug: 'koregaon-park-botanical-manor',
    title: 'Koregaon Botanical Manor',
    tagline: 'Heritage Banyan Lane Residence with Italian Marble Portico',
    location: 'Lane 1, Koregaon Park, Pune',
    city: 'Pune',
    neighborhood: 'Koregaon Park',
    price: '₹ 16.5 Cr',
    priceNumeric: 16.5,
    type: 'Villa',
    status: 'For Sale',
    bhk: 4,
    bathrooms: 5,
    area: '5,200 sq.ft',
    areaNumeric: 5200,
    featured: false,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Tucked into the celebrated tree-canopied lanes of Koregaon Park, this neoclassical villa exudes understated Continental grace. Featuring Statuario marble colonnades, fragrant frangipani lawns, a temperature-controlled subterranean wine cellar, and artisan wrought-iron conservatory.',
    features: [
      'Private 0.4 Acre Landscaped Courtyard with Fountain',
      'Custom Artisan Iron & Glass French Windows',
      'Open-Air Rooftop Pergola with Italian Pizza Oven',
      'Smart Home Automation by Control4',
      'Security Post & Automated Cast Iron Gates'
    ],
    amenities: [
      'Private Heated Lap Pool with Waterfall Wall',
      'Outdoor Pavilion for Al Fresco Entertaining',
      'Artisan Wine Tasting Cellar',
      'Staff Annexe with Independent Kitchen',
      '3-Car Covered Portico'
    ],
    floorPlan: {
      levels: 'Two Storey Villa + Terrace',
      specs: [
        { label: 'Grand Living Hall', value: '34 ft x 22 ft' },
        { label: 'Dining Conservatory', value: '20 ft x 18 ft' },
        { label: 'Master Suite', value: '24 ft x 20 ft' },
        { label: 'Guest Villa Wing', value: '22 ft x 16 ft' }
      ],
      svgType: 'villa'
    },
    agent: {
      name: 'Aditya Singhania',
      title: 'Senior Managing Partner',
      phone: '+91 98201 44882',
      email: 'aditya.singhania@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Osho International Resort', distance: '0.4 km', type: 'Wellness' },
      { place: 'German Bakery & Koregaon Quarter', distance: '0.6 km', type: 'Dining' },
      { place: 'The Westin Pune', distance: '1.9 km', type: 'Hospitality' },
      { place: 'Pune Golf Club', distance: '2.8 km', type: 'Recreation' }
    ]
  },
  {
    id: 'prop-6',
    slug: 'ganges-heritage-residence-patna',
    title: 'The Maurya Terraces',
    tagline: 'Regal Riverside Duplex Overlooking the Sacred Ganges',
    location: 'Bailey Road & Ganga Path, Patna',
    city: 'Patna',
    neighborhood: 'Bailey Road Corridors',
    price: '₹ 8.5 Cr',
    priceNumeric: 8.5,
    type: 'Duplex',
    status: 'For Sale',
    bhk: 4,
    bathrooms: 4,
    area: '4,400 sq.ft',
    areaNumeric: 4400,
    featured: true,
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Setting a new benchmark for Eastern India luxury living, The Maurya Terraces commands sweeping views across the historic Ganges. Built with bronze detailing, soundproof Belgian glazing, double-height entertaining lounge, and private riverside deck.',
    features: [
      'Unbroken Riverside Vistas across Ganga Riverfront Promenade',
      'Double-Height Glass Façade with Automated Roman Blinds',
      'Custom Italian Teak Wood Joinery & Brass Hardware',
      'Private High-Speed Elevator with Access Keycard',
      'Dedicated Housekeeping & Chauffeur Quarters'
    ],
    amenities: [
      'Infinity Pool Overlooking River Promenade',
      'Clubhouse with Squash Court & Sauna',
      'Private Banquet Lounge & Lawn',
      '3-Tier Smart Security & Gated Perimeter',
      '3 Covered Basement Parking Bays'
    ],
    floorPlan: {
      levels: 'Levels 18 & 19 Duplex Sky Villa',
      specs: [
        { label: 'Panoramic Living Room', value: '32 ft x 22 ft' },
        { label: 'Riverside Master Balcony', value: '28 ft x 12 ft' },
        { label: 'Family Entertainment Den', value: '20 ft x 16 ft' },
        { label: 'Modern Kitchen & Pantry', value: '16 ft x 14 ft' }
      ],
      svgType: 'penthouse'
    },
    agent: {
      name: 'Rohit Mathur',
      title: 'Director — Regional Estates',
      phone: '+91 98110 55219',
      email: 'rohit.mathur@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Marine Drive / Ganga Pathway', distance: '0.3 km', type: 'Promenade' },
      { place: 'Patna Golf Club', distance: '2.5 km', type: 'Recreation' },
      { place: 'Jay Prakash Narayan Airport', distance: '5.2 km', type: 'Transit' },
      { place: 'Patna Museum Heritage Complex', distance: '3.1 km', type: 'Culture' }
    ]
  },
  {
    id: 'prop-7',
    slug: 'the-malabar-crest-mumbai',
    title: 'The Malabar Crest',
    tagline: 'Historic Ridge Villa with Private Garden and Hanging Gardens View',
    location: 'Malabar Hill, Mumbai',
    city: 'Mumbai',
    neighborhood: 'Malabar Hill',
    price: '₹ 58.0 Cr',
    priceNumeric: 58.0,
    type: 'Mansion',
    status: 'For Sale',
    bhk: 6,
    bathrooms: 8,
    area: '10,500 sq.ft',
    areaNumeric: 10500,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'An irreplaceable jewel on South Mumbai’s most storied ridge. Surrounded by mature banyans and Victorian lamp posts, The Malabar Crest offers expansive manicured lawns, Olympic-grade wine cellar, and sunset views over Back Bay.',
    features: [
      'Historic South Mumbai Ridge Heritage Plot',
      'Rare Manicured Private English Garden with Gazebo',
      'Private Swimming Pool with Heated Travertine Deck',
      'Security Quarters & 6-Car Covered Garage',
      'Double Master Wings with Carrera Marble Bathrooms'
    ],
    amenities: [
      'Private Swimming Pool',
      'Full-Service Gym & Pilates Studio',
      'Wine Tasting Room',
      '24/7 Diplomatic-Grade Security',
      'Private Elevator'
    ],
    floorPlan: {
      levels: 'Ground + 3 Levels Private Mansion',
      specs: [
        { label: 'Grand Banquet Ballroom', value: '48 ft x 30 ft' },
        { label: 'Presidential Master Suite', value: '32 ft x 24 ft' },
        { label: 'Verandah & Lawns', value: '60 ft x 40 ft' },
        { label: 'Library & Billiards Room', value: '28 ft x 20 ft' }
      ],
      svgType: 'estate'
    },
    agent: {
      name: 'Aditya Singhania',
      title: 'Senior Managing Partner',
      phone: '+91 98201 44882',
      email: 'aditya.singhania@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'Hanging Gardens & Kamala Nehru Park', distance: '0.4 km', type: 'Park' },
      { place: 'Governor House Promenade', distance: '0.8 km', type: 'Scenic' },
      { place: 'Breach Candy Club', distance: '1.9 km', type: 'Club' },
      { place: 'Chhatrapati Shivaji Terminus', distance: '6.5 km', type: 'Transit' }
    ]
  },
  {
    id: 'prop-8',
    slug: 'the-chattarpur-glass-manor',
    title: 'The Glasshouse Sanctuary',
    tagline: 'Modernist Steel & Glass Farmhouse Estate on 2 Private Acres',
    location: 'DLF Chattarpur Farms, South Delhi',
    city: 'Delhi',
    neighborhood: 'Chattarpur Farms',
    price: '₹ 38.0 Cr',
    priceNumeric: 38.0,
    type: 'Estate',
    status: 'For Sale',
    bhk: 5,
    bathrooms: 6,
    area: '8,800 sq.ft',
    areaNumeric: 8800,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Enveloped by two acres of whispering bamboo and undulating green lawns, The Glasshouse Sanctuary balances raw architectural geometry with warmth. Includes an all-glass pavilion, heated saltwater pool, equestrian stables, and an organic vegetable micro-farm.',
    features: [
      '2 Acres of Freehold Gated Farmhouse Land',
      'Floor-to-Ceiling Thermal Insulated Glass Facades',
      'Heated Saltwater Infinity Pool with Poolside Cabana',
      'Organic Orchard & Olive Groves',
      'Separate 4-Bedroom Staff & Security Quarters'
    ],
    amenities: [
      'Private Tennis Court',
      'Subterranean Cinema & Gaming Den',
      'Finnish Sauna & Cold Plunge Tub',
      'Backup Power Generator 100kW',
      '6-Car Enclosed Garage'
    ],
    floorPlan: {
      levels: 'Single Level Sprawling Villa Estate',
      specs: [
        { label: 'Glass Pavilion Living', value: '50 ft x 32 ft' },
        { label: 'Central Kitchen & Bar', value: '26 ft x 20 ft' },
        { label: 'Master Suite & Dressing', value: '30 ft x 24 ft' },
        { label: 'Pool Deck & Cabana', value: '60 ft x 25 ft' }
      ],
      svgType: 'estate'
    },
    agent: {
      name: 'Rohit Mathur',
      title: 'Director — Heritage & Prime Residences',
      phone: '+91 98110 55219',
      email: 'rohit.mathur@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'The Claridges Nabha Estate', distance: '2.5 km', type: 'Hospitality' },
      { place: 'Qutub Minar & Mehrauli Heritage', distance: '5.2 km', type: 'Culture' },
      { place: 'Indira Gandhi International Airport', distance: '14 km', type: 'Transit' },
      { place: 'Vasant Kunj Luxury Malls', distance: '8.0 km', type: 'Retail' }
    ]
  },
  {
    id: 'prop-9',
    slug: 'the-lavelle-penthouse-bangalore',
    title: 'The Lavelle Sky Duplex',
    tagline: 'Quiet Luxury Duplex in Bangalore’s Ultra-Exclusive CBD',
    location: 'Lavelle Road, Bangalore',
    city: 'Bangalore',
    neighborhood: 'Lavelle Road',
    price: '₹ 15.2 Cr',
    priceNumeric: 15.2,
    type: 'Penthouse',
    status: 'For Sale',
    bhk: 4,
    bathrooms: 4,
    area: '4,650 sq.ft',
    areaNumeric: 4650,
    featured: false,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Situated on Lavelle Road steps away from UB City and Cubbon Park, this duplex penthouse is clad in French oak, brushed bronze, and fluted glass. Features a private landscaped sky lounge with automated misting and unobstructed views of Cubbon Park’s green canopy.',
    features: [
      'Unbroken Canopy Views of Cubbon Park',
      'Private Rooftop Jacuzzi & Cocktail Bar',
      'Sub-Zero & Wolf Integrated Kitchen',
      'High-Performance Acoustic Glazing',
      'Direct Private Keycard Elevator'
    ],
    amenities: [
      'Skyline Infinity Pool',
      'Concierge Service & Valet',
      'Residents Private Lounge',
      'Boutique Gym by Technogym',
      '3 Dedicated Basement Parking Stalls'
    ],
    floorPlan: {
      levels: 'Duplex Penthouse on 21st & 22nd Floors',
      specs: [
        { label: 'Living & Dining Room', value: '36 ft x 22 ft' },
        { label: 'Sky Terrace', value: '28 ft x 14 ft' },
        { label: 'Master Suite', value: '24 ft x 18 ft' },
        { label: 'Guest Suite', value: '18 ft x 16 ft' }
      ],
      svgType: 'penthouse'
    },
    agent: {
      name: 'Nandita Rao',
      title: 'Principal Associate',
      phone: '+91 98450 77123',
      email: 'nandita.rao@maison-estates.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    nearby: [
      { place: 'UB City Luxury Collection', distance: '0.3 km', type: 'Retail & Dining' },
      { place: 'Cubbon Park Bamboo Groves', distance: '0.4 km', type: 'Park' },
      { place: 'Bangalore Club', distance: '0.9 km', type: 'Private Clubs' },
      { place: 'MG Road Metro Station', distance: '1.2 km', type: 'Transit' }
    ]
  }
];
