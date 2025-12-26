'use client';
import { History, Users2, Leaf, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      label: "Tradycja",
      value: "Od 1992",
      desc: "Ponad 30 lat doświadczenia w zmieniającej się branży TSL.",
      icon: <History className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Zespół",
      value: "Rodzinny",
      desc: "Zgrany zespół specjalistów dbający o Twój ładunek jak o własny.",
      icon: <Users2 className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Ekologia",
      value: "Euro 6",
      desc: "Nasza flota spełnia najwyższe normy emisji spalin.",
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Podejście",
      value: "Partnerstwo",
      desc: "Budujemy długofalowe relacje oparte na wzajemnym zaufaniu.",
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section id="o-nas" className="py-24 bg-white overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEWA STRONA: Nowa narracja */}
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                Więcej niż transport
              </h3>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9]">
                Ludzie, którzy <br /> tworzą WANTRANZ
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Przetrwanie na rynku od <span className="text-black font-bold">1992 roku</span> zapewniły nam nie tylko nowoczesne auta, ale przede wszystkim rzetelność i umiejętność podejmowania strategicznych decyzji w trudnych momentach.
              </p>
              <p>
                Jako firma rodzinna, stawiamy na transparentność. Nie jesteśmy korporacją – u nas każdy klient ma imię, a każde zlecenie jest traktowane priorytetowo. Nasza firma nieustannie się rozwija, powiększa obszary działania oraz rozbudowuje flotę, nie tracąc przy tym swoich pierwotnych wartości.
              </p>
            </div>

            {/* Mały call to action wewnątrz tekstu */}
            <div className="pt-4">
              <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors">
                Poznaj nasz zespół
                <span>→</span>
              </a>
            </div>
          </div>

          {/* PRAWA STRONA: Skupienie na wartościach/atutach */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:border-blue-50 transition-all duration-500 group"
              >
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {val.icon}
                </div>
                <div className="text-sm font-black uppercase tracking-widest text-blue-600 mb-1">
                  {val.label}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-3">
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