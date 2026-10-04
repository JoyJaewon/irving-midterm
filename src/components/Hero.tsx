import { ArrowRight, Images, MapPin } from "lucide-react";
import { heroPhoto, photos, sized } from "../data/photos";
import { property } from "../data/property";

export function Hero({ onOpenGallery }: { onOpenGallery: () => void }) {
  const { address, stats } = property;

  return (
    <section id="top" className="relative">
      <div className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={sized(heroPhoto, 2400)}
          alt="Front of the Green Oaks House at dusk"
          className="absolute inset-0 h-full w-full animate-[heroZoom_14s_ease-out_forwards] object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-36 pt-32 sm:px-8 lg:pb-44">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Fully furnished · Stays from {property.terms.minimumStay}
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
              A five-bedroom home, <em className="text-white/85">ready for your next stay.</em>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Mid-term furnished housing in Irving's Historic Hospital District for traveling healthcare professionals, insurance
              relocations and corporate teams.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#inquire"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-paper"
              >
                Request availability
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#floorplan"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View floor plan
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-36 right-8 hidden items-center gap-3 lg:bottom-44 lg:flex">
          <span className="inline-flex items-center gap-1.5 text-xs text-white/75">
            <MapPin size={14} />
            {address.street}, {address.city}
          </span>
          <button
            type="button"
            onClick={onOpenGallery}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-md transition hover:bg-black/45"
          >
            <Images size={15} />
            View all {photos.length} photos
          </button>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-7xl px-5 sm:px-8 lg:-mt-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[0_30px_80px_-40px_rgba(23,25,26,0.35)] sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-6 lg:py-8">
              <p className="font-display text-4xl leading-none text-ink lg:text-[2.75rem]">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">{stat.label}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center bg-oak px-6 py-6 text-paper lg:py-8">
            <p className="text-xs uppercase tracking-[0.16em] text-white/60">Monthly</p>
            <p className="mt-2 font-display text-2xl leading-tight">{property.terms.monthlyRate}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
