'use client'
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm w-full">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-black italic tracking-tighter">WANTRANZ</div>

        {/* MENU DESKTOP (Widoczne tylko na dużych ekranach) */}
        <div className="hidden md:flex items-center gap-10">
          <a href="/" className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Strona Główna</a>
          <a href="#oferta" className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Oferta</a>
          <a href="#zespol" className="text-xs font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">Zespół</a>
          <a href="#kontakt" className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-gray-800 transition-all">Kontakt</a>
        </div>

        {/* PRZYCISK MENU MOBILE (Widoczny tylko na telefonie) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Otwórz menu"
        >
          {isOpen ? (
            <span className="text-2xl font-bold">✕</span> // Ikona zamknięcia
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          )}
        </button>

        {/* MENU ROZWIJANE MOBILE */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-6 md:hidden animate-in slide-in-from-top duration-300">
            <a href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Strona Główna</a>
            <a href="#oferta" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Oferta</a>
            <a href="#zespol" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest">Zespół</a>
            <a href="#kontakt" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-blue-600">Kontakt</a>
          </div>
        )}
      </nav>
    </header>
  );
}