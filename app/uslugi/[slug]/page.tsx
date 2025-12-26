"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  Truck,
  Globe,
  ClipboardList,
  Warehouse,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Zap,
} from "lucide-react";
import Link from "next/link";

const servicesData: Record<string, any> = {
  "transport-krajowy": {
    title: "Transport Krajowy",
    subtitle: "Polska bez barier",
    icon: <Truck className="w-12 h-12" />,
    desc: "Zapewniamy błyskawiczny przepływ towarów na terenie całego kraju. Wykorzystujemy zaawansowaną analitykę tras, aby Twoje ładunki docierały do celu zawsze na czas.",
    features: ["Dostawy Next-Day", "Nowoczesna flota", "Pełne ubezpieczenie OCP", "Śledzenie Real-Time"],
    bgImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000",
  },
  "transport-miedzynarodowy": {
    title: "Transport Międzynarodowy",
    subtitle: "Twoje okno na Europę",
    icon: <Globe className="w-12 h-12" />,
    desc: "Łączymy rynki europejskie z najwyższą precyzją. Nasze zestawy Euro 6 codziennie przemierzają tysiące kilometrów, dostarczając towar bezpiecznie i zgodnie z normami UE.",
    features: ["Obsługa całej UE", "Ekspresy drogowe", "Podwójne obsady", "Wsparcie celne"],
    bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000",
  },
  spedycja: {
    title: "Spedycja Drogowa",
    subtitle: "Inteligentne zarządzanie",
    icon: <ClipboardList className="w-12 h-12" />,
    desc: "Nie szukamy tylko transportu – budujemy optymalne łańcuchy dostaw. Nasz zespół spedytorów to eksperci od najtrudniejszych wyzwań logistycznych.",
    features: ["Optymalizacja kosztów", "Ładunki FTL/LTL", "Stały nadzór", "Sprawdzeni przewoźnicy"],
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
  },
  logistyka: {
    title: "Logistyka Magazyn",
    subtitle: "Bezpieczna baza",
    icon: <Warehouse className="w-12 h-12" />,
    desc: "Zlokalizowany w sercu Pomorza magazyn w Leźnie to gwarancja sprawnej logistyki. Oferujemy pełen zakres usług od cross-dockingu po składowanie.",
    features: ["Wysokie składowanie", "Cross-docking 24/7", "Systemy WMS online", "Obwodnica Trójmiasta"],
    bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000",
  },
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = servicesData[slug];

  if (!data) return <div className="min-h-screen flex items-center justify-center font-black uppercase italic text-2xl">Usługa nie znaleziona</div>;

  return (
    <main className="min-h-screen bg-white text-black">
      {/* 1. HERO SECTION - Zdjęcie w tle z mniejszym białym napisem */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
        {/* Zdjęcie w tle */}
        <div className="absolute inset-0 z-0">
          <img 
            src={data.bgImage} 
            alt={data.title}
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white" />
        </div>

        {/* Treść na zdjęciu */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-20">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="font-black uppercase italic tracking-widest text-[10px]">{data.subtitle}</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-tight mb-6 drop-shadow-xl">
            {data.title}
          </h1>

          <p className="text-gray-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed opacity-90 drop-shadow-md">
            {data.desc}
          </p>
        </div>
      </section>

      {/* 2. ZALETY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.features.map((feature: string, i: number) => (
            <div 
              key={i}
              className="p-8 bg-gray-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group"
            >
              <Zap className="w-6 h-6 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-black uppercase italic text-base leading-tight">{feature}</h4>
            </div>
          ))}
        </div>

        {/* Dodatkowe info */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 py-12 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-red-600" />
            <div>
              <p className="font-black uppercase italic text-sm leading-none">Bezpieczeństwo</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Pełne ubezpieczenie OCP</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-red-600" />
            <div>
              <p className="font-black uppercase italic text-sm leading-none">Terminowość</p>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Monitoring GPS 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-[#0a0a0a] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-10">
            Gotowy na <span className="text-red-600">transport</span>?
          </h2>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-full font-black uppercase italic hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            Zapytaj o wycenę <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 15s infinite alternate ease-in-out;
        }
      `}</style>
    </main>
  );
}