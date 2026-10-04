import { asset } from "./photos";

export type FloorRoom = { name: string; dims?: string; note?: string };

export type FloorLevel = {
  id: string;
  label: string;
  summary: string;
  image: string;
  rooms: FloorRoom[];
};

export const floorLevels: FloorLevel[] = [
  {
    id: "l1",
    label: "1st floor",
    summary: "Living, kitchen, dining and two bedrooms on the main level",
    image: asset("floorplan_1.webp"),
    rooms: [
      { name: "Living room", dims: "23'11\" × 21'3\"", note: "Wood-burning fireplace, exposed beams" },
      { name: "Kitchen", dims: "8'11\" × 12'6\"", note: "Quartz counters, gas range" },
      { name: "Breakfast nook", dims: "9'3\" × 8'8\"", note: "Off the kitchen, patio views" },
      { name: "Dining area", dims: "12'9\" × 10'10\"", note: "Front-facing windows" },
      { name: "Bedroom", dims: "13'9\" × 16'1\"", note: "Private exterior door, near laundry" },
      { name: "Bedroom", dims: "12'10\" × 11'6\"", note: "Next to the main-floor bath" },
      { name: "Bath", dims: "9'7\" × 7'10\"", note: "Tub and vanity" },
      { name: "Foyer", dims: "4'9\" × 10'10\"" },
      { name: "Garage", dims: "20'2\" × 22'4\"", note: "Attached two-car" },
    ],
  },
  {
    id: "l2",
    label: "2nd floor",
    summary: "Primary suite and two more bedrooms, each with a walk-in closet",
    image: asset("floorplan_2.webp"),
    rooms: [
      { name: "Primary bedroom", dims: "13'1\" × 15'5\"", note: "Two walk-in closets, en-suite bath" },
      { name: "Primary bath", dims: "6'4\" × 7'5\" + 5'3\" × 7'5\"", note: "Vanity room and separate shower" },
      { name: "Bedroom", dims: "13'1\" × 15'5\"", note: "Near the split hall bath" },
      { name: "Bedroom", dims: "10'10\" × 15'7\"", note: "Walk-in closet and private bath" },
      { name: "Hall bath", dims: "5'0\" × 7'8\" + 4'1\" × 7'8\"", note: "Tub room with separate vanity" },
      { name: "Hall", dims: "18'5\" × 3'4\"" },
    ],
  },
  {
    id: "all",
    label: "Both floors",
    summary: "The full 2,782 sq ft layout at a glance",
    image: asset("floorplan_together.webp"),
    rooms: [],
  },
];
