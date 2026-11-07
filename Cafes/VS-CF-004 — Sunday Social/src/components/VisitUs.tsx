import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { BRAND, HOURS } from "../config/site";
import {
  CheckIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";
import { Reveal, SectionHeading } from "./ui-bits";

const SLOTS = [
  "9:00 am",
  "10:30 am",
  "12:30 pm",
  "2:00 pm",
  "4:30 pm",
  "6:30 pm",
  "8:00 pm",
  "9:30 pm",
];

interface Booking {
  name: string;
  guests: string;
  date: string;
  time: string;
}

const todayISO = () => {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
};

function validate(values: Record<string, string>) {
  const errors: Record<string, string> = {};
  if (values.name.trim().length < 2) errors.name = "A real name, please — even a nickname.";
  const digits = values.phone.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) errors.phone = "Enter a 10-digit Indian mobile number.";
  if (!values.date) errors.date = "Pick a day for the chai to flow.";
  else if (values.date < todayISO()) errors.date = "Time machine? Pick today or later.";
  if (!values.time) errors.time = "Pick a slot from the list.";
  return errors;
}

const inputClass = (bad: boolean) =>
  `h-12 w-full rounded-xl border-2 bg-cream px-3.5 text-[15px] text-choco outline-none transition-colors placeholder:text-choco/35 focus:bg-white ${
    bad ? "border-tomato" : "border-choco/25 focus:border-burnt"
  }`;

const labelClass =
  "mb-1.5 block text-[12px] font-bold uppercase tracking-[0.14em] text-choco/60";

