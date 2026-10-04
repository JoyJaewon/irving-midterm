import { ArrowUpRight } from "lucide-react";
import { locations, property } from "../data/property";
import { Icon } from "./Icon";
import { Reveal, Section, SectionHeading } from "./ui";

export function Location() {
  const query = encodeURIComponent(property.mapQuery);

  return (
    <Section id="location" className="bg-sand/60">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Location"
            title={
              <>
                Minutes from the hospital, <em className="text-oak">the office and the airport.</em>
              </>
            }
            body={`${property.neighborhood}. Oak-lined streets with quick access to SH 183, Las Colinas and both DFW airports.`}
          />

          <div className="mt-12 space-y-10">
            {locations.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 80}>
                <div className="flex items-center gap-3">
                  <Icon name={group.icon} size={18} className="text-oak" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink">{group.group}</p>
                </div>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {group.places.map((place) => (
                    <li key={place.name} className="flex items-baseline justify-between gap-6 py-3.5">
                      <span className="text-sm text-ink-soft">{place.name}</span>
                      <span className="shrink-0 font-display text-xl tabular-nums text-ink">{place.time}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <p className="text-xs text-muted">Approximate drive times without traffic.</p>
          </div>
        </div>

        <Reveal delay={100} className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-line bg-white">
            <iframe
              title="Map of 1801 Green Oaks Dr, Irving, TX"
              src={`https://www.google.com/maps?q=${query}&z=14&output=embed`}
              className="aspect-[4/5] w-full grayscale-[0.35] sm:aspect-[4/3] lg:aspect-[4/5]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center justify-between gap-4 p-6">
              <div>
                <p className="text-sm font-medium text-ink">{property.address.street}</p>
                <p className="text-sm text-muted">
                  {property.address.city}, {property.address.state} {property.address.zip}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-ink transition hover:border-ink"
              >
                Directions
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
