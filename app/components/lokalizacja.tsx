'use client';
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function LocationSection() {
  const companyData = {
    name: "WANTRANZ",
    address: "ul. Przykładowa 123",
    city: "00-000 Miejscowość",
    phone: "+48 123 456 789",
    email: "biuro@wantranz.pl",
    hours: "Pon - Pt: 08:00 - 16:00"
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEWA STRONA: Dane adresowe */}
          <div className="flex flex-col justify-center">
            <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              Gdzie nas znaleźć?
            </h3>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none text-black">
              Siedziba Firmy <br /> i Baza Transportowa
            </h2>
            
            <div className="space-y-8">
              {/* Adres */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Adres biura</h4>
                  <p className="text-gray-600 font-medium">{companyData.address}</p>
                  <p className="text-gray-600 font-medium">{companyData.city}</p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest mb-1">Zadzwoń do nas</h4>
                  <p className="text-xl font-black text-black italic tracking-tight">{companyData.phone}</p>
                </div>
              </div>

              {/* Email i Godziny */}
              <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-gray-100">
                <div className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-600">{companyData.email}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-bold text-gray-600">{companyData.hours}</span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${companyData.address}+${companyData.city}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-xs hover:bg-blue-600 transition-all shadow-lg"
              >
                Wyznacz trasę
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PRAWA STRONA: Mapa */}
          <div className="relative h-[400px] lg:h-auto min-h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.43328543885!2d21.0117811!3d52.231838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc66a2673071%3A0x7d80000000000000!2sWarszawa!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
