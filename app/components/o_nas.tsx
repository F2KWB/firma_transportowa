"use client";
import { History, ShieldCheck, Globe2, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      label: "Tradycja",
      value: "Od 1992",
      desc: "Ponad 30 lat budowania zaufania i stabilnej pozycji na rynku TSL.",
      icon: <History className="w-6 h-6" />,
    },
    {
      label: "Bezpieczeństwo",
      value: "250 000 €",
      desc: "Pełna ochrona ładunku dzięki wysokiemu ubezpieczeniu OCP.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      label: "Zasięg",
      value: "Europa",
      desc: "Realizujemy transporty drobnicowe i całopojazdowe w całej Unii Europejskiej.",
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      label: "Rozwój",
      value: "Nowa Flota",
      desc: "Nieustannie inwestujemy w ekologiczne pojazdy spełniające normy Euro 6.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <section id="o-nas" className="py-24 bg-white overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEWA STRONA: Narracja */}
          <div className="space-y-8">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">
                O nas
              </h3>
            </div>

            <div className="space-y-6 text-black font-normal leading-relaxed text-lg">
              <p>
                Wantranz to tradycyjna rodzinna firma funkcjonująca w branży
                transportowo-spedycyjnej od{" "}
                <strong className="text-black font-bold">1992 roku.</strong> Przetrwanie
                na rynku zapewniły nam rzetelność, terminowość i umiejętność
                podejmowania strategicznych decyzji.
              </p>
              <p>
                Dzięki nowym, ekologicznym i stale monitorowanym technicznie
                pojazdom zapewniamy bezpieczeństwo przewozu, mające pokrycie w
                ubezpieczeniu odpowiedzialności cywilnej przewoźnika w wysokości
                <span className="font-bold text-black ml-1">250 tysięcy euro.</span>
              </p>
              <p>
                Specjalizujemy się w transporcie całopojazdowym oraz
                drobnicowym w wymiarze europejskim, na podstawie licencji nr TU-062680 oraz
                certyfikatu kompetencji zawodowych nr 05837/F4/03.
              </p>
              <p>
                Nasza firma nieustannie się rozwija, powiększa obszary działania
                oraz rozbudowuje flotę, dostosowując się do potrzeb nowoczesnego rynku.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors"
              >
                Poznaj nasz zespół
                <span>→</span>
              </a>
            </div>
          </div>

          {/* PRAWA STRONA: Bloczki z ikonami */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((val, index) => (
              <div
                key={index}
                className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:border-red-50 transition-all duration-500 group"
              >
                {/* Ikona dynamicznie zmienia kolor na biały przy hoverze */}
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-red-600 transition-all duration-300">
                  <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                    {val.icon}
                  </div>
                </div>
                
                <div className="text-sm font-black uppercase tracking-widest text-red-600 mb-1">
                  {val.label}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3 uppercase italic">
                  {val.value}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}