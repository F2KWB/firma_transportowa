"use client";
import React from "react";
import {
  History,
  Truck,
  ShieldCheck,
  Camera,
} from "lucide-react";

export default function ONasPage() {
  // Dane galerii z dodanymi linkami do zdjęć
  const gallery = [
    { 
      title: "Nasza Flota", 
      desc: "Nowoczesne ciągniki siodłowe Scania i Volvo",
      src: "/FB_IMG_1766775933532.jpg"
    },
    { 
      title: "Logistyka", 
      desc: "Precyzyjne zarządzanie każdym ładunkiem",
      src: "/FB_IMG_1766775942358.jpg"
    },
    { 
      title: "Magazynowanie", 
      desc: "Bezpieczne zaplecze w Leźnie",
      src: "/FB_IMG_1766775920898.jpg"
    },
    { 
      title: "Zespół", 
      desc: "Doświadczeni kierowcy i spedytorzy",
      src: "/FB_IMG_1766775908608.jpg"
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* 2. ZIG-ZAG SECTION: Nasze Początki (Archiwalne) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <span className="text-red-600 font-black uppercase tracking-widest text-sm italic">
              Nasze Początki
            </span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Budujemy zaufanie od lat</h2>
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
              <img 
                src="/FB_IMG_1766775940628.webp" 
                alt="Archiwalne zdjęcie floty"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-[2rem] font-black italic shadow-xl">
              EST. 1992
            </div>
          </div>
        </div>
      </section>

      {/* 3. ZIG-ZAG SECTION: Dzisiaj (Nowoczesne) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/FB_IMG_1766775901699.webp" 
                alt="Nowoczesna flota Wantranz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-red-600 font-black uppercase tracking-widest text-sm italic">
              Dzisiaj
            </span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Lider nowoczesnej logistyki</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Obecnie WANTRANZ to synonim nowoczesnej logistyki. Inwestujemy w
              najnowsze modele Scania i Volvo, spełniające rygorystyczne normy
              Euro 6. Każdy nasz pojazd jest monitorowany 24/7, co daje naszym
              klientom pełen spokój o powierzony ładunek.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 font-bold italic text-sm">
                <ShieldCheck className="text-red-600 w-5 h-5" /> Monitoring GPS 24/7
              </li>
              <li className="flex items-center gap-3 font-bold italic text-sm">
                <Truck className="text-red-600 w-5 h-5" /> Flota nie starsza niż 3 lata
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
            Zajrzyj za kulisy naszej codziennej pracy w Leźnie i na trasach Europy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-100 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Overlay z tekstem */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-8 text-white">
                <h4 className="font-black uppercase italic text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h4>
                <p className="text-xs font-medium opacity-80 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.desc}
                </p>
              </div>
              
              {/* Obraz */}
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
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
              className="bg-black text-white px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all shadow-xl uppercase tracking-widest text-sm"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}