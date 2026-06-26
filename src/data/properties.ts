export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  yield: string;
  paymentPlan: string;
  liquidity: string;
  purpose: 'Living' | 'Investment' | 'Capital Preservation';
  image: string;
  description: string;
}

export const propertiesData: Property[] = [
  {
    id: 'prop-1',
    title: 'Waterfront Residences',
    location: 'Dubai Marina',
    type: 'Luxury Apartment',
    price: 'AED 3,200,000',
    yield: '7.8% estimated net yield',
    paymentPlan: '60/40 (40% on completion)',
    liquidity: 'Exceptional (High rental corridor)',
    purpose: 'Investment',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    description: 'Bespoke residences nestled along the marina waterfront, featuring premium finishes, private yacht berths, and floor-to-ceiling windows overlooking the skyline.'
  },
  {
    id: 'prop-2',
    title: 'Branded Residences',
    location: 'Downtown Dubai',
    type: 'Premium Penthouse',
    price: 'AED 8,500,000',
    yield: '6.5% projected yield',
    paymentPlan: '70/30 (30% post-handover)',
    liquidity: 'High (Burj District premium)',
    purpose: 'Capital Preservation',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    description: 'An elite penthouse portfolio with custom interiors designed by a world-renowned fashion house, featuring private elevators and a direct visual axis to the Burj Khalifa.'
  },
  {
    id: 'prop-3',
    title: 'Villa Community',
    location: 'Dubai Hills Estate',
    type: 'Contemporary Villa',
    price: 'AED 12,000,000',
    yield: '5.5% estimated return',
    paymentPlan: '50/50 (50% on completion)',
    liquidity: 'High (Strong secondary demand)',
    purpose: 'Living',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    description: 'A sanctuary of modern minimalist villas overlooking the championship golf course, designed for high-profile families desiring space, security, and elite school accessibility.'
  },
  {
    id: 'prop-4',
    title: 'Beachfront Apartments',
    location: 'Palm Jumeirah',
    type: 'Beachfront Residence',
    price: 'AED 6,700,000',
    yield: '7.2% projected yield',
    paymentPlan: '60/40 (40% on handover)',
    liquidity: 'Exceptional (Finite beach land)',
    purpose: 'Investment', // Also fits living, but let's label it for filters
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-exclusive residences situated on the Palm crescent, with direct private beach access, custom wellness clubs, and scenic sea panoramas.'
  }
];
