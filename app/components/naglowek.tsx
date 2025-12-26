"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // 1. Tworzymy referencje do menu i przycisku
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const services = [
    { name: "Transport Krajowy", href: "/uslugi/transport-krajowy" },
    {
      name: "Transport Międzynarodowy",
      href: "/uslugi/transport-miedzynarodowy",
    },
    { name: "Spedycja", href: "/uslugi/spedycja" },
    { name: "Logistyka i Magazynowanie", href: "/uslugi/logistyka" },
  ];

  // 2. Logika zamykania menu po kliknięciu na zewnątrz
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Sprawdzamy czy menu jest otwarte ORAZ czy kliknięcie nie było wewnątrz menu ANI w przycisk otwierania
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-red-600 sticky top-0 z-50 shadow-sm w-full font-sans border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-black">
        {/* LOGO */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black italic tracking-tighter text-white">
            WANTRANZ
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Transport i Spedycja
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/szczegolowe_info"
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-black transition-colors"
          >
            O nas
          </Link>

          {/* Dropdown Usługi Desktop */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1 hover:text-black transition-colors">
              Usługi
              <svg
                className={`w-3 h-3 transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full -left-4 w-64 bg-red-600 shadow-xl border border-gray-100 py-4 flex flex-col animate-in fade-in slide-in-from-top-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-gray-50 hover:text-red-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/kariera"
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-black transition-colors"
          >
            Kariera
          </Link>

          <Link
            href="/kontakt"
            className="text-xs font-bold uppercase tracking-widest bg-white text-red-600 px-6 py-2 rounded-full hover:bg-black transition-all italic"
          >
            Kontakt
          </Link>
        </div>

        {/* PRZYCISK MENU MOBILE - Dodano ref={buttonRef} */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white" 
          aria-label="Otwórz menu"
        >
          {isOpen ? (
            <span className="text-2xl font-light">✕</span>
          ) : (
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white"></div> {/* Zmieniono na biały dla kontrastu na czerwonym tle */}
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-4 h-0.5 bg-white ml-auto"></div>
            </div>
          )}
        </button>

        {/* MENU ROZWIJANE MOBILE - Dodano ref={menuRef} */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 flex flex-col p-6 gap-6 md:hidden shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)] animate-in slide-in-from-top-5 duration-200"
          >
            <Link
              href="/szczegolowe_info"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.15em] text-black hover:text-red-600"
            >
              O nas
            </Link>

            <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-lg text-black">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Nasze Usługi
              </span>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-wider text-black hover:text-red-600"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <Link
              href="/kariera"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.15em] text-black hover:text-red-600"
            >
              Kariera
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.15em] text-red-600"
            >
              Kontakt
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}