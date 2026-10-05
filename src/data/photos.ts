export type PhotoCategory = "Exterior" | "Living" | "Kitchen & Dining" | "Bedrooms" | "Bathrooms" | "Laundry";

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  category: PhotoCategory;
};

const CDN = "https://pub-dc874d69f3084ac9b625d1dcb0e0f517.r2.dev";

export const asset = (file: string) => `${CDN}/${encodeURIComponent(file)}`;

export function sized(src: string, width: number) {
  if (!src.includes("images.unsplash.com")) return src;
  return src.replace(/w=\d+/, `w=${width}`);
}

export const shots = {
  exteriorDusk: {
    src: asset("exterior - house front.webp"),
    alt: "Front of the house at dusk under mature oak trees",
    caption: "Front elevation at dusk — a quiet corner lot under mature oaks",
    category: "Exterior",
  },
  exteriorDay: {
    src: asset("exterior- house front2.webp"),
    alt: "Front of the house in daylight with walkway",
    caption: "Painted brick and board-and-batten facade with a private front walk",
    category: "Exterior",
  },
  frontDoor: {
    src: asset("frontdoor.webp"),
    alt: "Interior foyer with modern wood front door",
    caption: "Foyer with a modern wood-and-glass front door",
    category: "Living",
  },
  backyard: {
    src: asset("backyard2.png"),
    alt: "Covered cedar pavilion and patio in the backyard",
    caption: "Covered cedar pavilion, patio and picnic area in the shaded backyard",
    category: "Exterior",
  },
  living1: {
    src: asset("living room1.webp"),
    alt: "Living room with sectional sofa and open staircase",
    caption: "Sectional seating with the open staircase and patio doors beyond",
    category: "Living",
  },
  living3: {
    src: asset("livingroom-furniture.png"),
    alt: "Furnished living room with sectional sofa and TV, looking toward the front entry",
    caption: "Sectional seating under exposed beams, open to the front entry",
    category: "Living",
  },
  kitchen2: {
    src: asset("kitchen2.webp"),
    alt: "Renovated galley kitchen with breakfast nook",
    caption: "Renovated kitchen with quartz counters, opening to the breakfast nook",
    category: "Kitchen & Dining",
  },
  kitchen1: {
    src: asset("kitchen1.webp"),
    alt: "Kitchen with gas range and stainless appliances",
    caption: "Stainless gas range, microwave and dishwasher",
    category: "Kitchen & Dining",
  },
  dining1: {
    src: asset("dining-furniture2.png"),
    alt: "Furnished dining room with a wood table seating ten and large front windows",
    caption: "Dining room — seats ten beside large front-facing windows",
    category: "Kitchen & Dining",
  },
  bedroom3: {
    src: asset("bedroom5-furniture.png"),
    alt: "Furnished upstairs bedroom with vaulted ceiling and queen bed",
    caption: "Bedroom 4 — upstairs, with a vaulted ceiling and queen bed",
    category: "Bedrooms",
  },
  bedroom2: {
    src: asset("bedroom3-furniture.png"),
    alt: "Furnished bright bedroom with queen bed and windows on two sides",
    caption: "Bedroom 3 — bright, with a queen bed and windows on two sides",
    category: "Bedrooms",
  },
  bedroom2b: {
    src: asset("bedroom2-furniture2.png"),
    alt: "Furnished bedroom with king bed, dresser and wall-mounted TV",
    caption: "Bedroom 2 — spacious, with a king bed and wall-mounted TV",
    category: "Bedrooms",
  },
  bedroom1: {
    src: asset("bedroom-furniture1.png"),
    alt: "Furnished main-floor bedroom with queen bed, dresser and private exterior door",
    caption: "Bedroom 1 — main floor, with a queen bed and its own exterior door",
    category: "Bedrooms",
  },
  bedroom4: {
    src: asset("bedroom4-furniture.png"),
    alt: "Furnished carpeted bedroom with queen bed and a glass-paned door overlooking the trees",
    caption: "Bedroom 5 — queen bed and a glass-paned door overlooking the oaks",
    category: "Bedrooms",
  },
  bathroom1: {
    src: asset("bathroom1.webp"),
    alt: "Double-vanity bathroom with glass shower",
    caption: "Double vanity, marble-look tile and a frameless glass shower",
    category: "Bathrooms",
  },
  bathroom2: {
    src: asset("bathroom2.webp"),
    alt: "Updated bathroom with long vanity and glass shower",
    caption: "Updated bath with quartz vanity and walk-in shower",
    category: "Bathrooms",
  },
  bathroom4: {
    src: asset("bathroom4.webp"),
    alt: "Bathroom vanity with large mirror and a separate tub-and-shower room",
    caption: "Hall bath with its own vanity and a separate tub-and-shower room",
    category: "Bathrooms",
  },
  bathroom5: {
    src: asset("bathroom5.webp"),
    alt: "Half bath with pedestal-style vanity next to the laundry room",
    caption: "Half bath beside the laundry room",
    category: "Bathrooms",
  },
  laundry: {
    src: asset("washer_Dryer.webp"),
    alt: "Stacked washer and dryer in the laundry room",
    caption: "In-home laundry with a stacked washer and dryer",
    category: "Laundry",
  },
} satisfies Record<string, Photo>;

export const heroPhoto = shots.exteriorDusk.src;

export const photos: Photo[] = [
  shots.exteriorDusk,
  shots.living3,
  shots.kitchen2,
  shots.dining1,
  shots.exteriorDay,
  shots.bathroom1,
  shots.bedroom1,
  shots.bedroom2b,
  shots.bedroom2,
  shots.bedroom3,
  shots.bedroom4,
  shots.living1,
  shots.kitchen1,
  shots.backyard,
  shots.frontDoor,
  shots.bathroom2,
  shots.bathroom4,
  shots.bathroom5,
  shots.laundry,
];

export const categories: PhotoCategory[] = ["Exterior", "Living", "Kitchen & Dining", "Bedrooms", "Bathrooms", "Laundry"];
