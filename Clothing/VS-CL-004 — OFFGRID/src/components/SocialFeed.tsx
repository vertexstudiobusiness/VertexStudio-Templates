import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './BrandIcons';

export const SocialFeed: React.FC = () => {
  const posts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      caption: 'Drop 004 cut and sew samples fresh off the press in Coimbatore. 300 GSM combed cotton.',
      isVideo: true,
      views: '42.8K'
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop',
      caption: 'Fidlock ankle adjusters on the Tactical Ripstop Modular Cargo. Test at Carter Road.',
      isVideo: false,
      views: '19.4K'
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
      caption: 'Subterra flight nylon bomber worn in Tokyo rain. Zero water penetration.',
      isVideo: true,
      views: '68.2K'
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop',
      caption: 'Wide parachute pant stacking over Salomon ACS Pro. Engineered volume.',
      isVideo: false,
      views: '31.1K'
    },
    {
      id: 'ig-5',
      image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop',
      caption: 'Close-up on 450 GSM loopback French Terry. No synthetic fleece lining.',
      isVideo: true,
      views: '54.7K'
    },
    {
      id: 'ig-6',
      image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=800&auto=format&fit=crop',
      caption: 'Ballistic Cordura Chest Rig loaded with daily carry essentials.',
      isVideo: false,
      views: '24.9K'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-black border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12 pb-4 border-b border-brand-border">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-xs text-brand-orange uppercase tracking-widest font-bold mb-1">
              <InstagramIcon className="w-4 h-4" />
              <span>LIVE FREQUENCY // SOCIAL TRANSMISSION</span>
            </div>
            <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-brand-offwhite uppercase tracking-tight">
              INSIDE THE <span className="text-stroke">UNDERGROUND</span>
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold text-brand-orange hover:text-white uppercase transition-colors min-h-[36px]"
          >
            <span>FOLLOW @OFFGRID.INDIA</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Tile Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square bg-neutral-900 border border-brand-border hover:border-brand-orange overflow-hidden block transition-colors"
            >
              <img
                src={post.image}
                alt="OFFGRID Instagram post"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
                <div className="flex justify-between items-center text-white">
                  {post.isVideo ? (
                    <Play className="w-4 h-4 text-brand-orange fill-brand-orange" />
                  ) : (
                    <InstagramIcon className="w-4 h-4 text-brand-orange" />
                  )}
                  <span className="font-mono text-[9px] text-brand-concrete">
                    {post.views}
                  </span>
                </div>

                <p className="font-mono text-[10px] text-white line-clamp-3 leading-tight">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
