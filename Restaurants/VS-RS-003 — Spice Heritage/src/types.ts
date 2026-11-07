export type Diet = "veg" | "nonveg";
export type Course = "starters" | "mains" | "desserts";

export interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  course: Course;
  diet: Diet;
  spice: 0 | 1 | 2 | 3;
  tag?: string;
}

export type MenuFilter =
  | "all"
  | "starters"
  | "vegetarian"
  | "non-vegetarian"
  | "mains"
  | "desserts";

export interface SignatureDish {
  id: string;
  name: string;
  hindi: string;
  desc: string;
  price: string;
  diet: Diet;
  image: string;
  tag: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
  initials: string;
}

export interface GalleryItem {
  image: string;
  title: string;
  wide?: boolean;
}

export interface HeritageChapter {
  year: string;
  title: string;
  text: string;
}
