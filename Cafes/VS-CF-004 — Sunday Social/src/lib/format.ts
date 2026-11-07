/** Format a number as Indian Rupees with lakh-style grouping (₹1,23,456). */
export function inr(n: number): string {
  return `₹${n.toLocaleString("en-IN")}`;
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
