import { useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { categories, photos, sized, type PhotoCategory } from "../data/photos";
import { property } from "../data/property";
import { Reveal, Section, SectionHeading } from "./ui";

type Filter = "All" | PhotoCategory;

const spanPattern = ["col-span-2 row-span-2", "", "", "lg:row-span-2", "", "col-span-2", "", ""];

export function Gallery({ onOpen }: { onOpen: (index: number) => void }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = useMemo(
    () => ["All", ...categories.filter((c) => photos.some((p) => p.category === c))],
    [],
  );

  const visible = useMemo(
    () => photos.map((photo, index) => ({ photo, index })).filter(({ photo }) => filter === "All" || photo.category === filter),
    [filter],
  );

  return (
    <Section id="gallery">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Take a look <em className="text-oak">inside.</em>
            </>
          }
          body="Light-filled rooms, warm wood floors and furnishings chosen for long, comfortable stays."
        />
        <Reveal delay={100}>
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0 lg:justify-end">
            {filters.map((f) => {
              const count = f === "All" ? photos.length : photos.filter((p) => p.category === f).length;
              const active = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-ink bg-ink text-paper" : "border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {f}
                  <span className={`ml-1.5 text-xs ${active ? "text-white/60" : "text-muted"}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-2 sm:auto-rows-[220px] sm:gap-3 lg:grid-cols-4 lg:auto-rows-[260px]">
        {visible.map(({ photo, index }, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => onOpen(index)}
            className={`group relative animate-[fadeUp_0.5s_ease-out_both] overflow-hidden rounded-xl bg-sand text-left ${spanPattern[i % spanPattern.length]}`}
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <img
              src={sized(photo.src, 1200)}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{photo.category}</p>
                <p className="mt-1 text-sm text-white">{photo.caption}</p>
              </div>
              <Expand size={18} className="shrink-0 text-white/80" />
            </div>
          </button>
        ))}
      </div>

      {property.photosArePlaceholders && (
        <p className="mt-6 text-xs text-muted">Images shown are representative of the furnishing style.</p>
      )}
    </Section>
  );
}
