"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SERVICES = [
  {
    title: "Transport Krajowy",
    desc: "Szybka i bezpieczna dostawa na terenie całego kraju.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
    link: "/uslugi/transport-krajowy",
  },
  {
    title: "Transport Międzynarodowy",
    desc: "Obsługujemy całą Europę. Profesjonalna flota.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075",
    link: "/uslugi/transport-miedzynarodowy",
  },
  {
    title: "Spedycja i Logistyka",
    desc: "Kompleksowe zarządzanie łańcuchem dostaw.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    link: "/uslugi/spedycja",
  },
];

export default function Hero() {
  // 1. Uproszczona konfiguracja - Embla sama dba o resize
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false }, 
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Ustawiamy kropki raz
    setScrollSnaps(emblaApi.scrollSnapList());
    
    // Reagujemy na zmianę slajdu
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full max-w-7xl mx-auto md:px-4 md:py-6 overflow-hidden">
      <div className="relative md:rounded-[2.5rem] bg-gray-900 shadow-2xl overflow-hidden" ref={emblaRef}>
        
        {/* 2. Krytyczna poprawka: Usuwamy skomplikowane transformacje na rzecz czystego flexa */}
        <div className="flex">
          {SERVICES.map((service, index: number) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-[500px] md:h-[700px]"
            >
              {/* 3. Optymalizacja obrazu: loading="eager" dla pierwszego slajdu przyspiesza LCP */}
              <img
                src={service.img}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                alt={service.title}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end pb-12 px-6 md:pb-20 md:px-20 text-center md:text-left items-center md:items-start text-white">
                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">
                  Nasze Usługi
                </span>
                <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-lg max-w-xl mb-8 font-medium">
                  {service.desc}
                </p>
                <div className="flex gap-4">
                  <a href={service.link} className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-blue-600 hover:text-white transition-all transform active:scale-95">
                    Szczegóły
                  </a>
                  <a href="#kontakt" className="hidden sm:block bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase text-xs hover:bg-white/20 transition-all">
                    Wycena
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strzałki - usunięto zbędne opacity animacje psujące wydajność na słabych GPU */}
        <button onClick={() => emblaApi?.scrollPrev()} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all" aria-label="Poprzedni">
          ←
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white transition-all" aria-label="Następny">
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {scrollSnaps.map((_, index: number) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-blue-500" : "w-2 bg-white/30"}`}
              aria-label={`Slajd ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}