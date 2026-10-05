import { shots, sized } from "../data/photos";
import { property } from "../data/property";
import { Reveal, Section, SectionHeading } from "./ui";

export function Residence() {
  return (
    <Section className="bg-sand/60">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <Reveal>
            <img
              src={sized(shots.kitchen1.src, 1400)}
              alt={shots.kitchen1.alt}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover sm:w-[82%]"
            />
          </Reveal>
          <Reveal delay={150} className="absolute -bottom-10 right-0 hidden w-[46%] sm:block">
            <img
              src={sized(shots.bathroom1.src, 900)}
              alt={shots.bathroom1.alt}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover ring-8 ring-[#f3f0e9]"
            />
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="The residence"
            title={
              <>
                Renovated top to bottom, <em className="text-oak">on a quiet oak-lined corner.</em>
              </>
            }
            body="A true five-bedroom in Bell Manor, rebuilt inside in 2022. Two bedrooms and a bath on the main floor give guests or a second household real privacy, while the primary suite and two more bedrooms share the upper level."
          />

          <Reveal delay={100}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {property.renovation.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-line bg-white/70 px-4 py-3.5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {property.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-[9rem_1fr] gap-4 py-3.5 text-sm sm:grid-cols-[11rem_1fr]">
                  <dt className="text-muted">{spec.label}</dt>
                  <dd className="text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
