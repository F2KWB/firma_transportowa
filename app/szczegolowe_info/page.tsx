"use client";
import React from "react";
import {
  Award,
  Target,
  History,
  Globe2,
  Truck,
  ShieldCheck,
  Camera,
} from "lucide-react";

export default function ONasPage() {
  const gallery = [
    { title: "Nasza Flota", desc: "Nowoczesne ciągniki siodłowe" },
    { title: "Baza Leźno", desc: "Centrum operacyjne 24/7" },
    { title: "Zespół", desc: "Nasi specjaliści w akcji" },
    { title: "Logistyka", desc: "Precyzyjne zarządzanie ładunkiem" },
  ];

  return (
    <main className="min-h-screen bg-white">


      {/* 2. ZIG-ZAG SECTION: Tekst Lewo / Zdjęcie Prawo */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-red-600 font-black uppercase tracking-widest text-sm italic">
              Nasze Początki
            </span>

            <p className="text-gray-500 font-medium leading-relaxed">
              Historia WANTRANZ zaczęła się od marzenia o stworzeniu firmy, dla
              której terminowość to świętość. Przez dwie dekady rozbudowaliśmy
              flotę do kilkudziesięciu nowoczesnych zestawów, ale nasze wartości
              pozostały niezmienne.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
                <History className="text-red-600 mb-2" />
                <p className="text-xs font-bold uppercase italic">
                  Założenie: 1992
                </p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center italic text-gray-400 font-bold">
                [ZDJĘCIE ARCHIWALNE / PIERWSZE AUTO]
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-[2rem] font-black italic shadow-xl">
              EST. 1992
            </div>
          </div>
        </div>
      </section>

      {/* 3. ZIG-ZAG SECTION: Zdjęcie Lewo / Tekst Prawo */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="w-full h-full bg-gradient-to-tr from-gray-300 to-gray-400 flex items-center justify-center italic text-gray-100 font-bold uppercase tracking-widest">
                [ZDJĘCIE NOWOCZESNEJ FLOTY]
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-red-600 font-black uppercase tracking-widest text-sm italic">
              Dzisiaj
            </span>
            <p className="text-gray-500 font-medium leading-relaxed">
              Obecnie WANTRANZ to synonim nowoczesnej logistyki. Inwestujemy w
              najnowsze modele Scania i Volvo, spełniające rygorystyczne normy
              Euro 6. Każdy nasz pojazd jest monitorowany 24/7, co daje naszym
              klientom pełen spokój o powierzony ładunek.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-bold italic text-sm">
                <ShieldCheck className="text-red-600 w-5 h-5" /> Monitoring GPS
                24/7
              </li>
              <li className="flex items-center gap-3 font-bold italic text-sm">
                <Truck className="text-red-600 w-5 h-5" /> Flota nie starsza niż
                3 lata
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. GALERIA ZDJĘĆ */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <Camera className="w-5 h-5" />
              <span className="font-black uppercase tracking-widest text-xs italic">
                Nasze zaplecze
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              Galeria WANTRANZ
            </h2>
          </div>
          <p className="text-gray-400 font-medium max-w-xs text-sm">
            Zajrzyj za kulisy naszej codziennej pracy w Leźnie i na trasach
            Europy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-8 text-white">
                <h4 className="font-black uppercase italic text-xl">
                  {item.title}
                </h4>
                <p className="text-xs font-medium opacity-80">{item.desc}</p>
              </div>
              <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-400 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center italic text-gray-100 uppercase tracking-tighter">
                [Foto {index + 1}]
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-6 bg-red-600 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white mb-8 leading-tight">
            Gotowy do współpracy <br />z profesjonalistami?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 font-black italic">
            <a
              href="/kontakt"
              className="bg-black text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all shadow-xl uppercase"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
