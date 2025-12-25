export default function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Kolumna 1: Logo i opis */}
        <div className="flex flex-col">
          <span className="text-3xl font-black italic tracking-tighter">WANTRANZ</span>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-xs">
            Transport, spedycja krajowa i międzynarodowa. Solidność i doświadczenie w każdym kilometrze.
          </p>
        </div>

        {/* Kolumna 2: Dane firmy */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-500">Dane firmy</h4>
          <div className="text-sm space-y-2 text-gray-300">
            <p className="font-bold text-white">WANTRAN Sp. z o.o.</p>
            <p>ul. Aleja Lipowa 6, 80-298 Leźno</p>
            <p>NIP: PL58920542</p>
            <p>TRANS Id: 12164</p>
          </div>
        </div>

        {/* Kolumna 3: Szybki kontakt */}
        <div>
          <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-500">Kontakt główny</h4>
          <div className="text-sm space-y-2 text-gray-300">
            <p>TEL: +48 58 684 93 2</p>
            <p>E-mail: wantran.sp@wp.pl</p>
            <p className="pt-4 text-xs text-gray-500 uppercase italic">Baza transportowa czynna 24/7</p>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-[10px] text-gray-500 flex justify-between uppercase tracking-widest">
        <p>© 2024 WANTRANZ. Wszelkie prawa zastrzeżone.</p>
        <p>Created in Premium Style</p>
      </div>
    </footer>
  );
}