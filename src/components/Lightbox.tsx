import { useCallback, useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos, sized } from "../data/photos";

type Props = {
  index: number;
  onClose: () => void;
  onChange: Dispatch<SetStateAction<number | null>>;
};

export function Lightbox({ index, onClose, onChange }: Props) {
  const photo = photos[index];
  const touchStart = useRef<number | null>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => onChange((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [onChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [go, onClose]);

  useEffect(() => {
    thumbsRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [index]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-50 flex animate-[fadeUp_0.25s_ease-out] flex-col bg-[#0e0f0f]/97 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-4 text-white sm:px-8">
        <p className="text-sm tabular-nums text-white/60">
          {index + 1} <span className="text-white/30">/ {photos.length}</span>
        </p>
        <p className="hidden text-[11px] uppercase tracking-[0.22em] text-white/50 sm:block">{photo.category}</p>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20"
        onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStart.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        <img
          key={photo.src}
          src={sized(photo.src, 2200)}
          alt={photo.alt}
          className="max-h-full max-w-full animate-[fadeUp_0.35s_ease-out] rounded-lg object-contain"
        />
        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-6 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:flex"
          aria-label="Next photo"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <p className="px-5 pt-5 text-center text-sm text-white/80">{photo.caption}</p>

      <div ref={thumbsRef} className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-5 sm:justify-center">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            data-index={i}
            onClick={() => onChange(i)}
            className={`h-14 w-20 shrink-0 overflow-hidden rounded-md transition ${
              i === index ? "opacity-100 ring-2 ring-white" : "opacity-40 hover:opacity-80"
            }`}
            aria-label={`Show photo ${i + 1}`}
          >
            <img src={sized(p.src, 200)} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
