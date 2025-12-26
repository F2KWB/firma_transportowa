'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Transport Krajowy', href: '/uslugi/transport-krajowy' },
    { name: 'Transport Międzynarodowy', href: '/uslugi/transport-miedzynarodowy' },
    { name: 'Spedycja', href: '/uslugi/spedycja' },
    { name: 'Logistyka i Magazynowanie', href: '/uslugi/logistyka' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm w-full font-sans border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-black">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black italic tracking-tighter text-black">WANTRANZ</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Transport i Spedycja</span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/szczegolowe_info" className="text-xs font-bold uppercase tracking-widest text-black hover:text-blue-600 transition-colors">
            O nas
          </Link>
          
          {/* Dropdown Usługi Desktop */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-xs font-bold uppercase tracking-widest text-black flex items-center gap-1 hover:text-blue-600 transition-colors">
              Usługi
              <svg className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full -left-4 w-64 bg-white shadow-xl border border-gray-100 py-4 flex flex-col animate-in fade-in slide-in-from-top-2">
                {services.map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href}
                    className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/kariera" className="text-xs font-bold uppercase tracking-widest text-black hover:text-blue-600 transition-colors">
            Kariera
          </Link>

          <Link href="/kontakt" className="text-xs font-bold uppercase tracking-widest bg-black text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all italic">
            Kontakt
          </Link>
        </div>

        {/* PRZYCISK MENU MOBILE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Otwórz menu"
        >
          {isOpen ? <span className="text-2xl font-light">✕</span> : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black ml-auto"></div>
            </div>
          )}
        </button>

        {/* MENU ROZWIJANE MOBILE */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-6 md:hidden shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
            <Link href="/szczegolowe_info" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-black hover:text-blue-600">
              O nas
            </Link>
            
            <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg text-black">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nasze Usługi</span>
              {services.map((service) => (
                <Link 
                  key={service.name} 
                  href={service.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-black hover:text-blue-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link href="/kariera" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-black hover:text-blue-600">
              Kariera
            </Link>

            <Link href="/kontakt" onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-[0.15em] text-blue-600">
              Kontakt
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}