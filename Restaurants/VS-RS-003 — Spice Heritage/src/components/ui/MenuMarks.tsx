import { Flame } from "lucide-react";
import type { Diet } from "../../types";

/** FSSAI-style dietary mark — green circle in a square (veg), brick (non-veg). */
export function VegMark({ diet, className = "" }: { diet: Diet; className?: string }) {
  const color = diet === "veg" ? "#157A46" : "#A94438";
  return (
    <span
      role="img"
      aria-label={diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
      title={diet === "veg" ? "Vegetarian" : "Non-vegetarian"}
      className={`inline-grid h-4 w-4 shrink-0 place-items-center rounded-[4px] border-[1.5px] ${className}`}
      style={{ borderColor: color }}
    >
      <span className="h-[6px] w-[6px] rounded-full" style={{ backgroundColor: color }} />
    </span>
  );
}

/** Muted spice-o-meter — one to three gold flames. */
export function SpiceMeter({ level, className = "" }: { level: number; className?: string }) {
  if (level <= 0) return null;
  return (
    <span
      role="img"
      className={`inline-flex items-center gap-[1px] ${className}`}
      aria-label={`Spice level ${level} of 3`}
    >
      {Array.from({ length: level }, (_, i) => (
        <Flame key={i} size={13} className="text-saffron-600" strokeWidth={2.2} aria-hidden="true" />
      ))}
    </span>
  );
}
