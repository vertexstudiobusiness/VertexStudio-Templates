import type { ReactNode } from "react";
import { Ornament } from "./Ornament";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

/** Editorial section header: hairline eyebrow, serif display title, ornament. */
export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      <div className="flex items-center gap-3">
        <span className={`h-px w-8 ${dark ? "bg-gold-400/50" : "bg-gold-600/45"}`} />
        <p className={`eyebrow ${dark ? "text-gold-300" : "text-gold-700"}`}>{eyebrow}</p>
        <span className={`h-px w-8 ${dark ? "bg-gold-400/50" : "bg-gold-600/45"}`} />
      </div>

      <h2
        className={`mt-4 font-display text-[2.1rem] leading-[1.08] font-medium sm:text-5xl ${
          dark ? "text-ivory" : "text-burgundy-700"
        }`}
      >
        {title}
      </h2>

      {align === "center" && (
        <Ornament className={`mt-5 ${dark ? "text-gold-400/80" : "text-gold-600/80"}`} width={180} />
      )}
      {align === "left" && (
        <span className={`mt-5 h-px w-16 ${dark ? "bg-gold-400/40" : "bg-gold-600/40"}`} />
      )}

      {sub && (
        <p
          className={`mt-5 max-w-xl text-[15px] leading-relaxed font-light ${
            dark ? "text-ivory/60" : "text-ink/55"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
