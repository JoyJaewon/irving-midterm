import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { shots, sized } from "../data/photos";
import { property } from "../data/property";
import { Reveal } from "./ui";

const guestTypes = ["Healthcare professional", "Insurance / ALE housing", "Corporate / relocation", "Other"];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-white/50 focus:bg-white/10";

type Status = "idle" | "sending" | "sent" | "error";

export function Inquiry() {
  const [guestType, setGuestType] = useState(guestTypes[0]);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const field = (key: string) => String(data.get(key) || "").trim() || "—";

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${property.contact.inquiryEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Stay inquiry — ${property.address.street} (${guestType})`,
          _replyto: field("email"),
          _template: "table",
          _captcha: "false",
          _honey: String(data.get("_honey") || ""),
          Name: field("name"),
          Organization: field("organization"),
          Email: field("email"),
          Phone: field("phone"),
          "Guest type": guestType,
          "Move-in date": field("movein"),
          "Length of stay": field("length"),
          Guests: field("guests"),
          Message: field("message"),
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || json?.success === false || json?.success === "false") throw new Error(json?.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="inquire" className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 lg:py-32">
      <img
        src={sized(shots.exteriorDusk.src, 2000)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Check availability
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            Let's find dates <em className="text-white/70">that fit your stay.</em>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/65">
            Tell us a little about your placement, claim or project. We typically reply within one business day with availability
            and a monthly quote.
          </p>

          <div className="mt-12 space-y-4">
            <a href={`mailto:${property.contact.email}`} className="group flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition group-hover:bg-white group-hover:text-ink">
                <Mail size={17} strokeWidth={1.5} />
              </span>
              <span className="text-sm text-white/85">{property.contact.email}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-10">
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.18em] text-white/50">I'm inquiring as</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {guestTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setGuestType(type)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      guestType === type ? "border-white bg-white text-ink" : "border-white/15 text-white/70 hover:border-white/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input name="name" required className={inputClass} placeholder="Jane Smith" autoComplete="name" />
              </Field>
              <Field label="Company / agency">
                <input name="organization" className={inputClass} placeholder="Hospital, carrier or employer" autoComplete="organization" />
              </Field>
              <Field label="Email">
                <input name="email" type="email" required className={inputClass} placeholder="you@company.com" autoComplete="email" />
              </Field>
              <Field label="Phone">
                <input name="phone" type="tel" className={inputClass} placeholder="(214) 555-0123" autoComplete="tel" />
              </Field>
              <Field label="Move-in date">
                <input name="movein" type="date" className={`${inputClass} [color-scheme:dark]`} />
              </Field>
              <Field label="Length of stay">
                <select name="length" className={`${inputClass} [color-scheme:dark]`} defaultValue="1–3 months">
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>12+ months</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Number of guests">
                <input name="guests" type="number" min={1} max={10} className={inputClass} placeholder="e.g. 4" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Anything else we should know?">
                  <textarea
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Claim number, contract dates, pets, parking needs…"
                  />
                </Field>
              </div>
            </div>

            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-ink transition hover:bg-paper disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send inquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p role="status" aria-live="polite" className="mt-4 text-center text-xs">
              {status === "sent" && (
                <span className="inline-flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle2 size={14} />
                  Thank you — your inquiry was sent. We'll reply within one business day.
                </span>
              )}
              {status === "error" && (
                <span className="text-rose-300">
                  Something went wrong. Please email us at{" "}
                  <a href={`mailto:${property.contact.email}`} className="underline">
                    {property.contact.email}
                  </a>
                  .
                </span>
              )}
              {(status === "idle" || status === "sending") && (
                <span className="text-white/45">We'll reply within one business day.</span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-white/55">{label}</span>
      {children}
    </label>
  );
}
