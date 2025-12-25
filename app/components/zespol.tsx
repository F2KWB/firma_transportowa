import React from 'react';

export default function Team() {
  const team = [
    {
      name: "Andrzej Wanke",
      role: "Prezes",
      subRole: "Transport, spedycja krajowa i międzynarodowa",
      kom: "+48 519 140 227",
      tel: "58 684 93 23",
      email: "wantrans.sp@wp.pl",
      transId: null
    },
    {
      name: "Michalina Ziegert",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 519 140 227",
      tel: null,
      email: "wantrans.sp@wp.pl",
      transId: "121641-12"
    },
    {
      name: "Agata Voelkner",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 519 140 227",
      tel: "58 684 93 23",
      email: "wantrans.sp@wp.pl",
      transId: "121641-11"
    },
    {
      name: "Bernadetta Siecińska",
      role: "Specjalista ds. transportu i spedycji",
      subRole: "Logistyka",
      kom: "+48 792 787 876",
      tel: null,
      email: "wantrans.sp@wp.pl",
      transId: "121641-14"
    },
    {
      name: "Marta Wałaszkowska",
      role: "Specjalista ds. faktur",
      subRole: null,
      kom: "+48 739 212 123",
      tel: "58 684 93 23",
      email: "wantrans.sp@wp.pl",
      transId: null
    }
  ];

  return (
    <section id="zespol" className="max-w-7xl mx-auto px-4 py-24">
      <div className="mb-16">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Zespół</h2>
        <h3 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter text-black">
          Osoby do kontaktu
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((person, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {person.role}
                </p>
                <h4 className="text-2xl font-black uppercase italic leading-none mb-2">
                  {person.name}
                </h4>
                {person.subRole && (
                  <p className="text-xs text-gray-500 font-medium leading-tight">
                    {person.subRole}
                  </p>
                )}
              </div>

              <div className="space-y-3 border-t border-gray-50 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 uppercase font-bold text-[10px]">Kom.</span>
                  <span className="font-bold text-black">{person.kom}</span>
                </div>
                
                {person.tel && (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 uppercase font-bold text-[10px]">Tel.</span>
                    <span className="font-bold text-black">{person.tel}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-sm border-t border-gray-50 pt-3 mt-3">
                  <span className="text-gray-400 uppercase font-bold text-[10px]">Email</span>
                  <a href={`mailto:${person.email}`} className="font-bold text-black hover:underline underline-offset-4">
                    {person.email}
                  </a>
                </div>
              </div>
            </div>

            {person.transId && (
              <div className="mt-8 pt-4 border-t border-gray-50">
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest italic text-right">
                  Trans Id: {person.transId}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}