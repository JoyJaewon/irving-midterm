import { property } from "../data/property";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-12 text-white/50 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl text-white">{property.name}</p>
          <p className="mt-1 text-sm">
            {property.address.street}, {property.address.city}, {property.address.state} {property.address.zip}
          </p>
        </div>
        <div className="text-sm sm:text-right">
          <p>Furnished mid-term housing · 30+ night stays</p>
          <p className="mt-1">
            © {year} {property.contact.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
