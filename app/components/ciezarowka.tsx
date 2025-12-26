"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FleetHotspotsFixed() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const mainImage = "/truck.webp";

  const features = [
    {
      id: "trailer",
      label: "Naczepa",
      pos: "top-[40%] left-[85%]", 
      thumbnail: "/R.webp",
      shortDesc: "Certyfikowana naczepa XL o podwyższonej wytrzymałości mieszcząca 33 palety."
    },
    {
      id: "cabin",
      label: "Kabina",
      pos: "top-[30%] left-[17%]",
      thumbnail: "/wnetrze.webp",
      shortDesc: "Nowoczesny ciągnik Euro 6 wyposażony w zaawansowane systemy bezpieczeństwa."
    }
  ];

  return (
    /* 1. USUNIĘTO overflow-hidden, DODANO z-20 aby sekcja była nad innymi */
    <section className="relative w-full bg-white py-16 z-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <div className="mb-8">
          <h2 className="text-red-600 font-black uppercase tracking-widest text-xs mb-2">Sprawdź detale</h2>
          <h3 className="text-2xl md:text-4xl font-black uppercase italic text-gray-900">
            Nasza Flota <span className="text-red-600">z bliska</span>
          </h3>
        </div>

        {/* 2. KONTENER ZEWNĘTRZNY BEZ overflow-hidden */}
        <div className="relative w-full h-auto">
          
          {/* 3. TYLKO TUTAJ overflow-hidden (dla zaokrąglonych rogów zdjęcia) */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={mainImage}
              alt="Flota Wantranz"
              className="w-full h-auto block select-none"
            />
          </div>

          {/* WARSTWA PUNKTÓW - może teraz swobodnie wystawać */}
          <div className="absolute inset-0 pointer-events-none">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute ${f.pos} -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-auto`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(activeId === f.id ? null : f.id);
                  }}
                  className="relative flex h-12 w-12 items-center justify-center group"
                >
                  <span className={`animate-ping absolute h-full w-full rounded-full bg-red-600 opacity-60 ${activeId === f.id ? "hidden" : ""}`} />
                  <span className={`relative flex items-center justify-center rounded-full h-7 w-7 border-[3px] border-white shadow-lg transition-all duration-300 ${activeId === f.id ? "bg-gray-900 scale-125" : "bg-red-600"}`}>
                    {activeId === f.id ? <X className="w-3 h-3 text-white" /> : <Plus className="w-4 h-4 text-white" />}
                  </span>
                </button>

                {/* DYMEK - dzięki usunięciu overflow-hidden może wyjść poza sekcję */}
                {activeId === f.id && (
                  <div className="absolute bottom-full mb-5 left-1/2 -translate-x-1/2 w-64 md:w-72 bg-white p-2 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-200 z-50">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden bg-gray-200 mb-3">
                        <img src={f.thumbnail} alt={f.label} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-center text-xs font-bold text-gray-800 px-2 pb-1 leading-tight italic">
                      {f.shortDesc}
                    </p>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {activeId && (
            <div className="fixed inset-0 z-30" onClick={() => setActiveId(null)} />
          )}
        </div>
      </div>
    </section>
  );
}