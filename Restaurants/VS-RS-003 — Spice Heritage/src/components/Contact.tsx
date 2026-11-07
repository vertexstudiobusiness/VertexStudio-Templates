import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { business, waLink } from "../config/site";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-ivory jali-light scroll-mt-20">
      <Reveal>
        <SectionHeading
          eyebrow="Find Us"
          title={
            <>
              The <em className="gold-gradient-text italic">Visit</em>
            </>
          }
          sub="Follow the coal smoke down Gulab Bagh Road — we'll be the house glowing gold at number 14."
        />
      </Reveal>

      <div className="container-x mt-10 grid gap-4 md:mt-14 lg:grid-cols-2 lg:gap-6">
        {/* Info cards */}
        <div className="flex flex-col gap-4 lg:gap-5">
          <Reveal as="article" delay={0.05} className="rounded-2xl border border-burgundy-700/10 bg-cream p-5 sm:p-6">
            <InfoHead icon={<MapPin size={18} strokeWidth={1.7} />} title="Address" />
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">
              {business.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold-700 underline decoration-gold-500/50 underline-offset-4 hover:text-burgundy-700"
            >
              Get directions <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal as="article" delay={0.1} className="rounded-2xl border border-burgundy-700/10 bg-cream p-5 sm:p-6">
            <InfoHead icon={<Clock size={18} strokeWidth={1.7} />} title="Opening Hours" />
            {/* Wrapper divs in a <dl> may contain only <dt>/<dd> — the dotted
                leader is drawn with an ::after pseudo on the row instead. */}
            <dl className="mt-3 space-y-2 text-[14px]">
              <div className="flex items-baseline gap-3 after:min-w-5 after:flex-1 after:translate-y-[-3px] after:border-b after:border-dotted after:border-ink/20 after:content-['']">
                <dt className="shrink-0 text-ink/50">{business.hours.days}</dt>
                <dd className="text-right">
                  <span className="block font-medium text-burgundy-800">
                    Lunch {business.hours.lunch}
                  </span>
                  <span className="block text-[13px] text-ink/55">Dinner {business.hours.dinner}</span>
                </dd>
              </div>
              <div className="flex items-baseline gap-3 after:min-w-5 after:flex-1 after:translate-y-[-3px] after:border-b after:border-dotted after:border-ink/20 after:content-['']">
                <dt className="shrink-0 text-ink/50">Monday</dt>
                <dd className="text-right font-display italic text-[15px] text-burgundy-700/80">
                  kitchen rest day
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-[12px] font-light text-ink/45">{business.hours.lastSeating}</p>
          </Reveal>

          <Reveal as="article" delay={0.15} className="rounded-2xl border border-burgundy-700/10 bg-cream p-5 sm:p-6">
            <InfoHead icon={<Phone size={18} strokeWidth={1.7} />} title="Contact" />
            <div className="mt-3 grid gap-2.5 text-[14px]">
              <ContactRow icon={<Phone size={15} />} text={business.phoneDisplay} href={business.phoneHref} />
              <ContactRow
                icon={<MessageCircle size={15} />}
                text="WhatsApp booking"
                href={waLink(business.whatsappDefaultMessage)}
                external
              />
              <ContactRow icon={<Mail size={15} />} text={business.email} href={`mailto:${business.email}`} />
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {business.travelNotes.map((n) => (
                <li
                  key={n.label}
                  className="rounded-full border border-burgundy-700/10 bg-burgundy-700/[0.05] px-3 py-1.5 text-[11px] text-burgundy-800/80"
                >
                  <span className="font-medium">{n.label}</span>
                  <span className="text-ink/45"> · {n.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.12} className="lg:h-full">
          <div className="relative h-full min-h-[340px] overflow-hidden rounded-3xl border border-burgundy-700/15 shadow-lux lg:min-h-full sm:min-h-[420px]">
            <iframe
              title="Map — Spice Heritage, Gulab Bagh Road, Udaipur"
              src={business.mapEmbed}
              className="absolute inset-0 h-full w-full grayscale-[30%] contrast-[1.02] transition-all duration-500 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <span className="absolute left-4 top-4 rounded-full border border-ivory/20 bg-ink/80 px-3.5 py-1.5 text-[10.5px] uppercase tracking-luxe text-ivory backdrop-blur">
              {business.addressSummary}
            </span>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-ink/75 px-4 py-3 backdrop-blur">
              <p className="min-w-0 truncate text-[11.5px] text-ivory/70">{business.directionsNote}</p>
              <a
                href={business.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 text-[11.5px] font-medium uppercase tracking-[0.14em] text-gold-300 hover:text-gold-400"
              >
                Open Maps <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InfoHead({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-burgundy-700 text-gold-300">
        {icon}
      </span>
      <h3 className="font-display text-xl font-medium text-burgundy-700">{title}</h3>
    </div>
  );
}

function ContactRow({
  icon,
  text,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  external?: boolean;
}) {
  const cls =
    "flex min-w-0 items-center gap-2.5 text-ink/70 transition-colors hover:text-burgundy-700";
  return external ? (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      {icon && <span className="text-gold-600">{icon}</span>}
      <span className="truncate">{text}</span>
    </a>
  ) : (
    <a className={cls} href={href}>
      {icon && <span className="text-gold-600">{icon}</span>}
      <span className="truncate">{text}</span>
    </a>
  );
}
