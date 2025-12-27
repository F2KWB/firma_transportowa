"use client";
import { Globe2, ChevronRight } from "lucide-react";

export default function RoutesSection() {
  return (
    <section id="kierunki" className="py-24 bg-gray-50 text-black overflow-hidden">
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
                  {/* FLAGA POLSKI (CSS) */}
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
                  
                  {/* FLAGA UK (CSS) */}
                  <span className="relative flex h-8 w-8 shrink-0 rounded-full border border-gray-200 shadow-sm bg-[#00247d] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[140%] h-[4px] rotate-45 bg-white"></div>
                      <div className="absolute w-[140%] h-[4px] -rotate-45 bg-white"></div>
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

          {/* PRAWA STRONA: Kontener z ciężarówką */}
          <div className="relative">
            <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border border-gray-100 relative z-10 overflow-hidden">
              
              {/* OŚ TRASY */}
              <div className="flex items-center justify-between relative z-20 mb-12">
                <div className="text-center flex flex-col items-center">
                   {/* FLAGA POLSKI (zastępuje napis PL na Windows) */}
                  <div className="mb-2 relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200 shadow-sm">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/2 bg-white" />
                      <div className="h-1/2 bg-[#dc2626]" />
                    </div>
                  </div>
                  <div className="font-bold text-lg text-black">PL</div>
                </div>

                <div className="flex-1 flex items-center px-4 relative">
                    <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-600 -ml-1 animate-pulse" />
                </div>

                <div className="text-center flex flex-col items-center">
                  {/* FLAGA UK (zastępuje napis GB na Windows) */}
                  <div className="mb-2 relative flex h-10 w-10 shrink-0 rounded-full border border-gray-200 shadow-sm bg-[#00247d] overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute w-[140%] h-[4px] rotate-45 bg-white"></div>
                      <div className="absolute w-[140%] h-[4px] -rotate-45 bg-white"></div>
                      <div className="absolute w-full h-2 bg-white"></div>
                      <div className="absolute h-full w-2 bg-white"></div>
                      <div className="absolute w-full h-1 bg-[#cf142b]"></div>
                      <div className="absolute h-full w-1 bg-[#cf142b]"></div>
                    </div>
                  </div>
                  <div className="font-bold text-lg text-black">UK</div>
                </div>
              </div>

             {/* DROGA */}
             <div className="relative h-24 bg-gray-50 rounded-2xl border-b-4 border-gray-200 overflow-hidden">
                <div className="absolute top-2/3 w-full h-[2px] bg-dashed-line opacity-20"></div>

                {/* AUTKO - PRZYWRÓCONE CZERWONE KOLORY */}
                <div className="absolute w-full h-full animate-drive flex items-end pb-2">
                  <div className="relative flex items-end drop-shadow-sm">
                    
                    {/* Naczepa (CZERWONA) */}
                    <div className="w-24 h-10 bg-red-600 rounded-sm relative border-r border-red-800/30 z-10">
                      <div className="absolute top-2 w-full h-[1px] bg-red-700/50"></div>
                      <div className="absolute top-5 w-full h-[1px] bg-red-700/50"></div>
                      <div className="absolute bottom-0 w-full h-3 bg-red-700 border-t border-red-800"></div>
                      
                      {/* Koła naczepy */}
                      <div className="absolute -bottom-1 left-2 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-20"></div>
                      <div className="absolute -bottom-1 left-7 w-3.5 h-3.5 bg-zinc-800 rounded-full border-[3px] border-zinc-300 z-20"></div>
                    </div>

                    {/* Łącznik */}
                    <div className="w-1 h-2 bg-zinc-600 mb-2 relative z-0"></div>

                    {/* Ciągnik (CZERWONY) */}
                    <div className="relative">
                      {/* Spojler */}
                      <div className="absolute -top-0.5 left-0 w-full h-4 bg-red-600 skew-x-[1deg] rounded-tl-sm border-b border-red-800 z-10"></div>
                      
                      {/* Kabina */}
                      <div className="w-9 h-12 bg-red-600 rounded-sm relative overflow-hidden z-20 border-l border-red-500/50">
                        {/* Szyby */}
                        <div className="absolute top-1 right-0 w-5 h-4 bg-blue-950 border-b-2 border-red-700 skew-x-5"></div>
                        <div className="absolute top-2 left-0.5 w-2.5 h-3 bg-blue-950 rounded-sm border border-red-700"></div>

                        {/* Grill i światła */}
                        <div className="absolute bottom-0 right-0 w-5 h-5 bg-red-700 flex flex-col justify-end gap-[2px] p-[2px]">
                           <div className="h-[1px] w-full bg-red-900/60"></div>
                           <div className="h-[1px] w-full bg-red-900/60"></div>
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