'use client';
import { MapPin, ArrowRight, Globe2 } from "lucide-react";

const mainRoutes = [
  { country: "Niemcy", code: "DE", focus: true },
  { country: "Belgia", code: "BE", focus: true },
  { country: "Holandia", code: "NL", focus: true },
  { country: "Luksemburg", code: "LU", focus: true },
  { country: "Francja", code: "FR", focus: false },
  { country: "Czechy", code: "CZ", focus: false },
  { country: "Słowacja", code: "SK", focus: false },
  { country: "Austria", code: "AT", focus: false },
];

export default function RoutesSection() {
  return (
    <section id="kierunki" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEWA STRONA: Opis i Specjalizacja */}
          <div>
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 text-black">
              Zasięg Działania
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none text-black">
              Obsługujemy całą <br /> Unię Europejską
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-black">
              Choć nasze zestawy można spotkać na drogach całej Europy, naszą główną specjalizacją jest relacja <span className="text-black font-bold">Polska – Kraje Beneluksu oraz Niemcy</span>. 
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border-l-4 border-blue-600">
                <Globe2 className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-sm tracking-tight">Główny korytarz transportowy</h4>
                  <p className="text-gray-500 text-sm">Regularne linie: PL — DE — NL — BE — LU</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest pl-2 text-black">
                Dostawy Express oraz Standard (FTL/LTL)
              </p>
            </div>
          </div>

          {/* PRAWA STRONA: Siatka krajów */}
          <div className="relative">
            {/* Dekoracyjne tło w formie kół */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
            
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {mainRoutes.map((route) => (
                <div 
                  key={route.code}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    route.focus 
                    ? "bg-white border-blue-100 shadow-md scale-105" 
                    : "bg-gray-100/50 border-transparent hover:bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs text-gray-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {route.code}
                    </div>
                    <span className="font-bold text-gray-900 uppercase tracking-tight text-sm">
                      {route.country}
                    </span>
                  </div>
                  {route.focus && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" title="Kierunek priorytetowy" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA pod mapą */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="h-[1px] w-12 bg-gray-300" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] text-black">
                I wiele innych
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}