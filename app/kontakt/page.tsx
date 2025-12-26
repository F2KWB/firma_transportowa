"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  User2,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  const team = [
    {
      name: "Andrzej",
      role: "Prezes",
      subRole: "Transport i spedycja",
      kom: "+48 519 140 000",
      tel: "58 684 93 00",
      email: "wantran.sp@wp.pl",
    },
    {
      name: "Michalina",
      role: "Specjalista",
      subRole: "Logistyka",
      kom: "+48 519 140 001",
      tel: null,
      email: "wantran.sp@wp.pl",
    },
    {
      name: "Agata",
      role: "Specjalista",
      subRole: "Logistyka",
      kom: "+48 519 140 002",
      tel: "58 684 93 23",
      email: "wantran.sp@wp.pl",
    },
    {
      name: "Bernadetta",
      role: "Specjalista",
      subRole: "Logistyka",
      kom: "+48 792 787 000",
      tel: null,
      email: "wantran.sp@wp.pl",
    },
    {
      name: "Marta",
      role: "Faktury",
      subRole: "Rozliczenia",
      kom: "+48 739 212 100",
      tel: "58 684 93 20",
      email: "wantran.sp@wp.pl",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 1. NAGŁÓWEK ZE ZDJĘCIEM I BIAŁYM PRZEJŚCIEM */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center">
        {/* ZDJĘCIE TŁA */}
        <img 
          src="/kontakt.jpeg" 
          alt="Centrum logistyczne"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* NAKŁADKA - Przyciemnienie + gradient do bieli */}
        <div className="absolute inset-0 bg-black/50" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        {/* TREŚĆ NAGŁÓWKA - Wyrównana do lewej */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-600 text-white rounded-full mb-6 shadow-lg">
            <span className="font-black uppercase italic tracking-widest text-[10px]">
              Kontakt
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white leading-none mb-6">
            Poznaj nasz <span className="text-red-600">zespół</span>
          </h1>

          <p className="text-gray-200 max-w-xl text-xs md:text-sm font-bold uppercase tracking-widest border-l-2 border-red-600 pl-4">
            Jesteśmy do Twojej dyspozycji. Wybierz najwygodniejszą formę kontaktu 
            i porozmawiaj z naszymi specjalistami.
          </p>
        </div>
      </div>

      {/* 2. LISTA OSÓB I SIEDZIBA */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Siedziba firmy
              </h2>
              <div className="text-2xl font-black uppercase italic text-black leading-tight">
                WANTRAN Sp. z o.o.
                <br />
                ul. Aleja Lipowa 6<br />
                80-298 Leźno
              </div>
              <div className="flex items-center gap-2 text-red-600 font-black italic pt-4 border-t border-gray-100">
                <Clock className="w-5 h-5" /> <span>BAZA 24/7</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {team.map((person, index) => (
              <div
                key={index}
                className="group bg-gray-50 p-6 rounded-[2rem] border border-transparent hover:border-red-600 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-red-600 transition-colors">
                      <User2 className="w-6 h-6 text-red-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase italic text-black">
                        {person.name}
                      </h4>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${person.kom.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 hover:bg-black hover:text-white transition-all font-bold text-xs uppercase italic"
                    >
                      <Phone className="w-3 h-3 text-red-600" /> {person.kom}
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 hover:bg-red-600 hover:text-white transition-all font-bold text-xs uppercase italic"
                    >
                      <Mail className="w-3 h-3 text-red-600 group-hover:text-white" />{" "}
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. FORMULARZ KONTAKTOWY */}
        <div id="formularz" className="pt-24 border-t border-gray-100">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-black mb-6">
                Napisz do nas
              </h3>
              <p className="text-gray-500 font-medium leading-relaxed max-w-sm text-sm">
                Nie wiesz z kim się skontaktować? Wyślij wiadomość ogólną, a my
                skierujemy ją do odpowiedniego działu.
              </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative">
              {sent ? (
                <div className="py-20 text-center animate-in zoom-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-red-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-black uppercase italic">
                    Wysłano!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Dziękujemy, odezwiemy się wkrótce.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user-name" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                        Imię i Nazwisko
                      </label>
                      <input
                        id="user-name"
                        required
                        type="text"
                        className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:border-red-600 outline-none transition-all text-sm"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user-email" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                        Email
                      </label>
                      <input
                        id="user-email"
                        required
                        type="email"
                        className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:border-red-600 outline-none transition-all text-sm"
                        placeholder="biuro@firma.pl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="dept-select" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                      Wybierz dział
                    </label>
                    <select
                      id="dept-select"
                      required
                      className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:border-red-600 outline-none transition-all font-bold italic appearance-none cursor-pointer text-sm"
                    >
                      <option value="">Wybierz adresata...</option>
                      <option value="transport">Spedycja i Transport</option>
                      <option value="logistyka">Logistyka</option>
                      <option value="rozliczenia">Faktury i Rozliczenia</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full bg-white border border-gray-200 p-4 rounded-2xl focus:border-red-600 outline-none transition-all resize-none text-sm"
                      placeholder="W czym możemy pomóc?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white p-6 rounded-2xl font-black uppercase italic hover:bg-red-600 transition-all flex items-center justify-center gap-3 group text-sm"
                  >
                    Wyślij zapytanie{" "}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}