// "use client";
// import { useState, useEffect, useCallback } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const SLIDES = [
// {
//   title: "Zaufany Partner",
//   img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
// },
//   { title: "Nowoczesna Flota", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075" },
//   { title: "Logistyka 4.0", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" },
// ];

// export default function Hero() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
//   const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-6 group">
//       <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-xl" ref={emblaRef}>
//         <div className="flex">
//           {SLIDES.map((slide, index) => (
//             <div key={index} className="flex-[0_0_100%] relative h-[500px] md:h-[700px]">
//               <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" alt={slide.title} />
//               <div className="absolute inset-0 bg-black/30" />
//               <div className="absolute bottom-20 left-10 md:left-20 text-white z-10">
//                 <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
//                   {slide.title}
//                 </h2>
//                 <button type="button" className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform">
//                   Odkryj teraz
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button type="button" onClick={scrollPrev} aria-label="Poprzedni slajd" className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
//           <span aria-hidden="true">←</span>
//         </button>

//         <button type="button" onClick={scrollNext} aria-label="Następny slajd" className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
//           <span aria-hidden="true">→</span>
//         </button>

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//           {scrollSnaps.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => scrollTo(index)}
//               aria-label={`Slajd ${index + 1}`}
//               className={`h-1.5 transition-all duration-500 rounded-full ${index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const SLIDES = [
  { title: "Zaufany Partner", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070" },
  { title: "Nowoczesna Flota", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075" },
  { title: "Logistyka 4.0", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070" },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    /* Zmieniono: Usuwamy px-4 na mobile, dodajemy py-0 na mobile. mx-auto centruje na desktopie. */
    <section className="w-full max-w-7xl mx-auto md:px-4 md:py-6 group">
      <div 
        className="relative overflow-hidden md:rounded-[2.5rem] bg-gray-200 shadow-xl" 
        ref={emblaRef}
      >
        <div className="flex">
          {SLIDES.map((slide, index) => (
            /* h-[500px] na mobile, h-[700px] na desktopie */
            <div key={index} className="flex-[0_0_100%] relative h-[500px] md:h-[700px]">
              <img src={slide.img} className="absolute inset-0 w-full h-full object-cover" alt={slide.title} />
              <div className="absolute inset-0 bg-black/30" />
              
              {/* Tekst: Wycentrowany na mobile (items-center text-center), od lewej na desktopie */}
              <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:pb-20 md:px-20 text-center md:text-left items-center md:items-start text-white z-10">
                <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-6">
                  {slide.title}
                </h2>
                <button type="button" className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase text-sm hover:scale-105 transition-transform">
                  Odkryj teraz
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Strzałki: Ukryte na mobile (hidden md:flex) dla lepszego UX */}
        <button type="button" onClick={scrollPrev} aria-label="Poprzedni slajd" className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span aria-hidden="true">←</span>
        </button>

        <button type="button" onClick={scrollNext} aria-label="Następny slajd" className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span aria-hidden="true">→</span>
        </button>

        {/* Kropki: Zawsze na środku */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Slajd ${index + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}