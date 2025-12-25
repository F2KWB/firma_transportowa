// 'use client'
// import React, { useState } from 'react';

// export default function TruckSection() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-24 relative">
//       <div className="mb-16 text-center">
//         <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Nasza Flota</h2>
//         <h3 className="text-5xl font-black uppercase italic tracking-tighter">Standard Premium</h3>
//       </div>

//       <div className="relative w-full max-w-5xl mx-auto">
//         {/* GŁÓWNE ZDJĘCIE CIĘŻARÓWKI (Placeholder - zamień na swój plik PNG) */}
//         <img 
//           src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQafNuZImz2OwbHTT2gfaQf8BIRxr30yCeVhcrxV-dX5Ep3Zqw6wUs83_Cg3Mtd" 
//           alt="Ciężarówka Wantranz" 
//           className="w-full h-auto rounded-[3rem]" 
//         />

//         {/* INTERAKTYWNY PUNKT (Hotspot) */}
//         <div 
//           className="absolute top-[40%] right-[85%] z-20" // Pozycjonowanie punktu na przyczepie
//         >
//           {/* Pulsujący punkt */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="relative flex h-8 w-8 items-center justify-center"
//             aria-label="Pokaż wnętrze przyczepy"
//           >
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-4 w-4 bg-white shadow-lg"></span>
//           </button>

//           {/* MAŁY KAFELEK (Pojawia się po kliknięciu) */}
//           {isOpen && (
//             <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300 z-30">
//               <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-3">
//                 <img 
//                   src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXy1STT0cZYMjPIH3xU5PGkW9WDNiLZu0YkwHAst06cb2UxLFvFhSuxzmveOXu" 
//                   alt="Wnętrze przyczepy"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h4 className="font-bold uppercase italic text-sm">Wnętrze typu Firana</h4>
//               <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
//                 Kubatura do 100 m³ | Czystość i bezpieczeństwo
//               </p>
//               <button 
//                 onClick={() => setIsOpen(false)}
//                 className="mt-3 text-[10px] font-bold uppercase underline"
//               >
//                 Zamknij
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client'
import React, { useState } from 'react';

export default function TruckSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="flota" className="w-full py-24 overflow-hidden">
      {/* Nagłówek - wycentrowany na mobile */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Nasza Flota</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-black">
          Standard Premium
        </h3>
      </div>

      {/* Kontener zdjęcia - Full width na mobile */}
      <div className="relative w-full max-w-5xl mx-auto px-0 md:px-6">
        <div className="relative inline-block w-full">
          {/* GŁÓWNE ZDJĘCIE */}
          <img 
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQafNuZImz2OwbHTT2gfaQf8BIRxr30yCeVhcrxV-dX5Ep3Zqw6wUs83_Cg3Mtd" 
            alt="Ciężarówka Wantranz" 
            className="w-full h-auto md:rounded-[3rem] shadow-2xl" 
          />

          {/* INTERAKTYWNY PUNKT (Hotspot) */}
          <div 
            className="absolute top-[40%] left-[15%] md:left-[15%] z-20" 
          >
            {/* Pulsujący punkt */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex h-10 w-10 items-center justify-center group"
              aria-label="Pokaż wnętrze przyczepy"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-white shadow-xl border-2 border-black/10"></span>
            </button>

            {/* MAŁY KAFELEK - Poprawione pozycjonowanie, by nie wychodził za ekran */}
            {isOpen && (
              <div className="absolute top-12 left-0 md:left-1/2 md:-translate-x-1/2 w-[280px] sm:w-64 bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 animate-in fade-in zoom-in duration-300 z-30">
                <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-3">
                  <img 
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXy1STT0cZYMjPIH3xU5PGkW9WDNiLZu0YkwHAst06cb2UxLFvFhSuxzmveOXu" 
                    alt="Wnętrze przyczepy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold uppercase italic text-sm text-black">Wnętrze typu Firana</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 leading-tight">
                  Kubatura do 100 m³ | Czystość i bezpieczeństwo
                </p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full py-2 bg-gray-50 rounded-xl text-[10px] font-bold uppercase hover:bg-black hover:text-white transition-colors"
                >
                  Zamknij
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}