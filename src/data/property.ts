// Facts sourced from NTREIS MLS #21370827. Edit contact, terms and furnishing details before publishing.

export const property = {
  name: "The Green Oaks House",
  address: {
    street: "1801 Green Oaks Dr",
    city: "Irving",
    state: "TX",
    zip: "75061",
  },
  neighborhood: "Bell Manor · Historic Hospital District",
  mapQuery: "1801 Green Oaks Dr, Irving, TX 75061",

  stats: [
    { value: "5", label: "Bedrooms" },
    { value: "3.5", label: "Bathrooms" },
    { value: "2,782", label: "Sq ft" },
    { value: "0.28", label: "Acre corner lot" },
    { value: "2", label: "Car garage" },
  ],

  specs: [
    { label: "Home type", value: "Two-story single-family, painted brick" },
    { label: "Interior", value: "2,782 sq ft · wood flooring throughout" },
    { label: "Lot", value: "0.28 acre corner lot, mature oaks" },
    { label: "Heating & cooling", value: "New central HVAC (2022), ceiling fans" },
    { label: "Parking", value: "Attached 2-car garage, rear entry" },
    { label: "Schools", value: "Irving ISD — Lively · Dezavala · Irving High" },
  ],

  renovation: [
    "Kitchen with quartz countertops and gas range",
    "Updated bathrooms throughout",
    "New flooring, windows and lighting",
    "New HVAC system and fresh paint",
  ],

  contact: {
    name: "Your Name",
    company: "Green Oaks Stays",
    email: "jaewonhan20@gmail.com",
    inquiryEmail: "jaewonhan20@gmail.com",
  },

  terms: {
    minimumStay: "30 nights",
    typicalStay: "1–12 months",
    monthlyRate: "Inquire for rates",
  },

  photosArePlaceholders: false,
} as const;

export type Audience = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  points: string[];
};

export const audiences: Audience[] = [
  {
    id: "healthcare",
    kicker: "Traveling healthcare",
    title: "Nurses, physicians & clinical teams",
    body: "Set in Irving's Historic Hospital District — a short drive to Baylor Scott & White Medical Center – Irving, with Dallas' Medical District within reach.",
    points: [
      "Quiet bedrooms for rest after night shifts",
      "Room for a travel team to share",
      "Month-to-month flexibility around contracts",
    ],
  },
  {
    id: "insurance",
    kicker: "Insurance & ALE housing",
    title: "Displaced families & policyholders",
    body: "A move-in ready home for families during repairs or a rebuild. Five bedrooms and a full kitchen keep everyday routines intact.",
    points: [
      "Direct billing with carriers & housing providers",
      "Ready on short notice, fully stocked",
      "Two bedrooms downstairs for multi-generational stays",
    ],
  },
  {
    id: "corporate",
    kicker: "Corporate & project housing",
    title: "Relocations, rotations & project crews",
    body: "Minutes to Las Colinas and both DFW airports. A dedicated workspace and fast Wi-Fi make it easy to work from home between site days.",
    points: [
      "Invoicing for company-paid stays",
      "Private bedrooms for each team member",
      "Garage parking plus driveway space",
    ],
  },
];

export const midtermFeatures = [
  {
    icon: "sofa",
    title: "Fully furnished",
    body: "Designer furnishings, linens, cookware and essentials — bring your suitcase.",
  },
  {
    icon: "wifi",
    title: "Utilities & Wi-Fi included",
    body: "Electricity, gas, water, trash and high-speed internet in one monthly rate.",
  },
  {
    icon: "calendar",
    title: "Flexible 30+ night stays",
    body: "Monthly terms that follow your assignment, claim or project timeline.",
  },
  {
    icon: "receipt",
    title: "Simple invoicing",
    body: "Direct billing for insurance carriers, staffing agencies and employers.",
  },
  {
    icon: "key",
    title: "Self check-in",
    body: "Keyless entry and a digital home guide so you can arrive any time.",
  },
  {
    icon: "sparkles",
    title: "Professionally maintained",
    body: "Pre-arrival deep clean with optional recurring housekeeping.",
  },
] as const;

