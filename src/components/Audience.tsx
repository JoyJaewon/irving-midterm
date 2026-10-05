import { useState } from "react";
import { Briefcase, Check, ShieldCheck, Stethoscope } from "lucide-react";
import { audiences } from "../data/property";
import { shots, sized } from "../data/photos";
import { Reveal, Section } from "./ui";

const audienceIcons: Record<string, typeof Stethoscope> = {
  healthcare: Stethoscope,
  insurance: ShieldCheck,
  corporate: Briefcase,
};

const audiencePhotos = [shots.living3, shots.bedroom2, shots.dining1];

export function Audience() {
  const [active, setActive] = useState(0);
  const current = audiences[active];
  const CurrentIcon = audienceIcons[current.id];

  return (
    <Section className="bg-oak-deep text-paper">
      <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Who it's for
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Trusted housing for the people <em className="text-white/70">who keep Dallas–Fort Worth running.</em>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div role="tablist" className="no-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/15 p-1.5">
            {audiences.map((a, i) => (
              <button
                key={a.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-colors ${
                  i === active ? "bg-paper text-ink" : "text-white/70 hover:text-white"
                }`}
              >
                {a.kicker}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
          {audiencePhotos.map((photo, i) => (
            <img
              key={photo.src}
              src={sized(photo.src, 1400)}
              alt={photo.alt}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
        </div>

        <div key={current.id} className="animate-[fadeUp_0.6s_ease-out] p-8 sm:p-12 lg:p-16">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
            <CurrentIcon size={22} strokeWidth={1.5} />
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-white/50">{current.kicker}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{current.title}</h3>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">{current.body}</p>
          <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
            {current.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-white/85">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check size={12} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}