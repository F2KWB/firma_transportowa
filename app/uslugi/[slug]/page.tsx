'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { 
  Truck, Globe, ClipboardList, Warehouse, 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Clock, BarChart3, Zap 
} from 'lucide-react';
import Link from 'next/link';

const servicesData: Record<string, any> = {
  'transport-krajowy': {
    title: "Transport Krajowy",
    subtitle: "Polska bez barier",
    icon: <Truck className="w-12 h-12" />,
    desc: "Zapewniamy błyskawiczny przepływ towarów na terenie całego kraju. Wykorzystujemy zaawansowaną analitykę tras, aby Twoje ładunki docierały do celu zawsze na czas.",
    features: ["Dostawy Next-Day", "Nowoczesna flota z windami", "Pełne ubezpieczenie OCP", "Systemy śledzenia w czasie rzeczywistym"],
    imageLabel: "LOGISTYKA KRAJOWA"
  },
  'transport-miedzynarodowy': {
    title: "Transport Międzynarodowy",
    subtitle: "Twoje okno na Europę",
    icon: <Globe className="w-12 h-12" />,
    desc: "Łączymy rynki europejskie z najwyższą precyzją. Nasze zestawy Euro 6 codziennie przemierzają tysiące kilometrów, dostarczając towar bezpiecznie i zgodnie z normami UE.",
    features: ["Obsługa całej Unii Europejskiej", "Ekspresy międzynarodowe", "Podwójne obsady kierowców", "Pełne wsparcie dokumentacji"],
    imageLabel: "TRANZYT EUROPEJSKI"
  },
  'spedycja': {
    title: "Spedycja",
    subtitle: "Inteligentne zarządzanie",
    icon: <ClipboardList className="w-12 h-12" />,
    desc: "Nie szukamy tylko transportu – budujemy optymalne łańcuchy dostaw. Nasz zespół spedytorów to eksperci, którzy znajdą rozwiązanie nawet dla najtrudniejszych ładunków.",
    features: ["Optymalizacja kosztów transportu", "Ładunki drobnicowe i całopojazdowe", "Stały nadzór nad trasą", "Dobór sprawdzonych przewoźników"],
    imageLabel: "OPERACJE SPEDYCYJNE"
  },
  'logistyka': {
    title: "Logistyka i Magazynowanie",
    subtitle: "Bezpieczna baza",
    icon: <Warehouse className="w-12 h-12" />,
    desc: "Zlokalizowany w sercu Pomorza magazyn w Leźnie to gwarancja sprawnej logistyki. Oferujemy pełen zakres usług magazynowych od cross-dockingu po długoterminowe składowanie.",
    features: ["Magazyn wysokiego składowania", "Cross-docking 24/7", "Systemy WMS online", "Strategiczna lokalizacja przy obwodnicy"],
    imageLabel: "CENTRUM W LEŹNIE"
  }
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = servicesData[slug];

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center font-black italic uppercase text-2xl">
      Usługa nie znaleziona
    </div>
  );

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      {/* 1. HERO SECTION - Nowoczesny Gradient i Typografia */}
      <section className="relative pt-32 pb-20 px-6 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6 text-blue-500 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="p-3 bg-blue-600/10 rounded-2xl border border-blue-600/20">
              {data.icon}
            </div>
            <span className="font-black uppercase italic tracking-[0.3em] text-sm">{data.subtitle}</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-white mb-8 leading-[0.85]">
            {data.title.split(' ')[0]} <br />
            <span className="text-transparent stroke-text">{data.title.split(' ')[1] || ''}</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl text-xl font-medium leading-relaxed mb-12 border-l-2 border-blue-600 pl-8">
            {data.desc}
          </p>
        </div>
      </section>

      {/* 2. GLÓWNA TREŚĆ - Asymetryczny Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Lewa kolumna: Korzyści */}
          <div className="lg:col-span-7 space-y-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {data.features.map((feature: string, i: number) => (
                <div key={i} className="group p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-black uppercase italic text-lg leading-tight mb-2">{feature}</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Standard WANTRANZ</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-12 py-12 border-y border-gray-100">
              <div className="flex items-center gap-4 text-gray-400">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-black uppercase italic text-black">Bezpieczeństwo</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">Pełne ubezpieczenie OCP</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-black uppercase italic text-black">Optymalizacja</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">Koszty pod kontrolą</div>
                </div>
              </div>
            </div>
          </div>

          {/* Prawa kolumna: Obraz Przewodni */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center p-12 text-center">
                <span className="font-black italic text-4xl text-neutral-400 opacity-30 uppercase tracking-tighter transform -rotate-12">
                  {data.imageLabel}
                </span>
              </div>
              <div className="absolute bottom-10 left-10 z-20">
                <div className="bg-blue-600 text-white p-6 rounded-3xl inline-flex items-center gap-4 shadow-xl">
                  <Clock className="w-6 h-6" />
                  <span className="font-black uppercase italic tracking-tighter">Dostępność 24/7</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA - Minimalistyczny i mocny */}
      <section className="bg-black py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-12">
            Zmień logistykę <br />w swoją <span className="text-blue-600">przewagę</span>
          </h2>
          <Link href="/kontakt" className="group relative px-12 py-6 bg-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 font-black uppercase italic text-black flex items-center gap-3">
              Rozpocznij współpracę <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </main>
  );
}