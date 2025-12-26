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

              {/* Droga z jadącą ciężarówką */}
              <div className="relative h-20 bg-gray-50 rounded-2xl border-b-4 border-gray-200 overflow-hidden">
                <div className="absolute top-1/2 w-full h-[2px] bg-dashed-line opacity-30"></div>
                
                <div className="absolute w-full h-full animate-drive">
                  <div className="absolute top-1/2 -translate-y-1/2 flex items-end">
                    <div className="w-20 h-8 bg-red-600 rounded-sm relative shadow-md">
                      <div className="absolute -bottom-1 left-2 w-3 h-3 bg-black rounded-full border-2 border-gray-400"></div>
                      <div className="absolute -bottom-1 left-6 w-3 h-3 bg-black rounded-full border-2 border-gray-400"></div>
                    </div>
                    <div className="w-2 h-1 bg-gray-400 mb-1"></div>
                    <div className="relative flex items-end">
                      <div className="w-8 h-10 bg-red-600 rounded-t-md relative shadow-md">
                        <div className="absolute top-2 right-1 w-4 h-3 bg-blue-100 rounded-sm opacity-80"></div>
                      </div>
                      <div className="w-6 h-5 bg-red-600 rounded-r-md shadow-md"></div>
                      <div className="absolute -bottom-1 left-1 w-3 h-3 bg-black rounded-full border-2 border-gray-400"></div>
                      <div className="absolute -bottom-1 right-1 w-3 h-3 bg-black rounded-full border-2 border-gray-400"></div>
                      <div className="absolute -top-3 left-1 w-1.5 h-6 bg-gradient-to-t from-gray-400 to-gray-200 rounded-full shadow-sm"></div>
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