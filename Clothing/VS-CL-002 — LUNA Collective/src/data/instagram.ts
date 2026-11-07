import { InstagramPost } from '../types';

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
    likes: 1420,
    comments: 64,
    caption: 'Sun-dappled afternoons in pure European flax linen. The Mira Midi dress worn by @tanya.sen in Goa. 🌾✨ #LUNACollective #MadeToFeelBeautiful #SlowFashion',
    handle: '@tanya.sen',
    taggedProduct: {
      id: 'luna-01',
      name: 'Mira Tiered Linen Midi Dress',
      price: 4450
    }
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    likes: 2890,
    comments: 118,
    caption: 'Gold thread nuances and whisper-light Chanderi silk. Introducing our festive Noor edit in antique blush. #FestiveSilhouettes #ArtisanalLuxury #ChanderiLove',
    handle: '@luna.collective',
    taggedProduct: {
      id: 'luna-02',
      name: 'Aarya Chanderi Angrakha Kurta Set',
      price: 6850
    }
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    likes: 1845,
    comments: 72,
    caption: 'Separates that move with your rhythm. In the studio styling the Siena Kimono set. Swipe to see the fabric drape in motion. #EffortlessLuxury #Resortwear',
    handle: '@neha_styling',
    taggedProduct: {
      id: 'luna-03',
      name: 'Siena Relaxed Linen-Silk Co-ord Set',
      price: 5290
    }
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    likes: 3120,
    comments: 140,
    caption: 'Artisanal organic forms. Baroque freshwater pearls set in 18k hammered gold by our Jaipur atelier. #ArtisanJewelry #BaroquePearls #ModernHeirlooms',
    handle: '@luna.collective',
    taggedProduct: {
      id: 'luna-08',
      name: 'Tara Hammered Gold & Pearl Drop Earrings',
      price: 1850
    }
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=800&q=80',
    likes: 2410,
    comments: 93,
    caption: 'The art of the bias cut. Our Elysian slip gown cascades in heavy modal satin. Made for evening starlight. 🌙 #LUNAEvening #SilkSlip #ContemporaryFeminine',
    handle: '@simran.kapoor',
    taggedProduct: {
      id: 'luna-05',
      name: 'Elysian Draped Satin Maxi Dress',
      price: 4890
    }
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    likes: 1950,
    comments: 88,
    caption: 'Tactile craft in natural vegetable-tanned leather. The Rhea Baguette is back in stock in limited quantities. #LeatherCraft #HandwovenBag #EverydayLuxe',
    handle: '@luna.collective',
    taggedProduct: {
      id: 'luna-11',
      name: 'Rhea Woven Leather Shoulder Baguette',
      price: 3650
    }
  }
];
