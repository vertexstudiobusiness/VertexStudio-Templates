import { CategoryId } from '../types';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  tagline: string;
  image: string;
  productCount: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'dresses',
    name: 'Dresses',
    tagline: 'Flowing linens, tiered silhouettes & liquid satin gowns',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    productCount: 14
  },
  {
    id: 'ethnic-wear',
    name: 'Ethnic Wear',
    tagline: 'Artisanal Chanderi kurtas, anarkalis & festive organza drapes',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    productCount: 18
  },
  {
    id: 'co-ords',
    name: 'Co-ord Sets',
    tagline: 'Tailored kimonos, palazzo duos & mindful loungewear',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    productCount: 12
  },
  {
    id: 'tops',
    name: 'Tops & Blouses',
    tagline: 'Bishop sleeve shirts, cowl tops & hand-woven silk blouses',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
    productCount: 16
  },
  {
    id: 'bottoms',
    name: 'Bottoms',
    tagline: 'Inverted pleat wide-legs, culottes & raw silk cigarette trousers',
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80',
    productCount: 10
  },
  {
    id: 'accessories',
    name: 'Accessories',
    tagline: 'Freshwater baroque pearls, woven leather & Kashmiri cashmere',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    productCount: 15
  }
];
