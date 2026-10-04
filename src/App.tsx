import { useState } from "react";
import { Amenities } from "./components/Amenities";
import { Audience } from "./components/Audience";
import { Faq } from "./components/Faq";
import { FloorPlan } from "./components/FloorPlan";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Inquiry } from "./components/Inquiry";
import { Lightbox } from "./components/Lightbox";
import { Location } from "./components/Location";
import { MidTerm } from "./components/MidTerm";
import { Nav } from "./components/Nav";
import { Residence } from "./components/Residence";

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Nav />
      <main>
        <Hero onOpenGallery={() => setLightboxIndex(0)} />
        <MidTerm />
        <Audience />
        <Residence />
        <Gallery onOpen={setLightboxIndex} />
        <FloorPlan />
        <Amenities />
        <Location />
        <Faq />
        <Inquiry />
      </main>
      <Footer />
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onChange={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
