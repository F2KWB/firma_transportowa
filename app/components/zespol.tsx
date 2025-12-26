'use client';
import React from 'react';
import { Phone, Mail, User2, MessageSquare } from 'lucide-react';

export default function KontaktPage() {
  const team = [
    {
      name: "Andrzej",
      role: "Prezes",
      subRole: "Transport, spedycja krajowa i międzynarodowa",
      kom: "+48 519 140 000",
      tel: "58 684 93 00",
      email: "wantran.sp@wp.pl",
      transId: null
    },
    {
      name: "Michalina",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 519 140 001",
      tel: null,
      email: "wantran.sp@wp.pl",
      transId: "121641-1"
    },
    {
      name: "Agata",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 519 140 002",
      tel: "58 684 93 23",
      email: "wantran.sp@wp.pl",
      transId: "121641"
    },
    {
      name: "Bernadetta",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 792 787 000",
      tel: null,
      email: "wantran.sp@wp.pl",
      transId: "121641-1"
    },
    {
      name: "Marta",
      role: "Specjalista ds. faktur",
      subRole: null,
      kom: "+48 739 212 100",
      tel: "58 684 93 20",
      email: "wantran.sp@wp.pl",
      transId: null
    }
  ];

  return (
    <section id="zespol" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-4">Zespół WANTRANZ</h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-black leading-none">
          Osoby do kontaktu
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 p-8 rounded-[2.5rem] border border-transparent hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors duration-500">
                    <User2 className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  {person.transId && (
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">
                      TransID: {person.transId}
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">
                    {person.role}
                  </p>
                  <h4 className="text-3xl font-black uppercase italic leading-none mb-3 group-hover:text-blue-600 transition-colors">
                    {person.name}
                  </h4>
                  {person.subRole && (
                    <p className="text-xs text-gray-500 font-bold leading-tight uppercase tracking-wide">
                      {person.subRole}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {/* Przycisk zadzwoń Komórka */}
                  <a 
                    href={`tel:${person.kom.replace(/\s+/g, '')}`} 
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-600 hover:scale-[1.02] transition-all group/btn"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-[10px] font-bold uppercase text-gray-400">Komórka</span>
                    </div>
                    <span className="font-black text-black italic text-sm">{person.kom}</span>
                  </a>

                  {/* Przycisk zadzwoń Stacjonarny (opcjonalnie) */}
                  {person.tel && (
                    <a 
                      href={`tel:${person.tel.replace(/\s+/g, '')}`} 
                      className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-600 hover:scale-[1.02] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-[10px] font-bold uppercase text-gray-400">Stacjonarny</span>
                      </div>
                      <span className="font-black text-black italic text-sm">{person.tel}</span>
                    </a>
                  )}

                  {/* Przycisk Email */}
                  <a 
                    href={`mailto:${person.email}`} 
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:bg-blue-600 hover:border-blue-600 transition-all group/mail"
                  >
                    <div className="flex items-center gap-3 text-gray-400 group-hover/mail:text-white">
                      <Mail className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase">Email</span>
                    </div>
                    <span className="font-black italic text-sm text-black group-hover/mail:text-white">
                      {person.email}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}