export const amenities = [
  {
    group: "Kitchen & dining",
    icon: "chef",
    items: [
      "Quartz countertops, gas range",
      "Dishwasher, microwave, disposal",
      "Cookware, dishes & small appliances",
      "Coffee maker & pantry basics",
      "Dining table seats ten + breakfast nook",
    ],
  },
  {
    group: "Bedrooms & bath",
    icon: "bed",
    items: [
      "Five furnished bedrooms",
      "Walk-in closets upstairs",
      "Premium linens & blackout curtains",
      "Fresh towels & toiletries at arrival",
      "Two en-suite bathrooms",
    ],
  },
  {
    group: "Work & connectivity",
    icon: "laptop",
    items: [
      "High-speed Wi-Fi",
      "Dedicated desk & ergonomic chair",
      "Smart TV with streaming",
      "Flex room for a private office",
    ],
  },
  {
    group: "Laundry & home",
    icon: "laundry",
    items: [
      "Stacked washer & dryer",
      "Iron, steamer & cleaning supplies",
      "Central heat & air, ceiling fans",
    ],
  },
  {
    group: "Outdoor & parking",
    icon: "trees",
    items: [
      "Covered cedar pavilion & patio",
      "Private upstairs balcony",
      "Quarter-acre corner lot under oaks",
      "Attached 2-car garage",
    ],
  },
  {
    group: "Safety & access",
    icon: "shield",
    items: [
      "Keyless smart lock entry",
      "Smoke & CO detectors",
      "Fire extinguisher & first-aid kit",
      "No HOA restrictions",
    ],
  },
] as const;

export const locations = [
  {
    group: "Healthcare",
    icon: "hospital",
    places: [
      { name: "Baylor Scott & White Medical Center – Irving", time: "3 min" },
      { name: "Medical City Las Colinas", time: "12 min" },
      { name: "Dallas Medical District (Parkland, UT Southwestern)", time: "15 min" },
    ],
  },
  {
    group: "Business",
    icon: "building",
    places: [
      { name: "Las Colinas Urban Center", time: "10 min" },
      { name: "Toyota Music Factory", time: "10 min" },
      { name: "Downtown Dallas", time: "18 min" },
    ],
  },
  {
    group: "Travel",
    icon: "plane",
    places: [
      { name: "DFW International Airport", time: "15 min" },
      { name: "Dallas Love Field", time: "15 min" },
      { name: "SH 183 / Airport Fwy access", time: "2 min" },
    ],
  },
] as const;

export const faqs = [
  {
    q: "What is the minimum stay?",
    a: "Stays start at 30 nights. Most guests book between one and twelve months, and extensions are easy when your assignment or claim runs longer.",
  },
  {
    q: "Do you work directly with insurance companies?",
    a: "Yes. We work with insurance carriers, adjusters and ALE housing providers, and can invoice the carrier directly so the policyholder doesn't need to front the cost.",
  },
  {
    q: "What's included in the monthly rate?",
    a: "Furnishings, all utilities, high-speed Wi-Fi, streaming TV, a fully stocked kitchen, linens and towels, and a professional clean before arrival.",
  },
  {
    q: "Can a traveling healthcare team share the home?",
    a: "Absolutely. With five private bedrooms across two floors and three and a half baths, the home works well for small clinical teams on the same contract.",
  },
  {
    q: "Are pets allowed?",
    a: "Well-behaved pets may be considered on a case-by-case basis — especially for families displaced by an insurance claim. Ask us when you inquire.",
  },
  {
    q: "How quickly can we move in?",
    a: "The home is kept move-in ready. Depending on availability, we can often accommodate arrivals within a few days of a confirmed booking.",
  },
] as const;
