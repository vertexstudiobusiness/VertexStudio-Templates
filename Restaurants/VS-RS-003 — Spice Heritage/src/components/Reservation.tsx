import { useMemo, useState, type ReactNode } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { business, booking, reservationMessage, waLink, type ReservationDraft } from "../config/site";

type FormValues = ReservationDraft;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const toISO = (d: Date) => d.toISOString().slice(0, 10);

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (v.name.trim().length < 3) e.name = "Please share your full name (min. 3 letters).";

  const digits = v.phone.replace(/\D/g, "");
  if (
    !/^[+]?[0-9 ()-]{10,17}$/.test(v.phone.trim()) ||
    digits.length < 10 ||
    digits.length > 13 ||
    (digits.length === 10 && !/^[6-9]/.test(digits[0] || "0"))
  ) {
    e.phone = "Enter a valid Indian mobile (e.g. +91 98290 44556).";
  }

  if (!emailRe.test(v.email.trim())) e.email = "Enter a valid email address.";

  if (!v.date) {
    e.date = "Choose your dining date.";
  } else {
    const today = toISO(new Date());
    if (v.date < today) e.date = "That date has already passed.";
    const max = new Date();
    max.setDate(max.getDate() + booking.maxDaysAhead);
    if (v.date > toISO(max)) e.date = `Bookings open up to ${booking.maxDaysAhead} days ahead.`;
  }

  if (!v.time) e.time = "Pick a seating time.";
  return e;
}

const initial: FormValues = {
  name: "",
  phone: "",
  email: "",
  guests: "2",
  date: "",
  time: "",
  occasion: "No occasion",
  notes: "",
};

