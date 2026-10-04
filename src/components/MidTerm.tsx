import { midtermFeatures } from "../data/property";
import { Icon } from "./Icon";
import { Reveal, Section, SectionHeading } from "./ui";

export function MidTerm() {
  return (
    <Section id="stay">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Designed for mid-term living"
            title={
              <>
                Everything a month-long stay needs, <em className="text-oak">already in place.</em>
              </>
            }
            body="Hotels get small after the first week. The Green Oaks House gives guests a real home — private bedrooms, a full kitchen, laundry and a yard — with the simplicity of one monthly invoice."
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {midtermFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60} className="h-full">
              <div className="group h-full bg-paper p-8 transition-colors duration-300 hover:bg-white lg:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-oak-soft text-oak transition-colors group-hover:bg-oak group-hover:text-paper">
                  <Icon name={feature.icon} size={20} />
                </div>
                <h3 className="mt-6 text-lg font-medium text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