export function VisitUs() {
  const [values, setValues] = useState({ name: "", phone: "", guests: "2", date: "", time: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [booking, setBooking] = useState<Booking | null>(null);
  const reduce = useReducedMotion();
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) => {
    const v = e.target.value;
    setValues((prev) => ({ ...prev, [key]: v }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.values(found).some(Boolean)) return;
    setStatus("sending");
    timer.current = window.setTimeout(() => {
      setBooking({ name: values.name.trim(), guests: values.guests, date: values.date, time: values.time });
      setStatus("done");
    }, 900);
  };

  const reset = () => {
    setValues({ name: "", phone: "", guests: "2", date: "", time: "" });
    setErrors({});
    setStatus("idle");
    setBooking(null);
  };

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`;

  return (
    <section id="visit" className="relative overflow-hidden bg-cream-deep/60 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10">
          <div>
          {/* ── Left: info, hours, stylised map ─────────────── */}
          <SectionHeading
            kicker="Visit us"
            title={
              <>
                Sunday starts{" "}
                <span className="font-script normal-case text-[0.72em] text-burnt">here</span>
              </>
            }
            sub="Nine junctions of jaywalking and one left turn later — you're at Chapel Lane."
          />

          <div className="mt-7 space-y-4">
            <Reveal delay={0.08}>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable flex items-start gap-3 rounded-2xl border-2 border-choco bg-white p-4 shadow-hard-sm hover:bg-cream"
                >
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-burnt" />
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-choco/50">
                      Find us
                    </span>
                    <span className="mt-0.5 block text-[14px] font-medium leading-snug text-choco">
                      {BRAND.address}
                    </span>
                    <span className="mt-1 block text-[12px] font-bold text-burnt">Directions ↗</span>
                  </span>
                </a>

                <div className="grid gap-3">
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                    className="pressable flex items-center gap-3 rounded-2xl border-2 border-choco bg-white p-4 shadow-hard-sm hover:bg-cream"
                  >
                    <PhoneIcon className="h-5 w-5 shrink-0 text-burnt" />
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-choco/50">
                        Call us
                      </span>
                      <span className="text-[14px] font-bold text-choco">{BRAND.phone}</span>
                    </span>
                  </a>
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    className="pressable flex items-center gap-3 rounded-2xl border-2 border-choco bg-whatsapp p-4 shadow-hard-sm hover:bg-[#1ebe5b]"
                  >
                    <WhatsAppIcon className="h-5 w-5 shrink-0 text-choco" />
                    <span className="text-[14px] font-bold text-choco">
                      WhatsApp orders & tables
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* hours */}
            <Reveal delay={0.14}>
              <div className="rounded-2xl border-2 border-choco bg-choco p-5 shadow-hard-sm">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-butter" />
                  <h3 className="font-display text-lg uppercase tracking-wide text-cream">
                    Opening hours
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className={`flex items-baseline justify-between gap-3 rounded-lg px-2 py-1 text-[13.5px] ${
                        h.day === "Sunday" ? "bg-butter font-bold text-choco" : "text-cream/80"
                      }`}
                    >
                      <span>{h.day}</span>
                      <span className="tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] text-cream/40">
                  kitchen closes 30 minutes before we do
                </p>
              </div>
            </Reveal>

            {/* stylised map placeholder */}
            <Reveal delay={0.18}>
              <div className="overflow-hidden rounded-2xl border-[3px] border-choco bg-butter-soft shadow-hard-sm">
                <div className="relative h-40 sm:h-44">
                  <span className="dots absolute inset-0 opacity-70" aria-hidden />
                  <span
                    className="absolute -left-6 top-1/2 h-3 w-[130%] -rotate-6 rounded-full border-y-2 border-choco/20 bg-cream"
                    aria-hidden
                  />
                  <span
                    className="absolute left-1/3 -top-6 h-[160%] w-3 rotate-12 rounded-full border-x-2 border-choco/20 bg-cream"
                    aria-hidden
                  />
                  <span
                    className="absolute -left-4 bottom-5 h-2.5 w-[60%] rotate-3 rounded-full border-y-2 border-choco/15 bg-cream"
                    aria-hidden
                  />
                  <span
                    className="absolute right-5 top-4 grid h-14 w-20 rotate-2 place-items-center rounded-lg border-2 border-choco/25 bg-[#9bbf6a]/60 text-center text-[10px] font-bold uppercase leading-tight tracking-widest text-choco/70"
                    aria-hidden
                  >
                    park
                  </span>
                  <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[3px] border-choco bg-burnt text-cream shadow-hard">
                    <MapPinIcon className="h-6 w-6" />
                  </span>
                </div>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable flex items-center justify-between gap-2 border-t-[3px] border-choco bg-choco px-3.5 py-2.5"
                >
                  <span className="truncate text-[12px] font-semibold text-cream/85">
                    {BRAND.mapsQuery} — stylised preview
                  </span>
                  <span className="shrink-0 font-display text-[12px] uppercase tracking-widest text-butter">
                    Open maps ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          </div>

          {/* ── Right: reservation form ─────────────────────── */}
          <Reveal delay={0.1} className="mt-10 lg:mt-0">
            <div className="rounded-[1.75rem] border-[3px] border-choco bg-white p-5 shadow-hard sm:p-7">
              <AnimatePresence mode="wait">
                {status === "done" && booking ? (
                  <motion.div
                    key="done"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="text-center"
                  >
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-[3px] border-choco bg-butter shadow-hard">
                      <CheckIcon className="h-8 w-8 text-choco" />
                    </span>
                    <h3 className="mt-4 font-display text-[clamp(1.6rem,6vw,2.2rem)] uppercase leading-tight text-choco">
                      Seat saved for you,
                      <br />
                      {booking.name.split(" ")[0]}!
                    </h3>
                    <dl className="mx-auto mt-4 max-w-xs space-y-2 rounded-2xl border-2 border-dashed border-choco/30 bg-cream p-4 text-left text-[14px]">
                      <div className="flex justify-between gap-3">
                        <dt className="font-bold uppercase tracking-wider text-choco/50 text-[11px] leading-5">Date</dt>
                        <dd className="font-semibold text-choco">
                          {new Date(`${booking.date}T00:00:00`).toLocaleDateString("en-IN", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                          })}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-bold uppercase tracking-wider text-choco/50 text-[11px] leading-5">Time</dt>
                        <dd className="font-semibold text-choco">{booking.time}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="font-bold uppercase tracking-wider text-choco/50 text-[11px] leading-5">Guests</dt>
                        <dd className="font-semibold text-choco">{booking.guests}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-[13px] leading-relaxed text-choco/65">
                      We'll confirm on WhatsApp within the hour. Waffles warm-up begins.
                    </p>
                    <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-tomato">
                      demo site — no real booking made
                    </p>
                    <button
                      onClick={reset}
                      className="pressable mt-5 h-12 w-full rounded-xl border-2 border-choco bg-butter px-4 font-display text-sm uppercase tracking-[0.14em] text-choco shadow-hard-sm transition-colors hover:bg-burnt hover:text-cream"
                    >
                      Make another booking
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="flex items-baseline justify-between gap-3">
                      <h3 className="font-script text-[26px] leading-none text-burnt">
                        reserving a table
                      </h3>
                      <span className="sticker -rotate-2 rounded-full bg-choco px-3 py-1 font-display text-[11px] uppercase tracking-[0.16em] text-cream">
                        demo booking
                      </span>
                    </span>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-choco/65">
                      Drop your details — we hold tables up to 15 minutes past the slot.
                    </p>

                    <form onSubmit={submit} noValidate className="mt-5 grid gap-4">
                      <div>
                        <label htmlFor="res-name" className={labelClass}>
                          Your name
                        </label>
                        <input
                          id="res-name"
                          type="text"
                          autoComplete="name"
                          placeholder="e.g. Aarav Mehta"
                          value={values.name}
                          onChange={set("name")}
                          aria-invalid={Boolean(errors.name)}
                          className={inputClass(Boolean(errors.name))}
                        />
                        {errors.name && <p className="mt-1 text-[12px] font-semibold text-tomato">{errors.name}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="res-phone" className={labelClass}>
                            Phone
                          </label>
                          <input
                            id="res-phone"
                            type="tel"
                            autoComplete="tel"
                            inputMode="numeric"
                            placeholder="98XXXXXX10"
                            value={values.phone}
                            onChange={set("phone")}
                            aria-invalid={Boolean(errors.phone)}
                            className={inputClass(Boolean(errors.phone))}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-[12px] font-semibold text-tomato">{errors.phone}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="res-guests" className={labelClass}>
                            Guests
                          </label>
                          <select
                            id="res-guests"
                            value={values.guests}
                            onChange={set("guests")}
                            className={inputClass(false)}
                          >
                            {["1", "2", "3", "4", "5", "6", "7", "8+"].map((g) => (
                              <option key={g} value={g}>
                                {g} {g === "1" ? "guest" : "guests"}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="res-date" className={labelClass}>
                            Date
                          </label>
                          <input
                            id="res-date"
                            type="date"
                            min={todayISO()}
                            value={values.date}
                            onChange={set("date")}
                            aria-invalid={Boolean(errors.date)}
                            className={inputClass(Boolean(errors.date))}
                          />
                          {errors.date && (
                            <p className="mt-1 text-[12px] font-semibold text-tomato">{errors.date}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="res-time" className={labelClass}>
                            Slot
                          </label>
                          <select
                            id="res-time"
                            value={values.time}
                            onChange={set("time")}
                            aria-invalid={Boolean(errors.time)}
                            className={inputClass(Boolean(errors.time))}
                          >
                            <option value="" disabled>
                              Pick a time
                            </option>
                            {SLOTS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {errors.time && (
                            <p className="mt-1 text-[12px] font-semibold text-tomato">{errors.time}</p>
                          )}
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="pressable mt-1 flex h-[52px] items-center justify-center gap-2.5 rounded-xl bg-burnt font-display text-[15px] uppercase tracking-[0.16em] text-cream shadow-hard-sm transition-colors hover:bg-burnt-deep disabled:cursor-wait disabled:opacity-80"
                      >
                        {status === "sending" ? (
                          <>
                            <span
                              className="h-4 w-4 animate-spin rounded-full border-[2.5px] border-cream/40 border-t-cream"
                              aria-hidden
                            />
                            Saving your spot…
                          </>
                        ) : (
                          "Reserve my table"
                        )}
                      </button>
                      <p className="text-center text-[12px] leading-relaxed text-choco/45">
                        Big groups (9+) or events?{" "}
                        <a
                          href={`https://wa.me/${BRAND.whatsappNumber}`}
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold text-burnt underline underline-offset-2"
                        >
                          WhatsApp us instead
                        </a>
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
