export default function Header() {
  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Grupa Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-black text-2xl tracking-tighter text-black uppercase">
            WANTRANZ
          </span>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            Transport i spedycja międzynarodowa
          </span>
        </div>

        {/* Nawigacja sekcji */}
        <nav className="flex gap-10 text-[11px] font-bold uppercase tracking-widest">
          <a href="/" className="hover:text-zinc-500 transition-colors">
            Start
          </a>
          <a href="#oferta" className="hover:text-zinc-500 transition-colors">
            Usługi
          </a>
          <a
            href="#statystyki"
            className="hover:text-zinc-500 transition-colors"
          >
            Statystyki
          </a>
          <a href="#zespol" className="hover:text-zinc-500 transition-colors">
            Flota
          </a>
          <a
            href="#kontakt"
            className="hover:text-zinc-500 transition-colors border-b-2 border-black pb-1"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
