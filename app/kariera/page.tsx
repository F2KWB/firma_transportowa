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
      {/* NAGŁÓWEK */}
      <section className="bg-black text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 leading-none">
            Dołącz do <br />
            zespołu
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg font-medium">
            Rozwijaj swoją karierę w WANTRANZ. Stawiamy na profesjonalizm,
            nowoczesny sprzęt i partnerskie relacje.
          </p>
        </div>
      </section>

      {/* DLACZEGO MY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase italic">
              Nowoczesna Flota
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pracujemy wyłącznie na sprawdzonych markach, dbając o komfort i
              bezpieczeństwo naszych kierowców.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase italic">Stabilność</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Gwarantujemy terminowe wypłaty i jasne warunki zatrudnienia od
              pierwszego dnia pracy.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase italic">Atmosfera</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Jesteśmy zgranym zespołem. W WANTRANZ nie jesteś tylko numerem w
              systemie.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTY PRACY */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-red-600 w-6 h-6" />
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">
              Aktualne oferty
            </h2>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-red-600 transition-all group shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black bg-red-100 text-red-600 px-3 py-1 rounded-full uppercase tracking-widest">
                      {job.type}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-black uppercase italic text-black">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap gap-6 text-sm font-bold text-gray-400">
                      <span>Lokalizacja: {job.location}</span>
                      <span className="text-black">
                        Wynagrodzenie: {job.salary}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black uppercase italic hover:bg-red-600 transition-all group shrink-0">
                    Aplikuj{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 flex flex-wrap gap-4">
                  {job.perks.map((perk, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />{" "}
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO DODATKOWE */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-black uppercase italic mb-6">
          Nie znalazłeś oferty dla siebie?
        </h2>
        <p className="text-gray-500 mb-8 font-medium">
          Zawsze szukamy pasjonatów transportu. Wyślij swoje CV na adres ogólny,
          a odezwiemy się, gdy ruszy nowa rekrutacja.
        </p>
        <a
          href="mailto:wantran.sp@wp.pl"
          className="text-red-600 font-black uppercase italic hover:underline decoration-2 underline-offset-8"
        >
          wantran.sp@wp.pl
        </a>
      </section>
    </main>
  );
}
