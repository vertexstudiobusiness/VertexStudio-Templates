import type { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Mehta',
    role: 'Specialty Coffee Guild Member & Roaster',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review: 'Easily the most nuanced extraction in the city. Their Ratnagiri Washed V60 reveals an honest jasmine and peach finish that you only find in top roasteries in Tokyo or Melbourne. The barista team genuinely understands TDS and brew curves.',
    favoriteItem: 'Pour-Over V60 Reserve',
    date: '2 weeks ago',
    verifiedVisit: true
  },
  {
    id: 'test-2',
    name: 'Dr. Priya Nambiar',
    role: 'Architect & Urban Designer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review: 'Beyond the world-class coffee, the interior spatial design is exceptional. The balance of warm walnut wood, microcement, and acoustic dampening makes it my daily sanctuary for focused design sketches. The Silk Flat White with oat milk is unmatched.',
    favoriteItem: 'Silk Flat White (Oat)',
    date: '1 month ago',
    verifiedVisit: true
  },
  {
    id: 'test-3',
    name: 'Rohan Deshmukh',
    role: 'Food & Culinary Critic, The Epicure',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review: 'Their 24hr Kyoto Cold Brew over crystal clear hand-cut ice is pure poetry — zero astringency, just ripe dark plum and winey bourbon warmth. Pair it with the molten Basque burnt cheesecake and you will not want to leave.',
    favoriteItem: 'Kyoto Cold Brew + Basque Cheesecake',
    date: '3 weeks ago',
    verifiedVisit: true
  },
  {
    id: 'test-4',
    name: 'Ananya Singhania',
    role: 'Tech Founder & Weekend Regular',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
    review: 'The WhatsApp ordering for curbside takeaway is seamlessly fast when I am heading to meetings. Also, their whole bean subscription has elevated my home espresso setup completely. Consistent roasts every single bag.',
    favoriteItem: 'Spanish Latte & Whole Bean Bags',
    date: 'Just yesterday',
    verifiedVisit: true
  }
];
