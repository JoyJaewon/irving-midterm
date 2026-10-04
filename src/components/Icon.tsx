import {
  BedDouble,
  Building2,
  CalendarRange,
  ChefHat,
  Hospital,
  KeyRound,
  Laptop,
  Plane,
  Receipt,
  ShieldCheck,
  Sofa,
  Sparkles,
  Trees,
  WashingMachine,
  Wifi,
  type LucideProps,
} from "lucide-react";

const icons = {
  sofa: Sofa,
  wifi: Wifi,
  calendar: CalendarRange,
  receipt: Receipt,
  key: KeyRound,
  sparkles: Sparkles,
  chef: ChefHat,
  bed: BedDouble,
  laptop: Laptop,
  laundry: WashingMachine,
  trees: Trees,
  shield: ShieldCheck,
  hospital: Hospital,
  building: Building2,
  plane: Plane,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component strokeWidth={1.5} {...props} />;
}
