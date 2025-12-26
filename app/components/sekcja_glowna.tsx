"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Transport Krajowy",
    desc: "Szybka i bezpieczna dostawa na terenie całego kraju. Standard Next-Day.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
    link: "/uslugi/transport-krajowy",
  },
  {
    title: "Transport Międzynarodowy",
    desc: "Specjaliści na trasie Polska — Wielka Brytania. Pełna obsługa celna.",
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075",
    link: "/uslugi/transport-miedzynarodowy",
  },
  {
    title: "Spedycja i Logistyka",
    desc: "Kompleksowe zarządzanie łańcuchem dostaw z centrum w Leźnie.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070",
    link: "/uslugi/spedycja",
  },
];

export default function Hero() {
  // HOOKI MUSZĄ BYĆ TUTAJ (wewnątrz funkcji)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      duration: 25, 
      dragFree: true, 
      containScroll: "trimSnaps" 
    }, 
    [Autoplay({ delay: 7000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section 
      className="relative w-full h-[75vh] min-h-[550px] bg-white overflow-hidden group touch-pan-y" 
      ref={emblaRef}
    >
      <div className="flex h-full">
        {SERVICES.map((service, index: number) => (
          <div
            key={index}
            className="relative flex-[0_0_100%] min-w-0 h-full overflow-hidden"
          >
            {/* TŁO */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.img}
                className="w-full h-full object-cover opacity-75 animate-slow-zoom"
                alt={service.title}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>

            {/* TREŚĆ */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center text-center">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full mb-6 mx-auto w-fit shadow-lg">
                <span className="font-black uppercase italic tracking-widest text-[10px]">
                  Standard Wantranz
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                {service.title}
              </h1>

              <p className="text-white max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed drop-shadow-md opacity-95 mb-10">
                {service.desc}
              </p>

              <div className="flex justify-center gap-4">
                <Link
                  href={service.link}
                  className="bg-red-600 text-white px-10 py-4 rounded-full font-black uppercase italic text-[11px] hover:bg-black transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
                >
                  Szczegóły <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#kontakt"
                  className="bg-white text-black border border-gray-100 px-10 py-4 rounded-full font-black uppercase italic text-[11px] hover:bg-gray-50 transition-all shadow-md"
                >
                  Wycena
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* STRZAŁKI NAWIGACYJNE */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-red-600 hover:border-red-600 hidden md:flex"
        aria-label="Poprzedni slajd"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-red-600 hover:border-red-600 hidden md:flex"
        aria-label="Następny slajd"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {scrollSnaps.map((_, index: number) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === selectedIndex ? "w-10 bg-red-600 shadow-md" : "w-2.5 bg-gray-400/50"
            }`}
            aria-label={`Slajd ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
          transform: translateZ(0); /* Akceleracja sprzętowa dla mobile */
        }
        
        /* Zatrzymanie animacji podczas interakcji dla płynności */
        section:active .animate-slow-zoom {
          animation-play-state: paused;
        }

        @keyframes slow-zoom {
          from { transform: scale(1) translateZ(0); }
          to { transform: scale(1.12) translateZ(0); }
        }
      `}</style>
    </section>
  );
}