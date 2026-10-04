import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { floorLevels } from "../data/floorplan";
import { Reveal, Section, SectionHeading } from "./ui";

export function FloorPlan() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const level = floorLevels[levelIndex];
  const hasRooms = level.rooms.length > 0;

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(false);
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [zoomed]);

  return (
    <Section id="floorplan" className="bg-white">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeading
          eyebrow="Floor plan"
          title={
            <>
              Two levels, <em className="text-oak">plenty of privacy.</em>
            </>
          }
          body="Two bedrooms on the main floor give guests a wing of their own, while the primary suite and two more bedrooms share the upper level."
        />
        <Reveal delay={100}>
          <div role="tablist" className="inline-flex rounded-full border border-line bg-paper p-1.5">
            {floorLevels.map((l, i) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={i === levelIndex}
                onClick={() => setLevelIndex(i)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-colors sm:px-6 ${
                  i === levelIndex ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className={`mt-12 grid overflow-hidden rounded-3xl border border-line ${hasRooms ? "lg:grid-cols-[1.6fr_1fr]" : ""}`}>
          <div className="bg-white p-5 sm:p-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-3xl text-ink">{level.label}</p>
                <p className="mt-1 text-sm text-muted">{level.summary}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setZoomed(true)}
              className="group relative mt-6 block w-full cursor-zoom-in"
              aria-label={`Enlarge ${level.label} floor plan`}
            >
              <img key={level.id} src={level.image} alt={`${level.label} floor plan`} className="mx-auto w-full max-w-4xl animate-[fadeUp_0.5s_ease-out]" />
              <span className="absolute right-0 top-0 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/90 px-3 py-1.5 text-xs text-ink-soft opacity-0 transition group-hover:opacity-100 max-lg:opacity-100">
                <Maximize2 size={13} />
                Enlarge
              </span>
            </button>
          </div>

          {hasRooms && (
            <div className="border-t border-line bg-paper lg:border-l lg:border-t-0">
              <ul key={level.id} className="divide-y divide-line">
                {level.rooms.map((room, i) => (
                  <li
                    key={`${room.name}-${i}`}
                    className="flex animate-[fadeUp_0.4s_ease-out_both] items-start justify-between gap-4 px-6 py-4 sm:px-8"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    <span>
                      <span className="block text-sm font-medium text-ink">{room.name}</span>
                      {room.note && <span className="mt-0.5 block text-xs leading-relaxed text-muted">{room.note}</span>}
                    </span>
                    {room.dims && <span className="shrink-0 pt-0.5 text-right text-xs tabular-nums text-ink-soft">{room.dims}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Reveal>

      <p className="mt-6 text-xs leading-relaxed text-muted">Measurements are approximate and provided for reference only.</p>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${level.label} floor plan`}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex animate-[fadeUp_0.25s_ease-out] items-center justify-center bg-white p-4 sm:p-10"
        >
          <img src={level.image} alt={`${level.label} floor plan`} className="max-h-full max-w-full object-contain" />
          <button
            type="button"
            onClick={() => setZoomed(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-paper"
            aria-label="Close floor plan"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </Section>
  );
}
