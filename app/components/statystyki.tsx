// import React from 'react';

// export default function Stats() {
//   const stats = [
//     { label: "Ilość ciężarówek", value: "45+", suffix: "Pojazdów" },
//     { label: "Przejechane kilometry", value: "1.2M", suffix: "km rocznie" },
//     { label: "Ilość transportów", value: "15k", suffix: "Dostaw" },
//   ];

//   return (
//     <section id="statystyki" className="max-w-7xl mx-auto px-4 py-20">
//       {/* Nagłówek sekcji */}
//       <div className="mb-12">
//         <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
//           Wantranz w liczbach
//         </h3>
//         <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
//           Nasza skala działania
//         </h2>
//       </div>

//       {/* Siatka statystyk */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {stats.map((stat, index) => (
//           <div 
//             key={index} 
//             className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
//           >
//             <div className="text-6xl md:text-7xl font-black text-black tracking-tighter mb-2">
//               {stat.value}
//             </div>
//             <div className="text-lg font-bold uppercase italic text-gray-800">
//               {stat.label}
//             </div>
//             <div className="text-sm text-gray-500 font-medium">
//               {stat.suffix}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';

export default function Stats() {
  const stats = [
    { label: "Ilość ciężarówek", value: "45+", suffix: "Pojazdów" },
    { label: "Przejechane kilometry", value: "1.2M", suffix: "km rocznie" },
    { label: "Ilość transportów", value: "15k", suffix: "Dostaw" },
  ];

  return (
    <section id="statystyki" className="w-full py-20">
      {/* Nagłówek sekcji - wycentrowany na mobile */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold mb-2">
          Wantranz w liczbach
        </h3>
        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
          Nasza skala działania
        </h2>
      </div>

      {/* Siatka statystyk - pełna szerokość na mobile */}
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-12 md:rounded-[2.5rem] border-b md:border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center md:text-left"
            >
              <div className="text-7xl md:text-8xl font-black text-black tracking-tighter mb-2 leading-none">
                {stat.value}
              </div>
              <div className="text-xl font-bold uppercase italic text-gray-800 mt-4">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 font-medium tracking-widest uppercase mt-1">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}