export function Reservation() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const { lunchTimes, dinnerTimes, dateMin, dateMax } = useMemo(() => {
    const times = booking.times as readonly string[];
    const lunchEnd = times.findIndex((t) => /6:30/.test(t));
    const today = new Date();
    const max = new Date();
    max.setDate(max.getDate() + booking.maxDaysAhead);
    return {
      lunchTimes: times.slice(0, lunchEnd),
      dinnerTimes: times.slice(lunchEnd),
      dateMin: toISO(today),
      dateMax: toISO(max),
    };
  }, []);

  const set = (k: keyof FormValues) => (val: string) => {
    setValues((prev) => ({ ...prev, [k]: val }));
    setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      const first = document.querySelector<HTMLElement>('[data-error="true"]');
      first?.focus();
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitted(values);
    window.open(waLink(reservationMessage(values)), "_blank", "noopener");
  };

  const prettyDate = (d?: string) =>
    d
      ? new Date(`${d}T12:00:00`).toLocaleDateString("en-IN", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      : "";

  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-burgundy-800 py-16 text-ivory jali-dark sm:py-20 md:py-28 scroll-mt-20"
    >
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left rail */}
        <Reveal className="lg:col-span-5">
          <p className="eyebrow flex items-center gap-3 text-gold-300">
            <span className="h-px w-8 bg-gold-400/60" /> Reservations
          </p>
          <h2 className="mt-4 font-display text-[2.15rem] font-medium leading-[1.08] sm:text-5xl">
            Reserve Your
            <br />
            Table
          </h2>
          <p className="mt-5 max-w-md text-[15px] font-light leading-relaxed text-ivory/70">
            Forty seats always walk in smiling; the rest are promised to someone
            thoughtful. Tell us when you're arriving — your request lands directly
            on our concierge's WhatsApp.
          </p>

          <div className="mt-8 space-y-3">
            <QuickLink
              icon={<Phone size={18} strokeWidth={1.7} />}
              label="Call the concierge"
              value={business.phoneDisplay}
              href={business.phoneHref}
            />
            <QuickLink
              icon={<MessageCircle size={18} strokeWidth={1.7} />}
              label="WhatsApp us"
              value="Instant replies, 11 AM – 11 PM"
              href={waLink(business.whatsappDefaultMessage)}
              external
            />
            <QuickLink
              icon={<Mail size={18} strokeWidth={1.7} />}
              label="Email reservations"
              value={business.email}
              href={`mailto:${business.email}`}
            />
          </div>

          <ul className="mt-8 space-y-2.5 rounded-2xl border border-ivory/10 bg-ivory/[0.05] p-5 text-[13px] font-light text-ivory/70 backdrop-blur">
            {[
              `Tables are held for ${booking.holdMinutes} minutes past booking time.`,
              "Groups of 9–12: call us — the long tables book fast.",
              "Jain, vegan & gluten-free preparations on request.",
              `Kitchen rests Mondays · ${business.hours.lastSeating}.`,
            ].map((line) => (
              <li key={line} className="flex gap-2.5">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />
                {line}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Form card */}
        <Reveal delay={0.12} className="lg:col-span-7">
          <div className="rounded-3xl border border-gold-500/25 bg-cream p-6 text-ink shadow-lux sm:p-8 md:p-10">
            {submitted ? (
              <SuccessPanel
                draft={submitted}
                onEdit={() => setSubmitted(null)}
                prettyDate={prettyDate(submitted.date)}
              />
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium text-burgundy-700">
                    Table Reservation
                  </h3>
                  <span className="rounded-full border border-leaf/25 bg-leaf/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-leaf">
                    Veg + Non-Veg
                  </span>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <Field id="res-name" label="Full name" error={errors.name} className="sm:col-span-2">
                    <input
                      id="res-name"
                      data-error={!!errors.name}
                      className={`field ${errors.name ? "field-error" : ""}`}
                      placeholder="Aishwarya Rao"
                      value={values.name}
                      onChange={(e) => set("name")(e.target.value)}
                      autoComplete="name"
                      type="text"
                    />
                  </Field>

                  <Field id="res-phone" label="Mobile number" error={errors.phone}>
                    <input
                      id="res-phone"
                      data-error={!!errors.phone}
                      className={`field ${errors.phone ? "field-error" : ""}`}
                      placeholder="+91 98XXX XXXXX"
                      value={values.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      autoComplete="tel"
                      inputMode="tel"
                      type="tel"
                    />
                  </Field>

                  <Field id="res-email" label="Email" error={errors.email}>
                    <input
                      id="res-email"
                      data-error={!!errors.email}
                      className={`field ${errors.email ? "field-error" : ""}`}
                      placeholder="you@example.com"
                      value={values.email}
                      onChange={(e) => set("email")(e.target.value)}
                      autoComplete="email"
                      type="email"
                    />
                  </Field>

                  <Field id="res-date" label="Date" error={errors.date}>
                    <input
                      id="res-date"
                      data-error={!!errors.date}
                      className={`field ${errors.date ? "field-error" : ""}`}
                      type="date"
                      min={dateMin}
                      max={dateMax}
                      value={values.date}
                      onChange={(e) => set("date")(e.target.value)}
                    />
                  </Field>

                  <Field id="res-time" label="Seating time" error={errors.time}>
                    <select
                      id="res-time"
                      data-error={!!errors.time}
                      className={`field ${errors.time ? "field-error" : ""} ${values.time ? "" : "text-ink/35"}`}
                      value={values.time}
                      onChange={(e) => set("time")(e.target.value)}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      <optgroup label="Lunch · 12:00 – 3:30 PM">
                        {lunchTimes.map((t) => (
                          <option key={t} value={t}>
                            {t.includes("PM") ? t : `${t} PM`}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Dinner · 6:30 – 11:00 PM">
                        {dinnerTimes.map((t) => (
                          <option key={t} value={t}>
                            {t.includes("PM") ? t : `${t} PM`}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </Field>

                  {/* Guests */}
                  <div className="sm:col-span-2">
                    <p className="field-label">
                      Number of guests ·{" "}
                      <span className="font-body normal-case tracking-normal">
                        brass thalis suit two
                      </span>
                    </p>
                    <div
                      className="grid grid-cols-4 gap-2 sm:grid-cols-8"
                      role="radiogroup"
                      aria-label="Number of guests"
                    >
                      {["1", "2", "3", "4", "5", "6", "7", "8"].map((g) => {
                        const isSel = values.guests === g;
                        return (
                          <button
                            key={g}
                            type="button"
                            role="radio"
                            aria-checked={isSel}
                            onClick={() => set("guests")(g)}
                            className={`grid h-11 place-items-center rounded-xl border text-[14px] font-medium transition-all duration-200 ${
                              isSel
                                ? "border-burgundy-700 bg-burgundy-700 text-ivory shadow-card"
                                : "border-ink/15 bg-white/70 text-ink/70 hover:border-gold-500"
                            }`}
                          >
                            {g}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-[12px] font-light text-ink/45">
                      <Users size={13} className="text-gold-600" aria-hidden="true" />
                      Groups of 9–{booking.maxGuests}? Call the concierge — two long tables.
                    </p>
                  </div>

                  <Field id="res-occasion" label="Occasion · optional" className="sm:col-span-2">
                    <select
                      id="res-occasion"
                      className="field text-ink"
                      value={values.occasion}
                      onChange={(e) => set("occasion")(e.target.value)}
                    >
                      {booking.occasions.map((o) => (
                        <option key={o} value={o}>
                          {o === "No occasion" ? "Just a lovely evening" : o}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field id="res-notes" label="Anything we should know · optional" className="sm:col-span-2">
                    <textarea
                      id="res-notes"
                      className={`field ${/jain|vegan|allerg/i.test(values.notes) ? "ring-2 ring-gold-400/40" : ""}`}
                      rows={3}
                      placeholder="Window seat, Jain thali, anniversary candles, high chair…"
                      value={values.notes}
                      onChange={(e) => set("notes")(e.target.value)}
                    />
                  </Field>
                </div>

                <button type="submit" className="btn-gold mt-7 w-full text-[15px]">
                  <Sparkles size={17} strokeWidth={1.9} aria-hidden="true" />
                  Check Availability
                </button>

                <p className="mt-3 text-center text-[12px] font-light text-ink/45">
                  Validating details · then opening WhatsApp with your request — send it and we confirm within minutes.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pieces ---------- */

function Field({
  id,
  label,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-msg" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function QuickLink({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  const inner = (
    <span className="flex items-center gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-400/30 bg-ivory/[0.06] text-gold-300">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10.5px] uppercase tracking-[0.2em] text-ivory/50">{label}</span>
        <span className="block truncate text-[14.5px] text-ivory">{value}</span>
      </span>
      <span className="ml-auto text-gold-500/70">→</span>
    </span>
  );
  const cls =
    "flex items-center rounded-2xl border border-ivory/10 bg-ivory/[0.04] px-4 py-3.5 backdrop-blur transition-colors duration-300 hover:border-gold-400/50 hover:bg-ivory/[0.08]";
  return external ? (
    <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <a className={cls} href={href}>
      {inner}
    </a>
  );
}

function SuccessPanel({
  draft,
  onEdit,
  prettyDate,
}: {
  draft: FormValues;
  onEdit: () => void;
  prettyDate: string;
}) {
  return (
    <div className="flex flex-col items-center py-2 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-leaf/10 text-leaf">
        <CheckCircle2 size={30} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-display text-[1.85rem] font-medium text-burgundy-700">
        Ready, {draft.name.split(" ")[0]}!
      </h3>
      <p className="mt-2 max-w-sm text-[14px] font-light leading-relaxed text-ink/60">
        Your request has been prepared and WhatsApp is opening with everything
        prefilled. Press <span className="font-medium text-burgundy-700">Send</span> and our
        concierge will confirm within minutes.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <SummaryChip icon={<Calendar size={13} />} text={prettyDate} />
        <SummaryChip icon={<Clock size={13} />} text={draft.time} />
        <SummaryChip icon={<Users size={13} />} text={`${draft.guests} ${draft.guests === "1" ? "guest" : "guests"}`} />
        {draft.occasion !== "No occasion" && (
          <SummaryChip icon={<Sparkles size={13} />} text={draft.occasion} />
        )}
      </div>

      <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          className="btn-gold text-[14.5px] sm:px-8"
          href={waLink(reservationMessage(draft))}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} strokeWidth={1.9} aria-hidden="true" />
          Open WhatsApp
        </a>
        <button type="button" onClick={onEdit} className="btn-outline-dark text-[14.5px] sm:px-8">
          Edit details
        </button>
      </div>

      <p className="mt-4 text-[12.5px] font-light text-ink/45">
        Prefer to talk?{" "}
        <a href={business.phoneHref} className="font-medium text-burgundy-700 underline decoration-gold-500/50 underline-offset-4">
          {business.phoneDisplay}
        </a>
      </p>
    </div>
  );
}

function SummaryChip({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-burgundy-700/15 bg-burgundy-700/[0.06] px-3 py-1.5 text-[12.5px] font-medium text-burgundy-800">
      <span className="text-gold-600">{icon}</span>
      {text}
    </span>
  );
}
