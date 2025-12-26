"use client";
import React, { useState } from "react";
import { Truck, Box, ShieldCheck, Fuel } from "lucide-react";

export default function TruckSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const features = [
    {
      id: "trailer",
      label: "Naczepa",
      pos: "top-[45%] left-[30%]",
      title: "Firana Standard",
      desc: "Wysokość 2.75m | 33 palety",
    },
    {
      id: "engine",
      label: "Silnik",
      pos: "top-[60%] left-[75%]",
      title: "Euro 6",
      desc: "Ekologiczny transport i niskie spalanie",
    },
  ];

  return (
    <section
      id="flota"
      className="w-full py-32 bg-white overflow-hidden text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* NAGŁÓWEK Z LINIA DEKORACYJNĄ */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-600 text-sm font-black uppercase tracking-[0.3em] mb-4">
              Nasz pojazd
            </h2>
          </div>
          <p className="text-gray-500 font-medium uppercase text-xs tracking-widest max-w-[200px] border-l-2 border-red-600 pl-4">
            Nowoczesne zestawy gotowe na każdą trasę
          </p>
        </div>

        {/* GŁÓWNY KONTENER ZDJĘCIA */}
        <div className="relative group">
          {/* Dekoracyjne tło pod zdjęciem */}
          <div className="absolute -inset-4 bg-gray-50 rounded-[4rem] -z-10 scale-95 group-hover:scale-100 transition-transform duration-700"></div>

          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl bg-gray-200">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQafNuZImz2OwbHTT2gfaQf8BIRxr30yCeVhcrxV-dX5Ep3Zqw6wUs83_Cg3Mtd"
              alt="Ciężarówka Wantranz"
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
            />

            {/* HOTSPOTY */}
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute ${f.pos} z-20 -translate-x-1/2 -translate-y-1/2`}
              >
                <button
                  type="button" // Rozwiązuje błąd button-type
                  onClick={() => setActiveTab(activeTab === f.id ? null : f.id)}
                  className="relative flex h-12 w-12 items-center justify-center group"
                  aria-label={`Pokaż informacje o: ${f.label}`} // Rozwiązuje błąd axe/name-role-value
                  title={`Kliknij, aby zobaczyć szczegóły: ${f.label}`} // Dodatkowa informacja po najechaniu myszką
                >
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-40 ${
                      activeTab === f.id ? "hidden" : ""
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-6 w-6 shadow-xl border-4 border-white transition-all duration-300 ${
                      activeTab === f.id ? "bg-red-600 scale-125" : "bg-black"
                    }`}
                  ></span>
                </button>

                {activeTab === f.id && (
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 w-64 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 animate-in slide-in-from-top-4 duration-300 z-30 text-black">
                    <h4 className="font-black uppercase italic text-lg mb-1">
                      {f.title}
                    </h4>
                    <p className="text-xs text-gray-600 font-medium uppercase tracking-tight leading-relaxed">
                      {f.desc}
                    </p>
                    <div className="mt-4 h-1 w-12 bg-red-600"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SPECYFIKACJA TECHNICZNA POD ZDJĘCIEM */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <SpecItem icon={<Box />} label="Ładowność" value="24 Tony" />
          <SpecItem icon={<Truck />} label="Typ zabudowy" value="Firana / XL" />
          <SpecItem
            icon={<ShieldCheck />}
            label="Zabezpieczenie"
            value="Mata / Pasy"
          />
          <SpecItem icon={<Fuel />} label="Norma Emisji" value="Euro 6" />
        </div>
      </div>
    </section>
  );
}

function SpecItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3 p-6 rounded-3xl hover:bg-gray-50 transition-colors">
      <div className="text-red-600 w-6 h-6">{icon}</div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
          {label}
        </p>
        <p className="text-xl font-bold uppercase italic text-black">{value}</p>
      </div>
    </div>
  );
}
