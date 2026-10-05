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
    alt: "Front entry with modern wood door",
    caption: "Front entry with a modern wood-and-glass door",
    category: "Exterior",
  },
  backyard: {
    src: asset("backyard.webp"),
    alt: "Covered cedar pavilion and patio in the backyard",
    caption: "Covered cedar pavilion, patio and picnic area in the shaded backyard",
    category: "Exterior",
  },
  livingStaged: {
    src: asset("living room2.webp"),
    alt: "Living room with fireplace, exposed beams and TV (virtually staged)",
    caption: "Living room — wood-burning fireplace under exposed beams (virtually staged)",
    category: "Living",
  },
  living1: {
    src: asset("living room1.webp"),
    alt: "Living room with sectional sofa and open staircase",
    caption: "Sectional seating with the open staircase and patio doors beyond",
    category: "Living",
  },
  living3: {
    src: asset("living room3.webp"),
    alt: "Living room looking toward the front entry",
    caption: "Open living room flowing to the front entry",
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
  dining2: {
    src: asset("dining room2.webp"),
    alt: "Dining room next to the front entry",
    caption: "Dining room just off the front entry",
    category: "Kitchen & Dining",
  },
  dining1: {
    src: asset("dining-furniture.png"),
    alt: "Furnished dining room with a wood table for six and large front windows",
    caption: "Dining room — table for six beside large front-facing windows",
    category: "Kitchen & Dining",
  },
  bedroom3: {
    src: asset("bedroom3.webp"),
    alt: "Upstairs bedroom with vaulted ceiling and desk",
    caption: "Upstairs bedroom with vaulted ceiling and a desk nook",
    category: "Bedrooms",
  },
  bedroom2: {
    src: asset("bedroom2.webp"),
    alt: "Bright bedroom with ceiling fan and two windows",
    caption: "Bright bedroom with windows on two sides",
    category: "Bedrooms",
  },
  bedroom2b: {
    src: asset("bedroom2-1.webp"),
    alt: "Bedroom with wall-mounted TV",
    caption: "Spacious bedroom with a wall-mounted TV",
    category: "Bedrooms",
  },
  bedroom1: {
    src: asset("bedroom1.webp"),
    alt: "Main-floor bedroom with private exterior door",
    caption: "Main-floor bedroom with its own exterior door",
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
  shots.livingStaged,
  shots.kitchen2,
  shots.dining1,
  shots.exteriorDay,
  shots.bathroom1,
  shots.bedroom3,
  shots.living1,
  shots.kitchen1,
  shots.backyard,
  shots.dining2,
  shots.bedroom2,
  shots.living3,
  shots.frontDoor,
  shots.bedroom2b,
  shots.bathroom2,
  shots.bedroom1,
  shots.laundry,
];

export const categories: PhotoCategory[] = ["Exterior", "Living", "Kitchen & Dining", "Bedrooms", "Bathrooms", "Laundry"];
