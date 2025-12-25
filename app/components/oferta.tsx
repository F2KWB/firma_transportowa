import React from 'react';

export default function Offer() {
  const offers = [
    {
      title: "Transport i Spedycja",
      desc: "Obsługa przez wykwalifikowanych, rzetelnych i doświadczonych pracowników.",
      tag: "PRO"
    },
    {
      title: "Nowoczesna Flota",
      desc: "Ciągniki powyżej 3,5t z naczepami kurtynowymi (firana, plandeka) do 100 m3.",
      tag: "FLOTA"
    },
    {
      title: "Przewóz Odpadów",
      desc: "Transport odpadów na podstawie licencji na kraje europejskie.",
      tag: "EURO"
    },
    {
      title: "Serwis i Wulkanizacja",
      desc: "Kompleksowe usługi wulkanizacyjne i warsztatowe dla pojazdów ciężarowych.",
      tag: "WARSZTAT"
    },
    {
      title: "Baza i Parking",
      desc: "Wynajem miejsca parkingowego na strzeżonym terenie naszej bazy transportowej.",
      tag: "PARKING"
    },
    {
      title: "Monitoring GPS/GSM",
      desc: "Bezpośrednia i natychmiastowa lokalizacja transportu z Twoim ładunkiem.",
      tag: "LIVE"
    },
    {
      title: "Transport Ciężarowy",
      desc: "Przewozy specjalistyczne samochodami ciężarowymi powyżej 3,5 tony.",
      tag: "HEAVY"
    },
    {
      title: "Odśnieżanie",
      desc: "Utrzymanie drożności placów i dróg pojazdami specjalnymi.",
      tag: "WINTER"
    }
  ];

  return (
    <section id="oferta" className="max-w-7xl mx-auto px-4 py-20 bg-white rounded-[3rem] my-10 shadow-sm">
      <div className="mb-16 text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Nasze Usługi</h2>
        <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">Oferujemy</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((item, index) => (
          <div 
            key={index} 
            className="group p-8 border border-gray-100 rounded-3xl hover:bg-black transition-all duration-300"
          >
            <span className="inline-block px-3 py-1 bg-gray-100 group-hover:bg-white/20 text-[10px] font-bold rounded-full mb-4 group-hover:text-white transition-colors">
              {item.tag}
            </span>
            <h4 className="text-xl font-bold uppercase italic mb-3 group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}