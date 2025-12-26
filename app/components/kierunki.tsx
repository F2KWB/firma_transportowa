"use client";
import { Ship, Globe2, ChevronRight } from "lucide-react";

export default function RoutesSection() {
  return (
    <section id="kierunki" className="py-24 bg-gray-50 overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEWA STRONA: Opis */}
          <div className="space-y-8">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-[10px] mb-4">
                Kierunek Specjalizacji
              </h3>
              
              <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-none flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200 shadow-sm">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/2 bg-white" />
                      <div className="h-1/2 bg-[#dc2626]" />
                    </div>
                  </span>
                  <span className="text-[#dc2626]">Polska</span>
                </div>
                <span className="text-gray-300 font-light">—</span>
                <div className="flex items-center gap-3">
                  <span className="text-[#00247d]">Wielka Brytania</span>
                  <span className="relative flex h-8 w-8 shrink-0 rounded-full border border-gray-200 shadow-sm bg-[#00247d] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[140%] h-[4px] bg-white rotate-45"></div>
                      <div className="absolute w-[140%] h-[4px] bg-white -rotate-45"></div>
                      <div className="absolute w-full h-2 bg-white"></div>
                      <div className="absolute h-full w-2 bg-white"></div>
                      <div className="absolute w-full h-1 bg-[#cf142b]"></div>
                      <div className="absolute h-full w-1 bg-[#cf142b]"></div>
                    </div>
                  </span>
                </div>
              </h2>
            </div>

            <p className="text-gray-700 text-xl leading-relaxed italic border-l-4 border-red-600 pl-6">
              Nasza firma to ekspert w transporcie na trasie <strong>Polska – Wielka Brytania</strong>. 
              Zapewniamy pełne wsparcie logistyczne w relacjach eksportowych oraz importowych.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 group hover:border-red-600 transition-colors">
                <Globe2 className="w-6 h-6 text-red-600" />
                <div>
                  <h4 className="font-black text-black uppercase italic text-sm tracking-tight">
                    Transport Międzynarodowy
                  </h4>
                  <p className="text-gray-500 text-xs">Bezpośrednie połączenie i stały monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA STRONA: Animowana Ciężarówka */}
          <div className="relative">
            <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border border-gray-100 relative z-10 overflow-hidden">
              
              {/* OŚ TRASY Z KRESKĄ I STRZAŁKĄ */}
              <div className="flex items-center justify-between relative z-20 mb-12">
                <div className="text-center">
                  <div className="text-4xl mb-2">🇵🇱</div>
                  <div className="font-bold text-lg">PL</div>
                </div>

                {/* DYNAMIZUJĄCA KRESKA ŁĄCZĄCA */}
                <div className="flex-1 flex items-center px-4 relative">
                    <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
                        {/* Animowany gradient na kresce */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-600 -ml-1 animate-pulse" />
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-2">🇬🇧</div>
                  <div className="font-bold text-lg">UK</div>
                </div>
              </div>

         <div className="relative h-24 bg-gray-50 rounded-2xl border-b-4 border-gray-200 overflow-hidden">
  {/* Linia przerywana na drodze */}
  <div className="absolute top-2/3 w-full h-[2px] bg-dashed-line opacity-20"></div>

  {/* Kontener animacji jazdy */}
  <div className="absolute w-full h-full animate-drive flex items-end pb-2">
    <div className="relative flex items-end drop-shadow-sm">
      
      {/* --- NACZEPA (Trailer) --- */}
      {/* POPRAWKA: Usunięto 'overflow-hidden' z tej linii poniżej, aby koła mogły wystawać */}
      <div className="w-24 h-10 bg-red-600 rounded-sm relative border-r border-red-800/30 z-10">
        {/* Detale naczepy: poziome linie wzmacniające */}
        <div className="absolute top-2 w-full h-[1px] bg-red-700/50"></div>
        <div className="absolute top-5 w-full h-[1px] bg-red-700/50"></div>
        {/* Osłona międzyosiowa (Side Skirt) */}
        <div className="absolute bottom-0 w-full h-3 bg-red-700 border-t border-red-800"></div>
        
        {/* Koła naczepy (teraz już nie są ucięte) */}
        <div className="absolute -bottom-1 left-2 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-20"></div>
        <div className="absolute -bottom-1 left-7 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-20"></div>
      </div>

      {/* Łącznik (Siodło) */}
      <div className="w-1 h-2 bg-zinc-600 mb-2 relative z-0"></div>

      {/* --- CIĄGNIK SIODŁOWY (EURO CAB-OVER) --- */}
      <div className="relative">
        {/* Owiewka dachowa (Roof Spoiler) */}
        {/* Zmniejszyłem z-index na z-10, aby nie zasłaniała naczepy przy skręcie */}
        <div className="absolute -top-0.5 left-0 w-full h-4 bg-red-600 skew-x-[1deg] rounded-tl-sm border-b border-red-800 z-10"></div>
        
        {/* Główna bryła kabiny */}
        <div className="w-9 h-12 bg-red-600 rounded-sm relative overflow-hidden z-20 border-l border-red-500/50">
          
          {/* Przednia szyba (Windshield) */}
          <div className="absolute top-1 right-0 w-5 h-4 bg-blue-950 border-b-2 border-red-700 skew-x-5"></div>
          
          {/* Boczna szyba (Side Window) */}
          <div className="absolute top-2 left-0.5 w-2.5 h-3 bg-blue-950 rounded-sm border border-red-700"></div>

          {/* Grill i światła z przodu */}
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-red-700 flex flex-col justify-end gap-[2px] p-[2px]">
             {/* Linie grilla */}
            <div className="h-[1px] w-full bg-red-900/60"></div>
            <div className="h-[1px] w-full bg-red-900/60"></div>
            {/* Reflektor */}
            <div className="h-1.5 w-full bg-yellow-100 rounded-sm mt-[1px] shadow-[0_0_2px_#fde047]"></div>
          </div>
        </div>
        
        {/* Koła ciągnika */}
        <div className="absolute -bottom-1 left-0.5 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-30"></div>
        <div className="absolute -bottom-1 right-0.5 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-30"></div>
      </div>
    </div>
  </div>
</div>

<div className="mt-8 text-center">
  <div className="inline-block bg-white px-6 py-3 rounded-full border border-zinc-100 shadow-sm hover:border-zinc-300 transition-colors cursor-pointer group">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 group-hover:text-red-600 transition-colors">
      Szybka wycena trasy Polska — UK
    </p>
  </div>
</div>
              <div className="mt-12 text-center">
                <div className="inline-block bg-red-50 px-6 py-2 rounded-full border border-red-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-700">
                    Szybka wycena trasy Polska — UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dashed-line {
          background-image: linear-gradient(to right, #6b7280 50%, rgba(255, 255, 255, 0) 0%);
          background-position: center;
          background-size: 20px 2px;
          background-repeat: repeat-x;
        }
        @keyframes drive {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-drive {
          animation: drive 6s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
}