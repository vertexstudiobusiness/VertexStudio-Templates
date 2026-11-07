import React from 'react';
import { Star, Quote, Coffee, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand-200 border border-sand-300 text-charcoal-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-ambercrema fill-ambercrema" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal-900 font-serif leading-tight">
            Trusted by Builders &amp; Thinkers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-normal">
            From remote staff engineers and PhD scholars to startup teams running quarterly offsites. Here is what keeps them coming back.
          </p>
        </div>

        {/* Testimonials Grid (Desktop 2x2, Mobile Carousel / Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-sand-200/90 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-ambercrema fill-ambercrema" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-sand-300" />
                </div>

                {/* Quote Text */}
                <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Favorite Drink & Zone Tag */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sand-100 text-[11px] font-medium text-charcoal-700 border border-sand-200">
                    <Coffee className="w-3 h-3 text-wood-700" />
                    <span>Go-to: {testimonial.favoriteDrink}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-olive-50 text-[11px] font-medium text-olive-800 border border-olive-200">
                    <MapPin className="w-3 h-3 text-olive-600" />
                    <span>{testimonial.frequentedZone}</span>
                  </span>
                </div>
              </div>

              {/* Author Profile */}
              <div className="pt-4 border-t border-sand-100 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover border border-sand-300"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-charcoal-900">{testimonial.name}</h4>
                  <p className="text-xs text-charcoal-500">
                    {testimonial.role} • <span className="text-charcoal-700 font-medium">{testimonial.companyOrCollege}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-sand-100 border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-ambercrema/10 border border-ambercrema/30 flex items-center justify-center text-ambercrema font-serif font-bold text-lg">
              4.9
            </div>
            <div>
              <p className="font-serif font-bold text-charcoal-900 text-sm sm:text-base">
                Google Reviews &amp; Coworking Community
              </p>
              <p className="text-xs text-charcoal-500">
                Rated 4.9/5 from 640+ remote workers, students, and founders in Bengaluru.
              </p>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white border border-sand-300 hover:bg-sand-50 text-xs font-semibold text-charcoal-800 shadow-xs transition-colors"
          >
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
};
