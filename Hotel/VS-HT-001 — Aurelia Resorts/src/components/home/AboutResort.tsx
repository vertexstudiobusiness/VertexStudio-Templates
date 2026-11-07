import React from 'react';
import { Sparkles, ShieldCheck, Leaf, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutResort: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Secluded Promontory',
      description: '85 acres of untouched coastal wilderness on Cabo de Rama’s dramatic cliffs, buffered by protected forest.',
    },
    {
      icon: Leaf,
      title: 'Conscious Architecture',
      description: 'Crafted with indigenous laterite stone, reclaimed teak colonnades, and zero-single-use sustainability.',
    },
    {
      icon: Sparkles,
      title: 'Vedic Wellness Heritage',
      description: '10,000 sq. ft. Soma Ayurvedic Sanctuary guided by resident Vaidyas and ancient medicinal healing.',
    },
    {
      icon: ShieldCheck,
      title: 'Intuitive Sanctuary',
      description: 'Discreet five-star butler service offering tailored intimacy, private dining, and bespoke experiences.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f7f4ee] text-[#143d34] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-sans tracking-[0.25em] uppercase text-[#937345] mb-3">
            <span className="w-4 h-[1px] bg-[#c5a880]" />
            <span>The Aurelia Legacy</span>
            <span className="w-4 h-[1px] bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#0b251f] font-light tracking-tight leading-tight">
            Where Seclusion Meets <br className="hidden sm:inline" />
            <span className="italic font-normal">Timeless Elegance</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#1b4d41]/80 font-sans leading-relaxed">
            Perched along the untouched cliffs of South Goa where the Western Ghats slope softly into the Arabian Sea, Aurelia Resorts & Spa was conceived as a sacred refuge from the clamour of the modern world.
          </p>
        </div>

        {/* Editorial Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Atmospheric Images with Overlap */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-4 border-[#fcfbf9]">
                <img
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
                  alt="Aurelia Resorts architectural courtyard and water pond"
                  loading="lazy"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="text-[11px] uppercase tracking-widest text-[#dfbe85]">The Architecture</div>
                  <div className="font-serif text-lg">Hand-Chiseled Laterite & Water Sanctuaries</div>
                </div>
              </div>

              {/* Floating Secondary Image (Offset on Desktop & Tablet) */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-8 z-20 w-52 sm:w-64 rounded-xl overflow-hidden shadow-2xl border-4 border-[#fcfbf9]">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80"
                  alt="Soma Spa restorative treatment"
                  loading="lazy"
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>

              {/* Badge Stamp */}
              <div className="absolute -top-5 -left-4 sm:-left-6 z-20 bg-[#0b251f] text-[#dfbe85] border border-[#c5a880]/40 p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center">
                <span className="font-serif text-2xl font-bold">85</span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-sans text-stone-300">
                  Acres Coastal<br />Preserve
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0b251f] leading-snug">
              "We did not build upon the cliffs; we allowed the sacred rocks, ancient banyans, and whispering tides to sculpt the sanctuary."
            </h3>

            <p className="text-sm sm:text-base text-[#1c5246] font-sans leading-relaxed">
              Every pavilion at Aurelia is discreetly placed to protect the ancient flora and provide total visual privacy. The sounds of breaking surf, frangipani blossoms drifting on warm winds, and the golden glow of the Arabian sunset become your companions.
            </p>

            <blockquote className="border-l-2 border-[#c5a880] pl-4 italic text-sm text-[#143d34]/90 font-serif">
              "A sanctuary designed not to impress with ostentation, but to touch the soul with profound stillness and bespoke care."
              <footer className="text-xs font-sans not-italic text-[#937345] font-semibold mt-1">
                — Rahul Roy, Master Architect & Aurelia Design Director
              </footer>
            </blockquote>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#c5a880]/30">
              <div className="text-center sm:text-left">
                <div className="font-serif text-3xl font-semibold text-[#0b251f]">48</div>
                <div className="text-[11px] tracking-wider uppercase text-[#937345] font-sans">Pool Villas & Suites</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-serif text-3xl font-semibold text-[#0b251f]">3</div>
                <div className="text-[11px] tracking-wider uppercase text-[#937345] font-sans">Signature Dining</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-serif text-3xl font-semibold text-[#0b251f]">10k</div>
                <div className="text-[11px] tracking-wider uppercase text-[#937345] font-sans">Sq Ft Soma Spa</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-serif text-3xl font-semibold text-[#0b251f]">100%</div>
                <div className="text-[11px] tracking-wider uppercase text-[#937345] font-sans">Renewable Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Sanctuary Pillars (Mobile responsive grid) */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#fcfbf9] rounded-2xl p-6 border border-[#c5a880]/25 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0b251f] text-[#dfbe85] flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-medium text-[#0b251f] mb-2">{pillar.title}</h4>
              <p className="text-xs text-[#1c5246] leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
