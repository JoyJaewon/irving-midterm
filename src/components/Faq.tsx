import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs, property } from "../data/property";
import { Reveal, Section, SectionHeading } from "./ui";

const terms = [
  { label: "Minimum stay", value: property.terms.minimumStay },
  { label: "Typical stay", value: property.terms.typicalStay },
  { label: "Billing", value: "Monthly · direct bill available" },
  { label: "Included", value: "Utilities, Wi-Fi, furnishings" },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Stay terms"
            title={
              <>
                Clear terms, <em className="text-oak">no surprises.</em>
              </>
            }
          />
          <Reveal delay={100}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {terms.map((t) => (
                <div key={t.label} className="bg-white p-6">
                  <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">{t.label}</dt>
                  <dd className="mt-2 font-display text-2xl leading-tight text-ink">{t.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ul className="border-t border-line">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-base font-medium text-ink sm:text-lg">{faq.q}</span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? "rotate-45 border-ink bg-ink text-paper" : "border-line text-ink"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 leading-relaxed text-ink-soft">{faq.a}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
