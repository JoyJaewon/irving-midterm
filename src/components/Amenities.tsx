import { amenities } from "../data/property";
import { Icon } from "./Icon";
import { Reveal, Section, SectionHeading } from "./ui";

export function Amenities() {
  return (
    <Section id="amenities">
      <SectionHeading
        eyebrow="What's included"
        title={
          <>
            Move in with a suitcase. <em className="text-oak">We've handled the rest.</em>
          </>
        }
        body="Every stay comes furnished and stocked, so the first night feels as settled as the thirtieth."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((group, i) => (
          <Reveal key={group.group} delay={(i % 3) * 80} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(23,25,26,0.3)]">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-oak-soft text-oak">
                  <Icon name={group.icon} size={20} />
                </div>
                <h3 className="text-base font-medium text-ink">{group.group}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="mt-2 h-px w-3 shrink-0 bg-ink/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
