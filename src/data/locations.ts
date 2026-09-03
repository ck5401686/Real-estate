export interface CityLocation {
  id: string;
  name: 'Mumbai' | 'Delhi' | 'Bangalore' | 'Pune' | 'Hyderabad' | 'Patna';
  slug: string;
  tagline: string;
  propertyCount: number;
  avgPrice: string;
  image: string;
  bannerImage: string;
  description: string;
  keyAreas: string[];
  vibe: string;
  stats: { label: string; value: string }[];
}

export const LOCATIONS: CityLocation[] = [
  {
    id: 'loc-1',
    name: 'Mumbai',
    slug: 'mumbai',
    tagline: 'Coastal Metropolis of Billionaires & Cinematic Horizons',
    propertyCount: 42,
    avgPrice: '₹ 26.5 Cr',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1566552881560-0be86c53210f?auto=format&fit=crop&w=1600&q=85',
    description: 'India’s financial capital and pinnacle of luxury real estate. From historic heritage mansions on Malabar Hill to soaring glass sky villas on Worli Sea Face and breezy penthouses in Bandra West, Mumbai remains the country’s most resilient blue-chip market.',
    keyAreas: ['Worli Sea Face', 'Malabar Hill', 'Bandra West (Pali Hill)', 'Altamount Road', 'Juhu Beachfront'],
    vibe: 'Glamorous, Coastal, High-Octane, Uncompromising',
    stats: [
      { label: 'Active Estates', value: '42' },
      { label: 'Price Index Growth', value: '+14.2% YoY' },
      { label: 'Avg Sea-Facing Rate', value: '₹ 1,15,000 / sq.ft' }
    ]
  },
  {
    id: 'loc-2',
    name: 'Delhi',
    slug: 'delhi',
    tagline: 'Imperial Heritage, Grand Boulevards & Lutyens Acreage',
    propertyCount: 36,
    avgPrice: '₹ 38.0 Cr',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=85',
    description: 'The political heart of India commands unparalleled architectural prestige. Featuring rare colonial-era bungalows in the Lutyens Bungalow Zone, sprawling farmhouses in Chattarpur, and modernist sanctuaries in Golf Links and Jor Bagh.',
    keyAreas: ['Lutyens Bungalow Zone', 'Golf Links', 'Jor Bagh', 'Prithviraj Road', 'Chattarpur Farms'],
    vibe: 'Statesque, Diplomatic, Lush, Historic',
    stats: [
      { label: 'Active Estates', value: '36' },
      { label: 'Prime Acreage Trades', value: '18 Closed in 2025' },
      { label: 'Heritage Cap Rate', value: '4.8%' }
    ]
  },
  {
    id: 'loc-3',
    name: 'Bangalore',
    slug: 'bangalore',
    tagline: 'Biophilic Silicon Valley Estates & Botanical Sanctuaries',
    propertyCount: 31,
    avgPrice: '₹ 17.5 Cr',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=85',
    description: 'Known for its eternal spring climate and tech fortune, Bangalore marries green architecture with sprawling estate layouts. Sadashivanagar, Lavelle Road, and Hebbal host pioneering vertical villas with integrated private pools.',
    keyAreas: ['Sadashivanagar', 'Lavelle Road / UB City', 'Indiranagar Defence Colony', 'Koramangala 3rd Block', 'Hebbal Waterfront'],
    vibe: 'Biophilic, Contemporary, Dynamic, Verdant',
    stats: [
      { label: 'Active Estates', value: '31' },
      { label: 'Green Certification', value: '100% Net-Zero' },
      { label: 'Tech Founder Buyers', value: '62%' }
    ]
  },
  {
    id: 'loc-4',
    name: 'Pune',
    slug: 'pune',
    tagline: 'Continental Charm, Tree-Canopied Lanes & Cultural Grace',
    propertyCount: 24,
    avgPrice: '₹ 12.0 Cr',
    image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1600&q=85',
    description: 'A relaxed cosmopolitan gem framed by the Western Ghats. Koregaon Park and Kalyani Nagar boast stately banyan avenues, European-style courtyard villas, and secluded designer townhouses beloved by industrial leaders.',
    keyAreas: ['Koregaon Park', 'Kalyani Nagar', 'Boat Club Road', 'Bhosale Nagar', 'Baner Hills'],
    vibe: 'Boutique, Intellectual, Relaxed, Verdant',
    stats: [
      { label: 'Active Estates', value: '24' },
      { label: 'Price Value Index', value: 'High Value' },
      { label: 'Average Plot Size', value: '8,500 sq.ft' }
    ]
  },
  {
    id: 'loc-5',
    name: 'Hyderabad',
    slug: 'hyderabad',
    tagline: 'Granite Hills, Royal Nizami Legacies & Monumental Penthouses',
    propertyCount: 28,
    avgPrice: '₹ 18.2 Cr',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1600&q=85',
    description: 'Hyderabad has emerged as India’s fastest-growing luxury enclave. Road No. 36 Jubilee Hills and Banjara Hills feature monumental cliff-edge villas sculpted into natural rock formations with private tennis courts and helipads.',
    keyAreas: ['Jubilee Hills', 'Banjara Hills', 'Gachibowli Financial District', 'Madhapur', 'Gandipet Lakefront'],
    vibe: 'Monumental, Regal, High-Tech, Expansive',
    stats: [
      { label: 'Active Estates', value: '28' },
      { label: 'Sq.Ft Growth Rate', value: '+19.8% YoY' },
      { label: 'Avg Ceiling Height', value: '14.5 ft' }
    ]
  },
  {
    id: 'loc-6',
    name: 'Patna',
    slug: 'patna',
    tagline: 'Historic Ganga Waterfront & Emerging Heritage Duplexes',
    propertyCount: 16,
    avgPrice: '₹ 7.5 Cr',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
    bannerImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=85',
    description: 'Eastern India’s historic powerhouse along the sacred Ganges is witnessing a high-end renaissance. With the new Marine Drive promenade and prime Bailey Road corridors, luxury duplexes and riverfront condominiums are introducing private concierge living.',
    keyAreas: ['Loknayak Ganga Path / Marine Drive', 'Bailey Road Corridor', 'Boring Road Enclave', 'Patliputra Colony'],
    vibe: 'Historic, Emerging, Waterfront, Distinguished',
    stats: [
      { label: 'Active Estates', value: '16' },
      { label: 'Riverfront Appreciation', value: '+22.4% YoY' },
      { label: 'Upcoming High-Rise', value: '8 Projects' }
    ]
  }
];
