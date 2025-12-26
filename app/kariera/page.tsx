"use client";
import React from "react";
import { Truck, Users, ShieldCheck, Briefcase, ArrowRight } from "lucide-react";

export default function KarieraPage() {
  const jobs = [
    {
      title: "Kierowca C+E - Transport Międzynarodowy",
      type: "Pełny etat",
      location: "Baza: Leźno / Trasy: UE",
      salary: "9 000 - 13 000 PLN",
      perks: [
        "Nowoczesna flota (Scania/Volvo)",
        "System 2/1 lub 3/1",
        "Terminowe płatności",
      ],
    },
    {
      title: "Spedytor Międzynarodowy",
      type: "Pełny etat",
      location: "Biuro: Leźno",
      salary: "Podstawa + Wysoka prowizja",
      perks: [
        "Niezbędne narzędzia",
        "Praca w młodym zespole",
        "Pakiet medyczny",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* NAGŁÓWEK ZE ZDJĘCIEM I BIAŁYM PRZEJŚCIEM */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center">
        {/* ZDJĘCIE TŁA */}
        <img 
          src="/FB_IMG_1766775908608.webp" 
          alt="Praca w Wantranz"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* NAKŁADKA - Przyciemnienie dla białego napisu + przejście do bieli na dole */}
        <div className="absolute inset-0 bg-black/50" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* TREŚĆ NAGŁÓWKA - Wyrównana do lewej (items-start i text-left) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full mb-6 shadow-lg">
            <span className="font-black uppercase italic tracking-widest text-[10px]">
              Kariera
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white leading-none mb-6">
            Dołącz do zespołu
          </h1>

          <p className="text-gray-200 max-w-xl text-xs md:text-sm font-bold uppercase tracking-widest border-l-2 border-red-600 pl-4">
            Rozwijaj swoją karierę w WANTRANZ. Stawiamy na profesjonalizm,
            nowoczesny sprzęt i partnerskie relacje.
          </p>
        </div>
      </div>

      {/* DLACZEGO MY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4 group">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter">
              Nowoczesna Flota
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Pracujemy wyłącznie na sprawdzonych markach, dbając o komfort i
              bezpieczeństwo naszych kierowców.
            </p>
          </div>
          <div className="space-y-4 group">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter">Stabilność</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Gwarantujemy terminowe wypłaty i jasne warunki zatrudnienia od
              pierwszego dnia pracy.
            </p>
          </div>
          <div className="space-y-4 group">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tighter">Atmosfera</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Jesteśmy zgranym zespołem. W WANTRANZ nie jesteś tylko numerem w
              systemie, ale częścią rodziny.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTY PRACY */}
      <section className="bg-gray-50 py-24 px-6 rounded-[3rem] mx-4 md:mx-10 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-2 h-12 bg-red-600" />
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-black">
              Aktualne rekrutacje
            </h2>
          </div>

          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-12 rounded-[3rem] border border-transparent hover:border-red-600 transition-all group shadow-xl shadow-gray-200/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black bg-red-50 text-red-600 px-4 py-1.5 rounded-full uppercase tracking-widest">
                      {job.type}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-black uppercase italic text-black leading-none group-hover:text-red-600 transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      <span>Lokalizacja: <span className="text-black">{job.location}</span></span>
                      <span>Wynagrodzenie: <span className="text-red-600">{job.salary}</span></span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase italic hover:bg-red-600 transition-all group shrink-0 shadow-lg text-sm">
                    Aplikuj teraz
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-8">
                  {job.perks.map((perk, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-3 tracking-widest"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" /> 
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-tight text-black">
          Nie znalazłeś <br /> odpowiedniej roli?
        </h2>
        <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
          Zawsze szukamy pasjonatów transportu. Wyślij swoje CV na adres ogólny,
          a odezwiemy się, gdy tylko ruszy nowa rekrutacja.
        </p>
        <a
          href="mailto:wantran.sp@wp.pl"
          className="inline-block bg-gray-50 px-12 py-6 rounded-full text-red-600 font-black text-lg md:text-xl uppercase italic hover:bg-red-600 hover:text-white transition-all shadow-sm border border-gray-100"
        >
          wantran.sp@wp.pl
        </a>
      </section>
    </main>
  );
}