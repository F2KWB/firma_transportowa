'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-black italic tracking-tighter">WANTRANZ</div>

        {/* PRZYCISK HAMBURGER (Tylko na mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* MENU (Desktop + Mobile) */}
        <div className={`
          absolute md:static top-full left-0 w-full md:w-auto bg-white 
          flex flex-col md:flex-row items-center gap-8 p-8 md:p-0
          transition-all duration-300 shadow-xl md:shadow-none
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100 pointer-events-none md:pointer-events-auto'}
        `}>
          <Link href="/" className="font-bold uppercase text-xs tracking-widest hover:text-gray-500">Strona Główna</Link>
          <Link href="#oferta" className="font-bold uppercase text-xs tracking-widest hover:text-gray-500">Oferta</Link>
          <Link href="#zespol" className="font-bold uppercase text-xs tracking-widest hover:text-gray-500">Zespół</Link>
          <Link href="#kontakt" className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-xs">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}