import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { property } from "../data/property";

const links = [
  { href: "#stay", label: "Mid-term" },
  { href: "#gallery", label: "Gallery" },
  { href: "#floorplan", label: "Floor plan" },
  { href: "#amenities", label: "Amenities" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? "border-b border-line/80 bg-paper/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a href="#top" className={`flex items-baseline gap-2 transition-colors ${solid ? "text-ink" : "text-white"}`}>
          <span className="font-display text-2xl leading-none">Green Oaks</span>
          <span className={`hidden text-[11px] uppercase tracking-[0.2em] sm:inline ${solid ? "text-muted" : "text-white/70"}`}>Irving · TX</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${solid ? "text-ink-soft hover:text-ink" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#inquire"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors sm:inline-flex ${
              solid ? "bg-ink text-paper hover:bg-oak" : "bg-white text-ink hover:bg-paper"
            }`}
          >
            Check availability
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${solid ? "text-ink" : "text-white"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-8 pt-4 lg:hidden">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-display text-3xl text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#inquire"
            onClick={() => setOpen(false)}
            className="mt-6 flex w-full justify-center rounded-full bg-ink py-3.5 text-sm font-medium text-paper"
          >
            Check availability
          </a>
          <p className="mt-6 text-center text-xs text-muted">
            {property.address.street}, {property.address.city}, {property.address.state}
          </p>
        </div>
      )}
    </header>
  );
}
