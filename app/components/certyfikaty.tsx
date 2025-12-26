"use client";
// Poprawione importy - dodano brakujące ikony
import {
  FileText,
  Award,
  CheckCircle,
  Download,
  ShieldCheck,
  Globe,
} from "lucide-react";

const certificates = [
  {
    title: "Licencja Międzynarodowa",
    number: "nr TU-062680",
    description:
      "Zezwolenie na międzynarodowe wykonywanie zarobkowego transportu drogowego rzeczy.",
    icon: <Globe className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Certyfikat Kompetencji",
    number: "nr 05837/F4/03",
    description:
      "Potwierdzenie posiadania kwalifikacji niezbędnych do zarządzania transportem.",
    icon: <Award className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Polisa OCP",
    number: "Suma: 250 000 EUR",
    description:
      "Pełne ubezpieczenie odpowiedzialności cywilnej przewoźnika w ruchu międzynarodowym.",
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
  },
];

export default function CertificatesSection() {
  return (
    <section id="certyfikaty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">
              Certyfikaty i licencje
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group p-8 border-2 border-gray-50 rounded-[2rem] hover:border-red-100 hover:bg-red-50/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <CheckCircle className="text-red-500 w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-red-600 font-mono text-xs font-bold mb-4 uppercase tracking-wider">
                {cert.number}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {cert.description}
              </p>

              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 group-hover:text-red-600 transition-colors">
                <Download className="w-4 h-4" />
                Pobierz dokument
              </button>
            </div>
          ))}
        </div>

        {/* Dolny pasek z OCP */}
        <div className="mt-16 p-8 bg-gray-900 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex w-16 h-16 bg-red-600 rounded-full items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold italic tracking-tight uppercase">
                Bezpieczeństwo ładunku (OCP)
              </p>
              <p className="text-gray-400 text-sm">
                Twoje towary są chronione polisą na kwotę 250 000 EUR
              </p>
            </div>
          </div>
          <a
            href="#kontakt"
            className="w-full md:w-auto px-10 py-4 bg-white text-black rounded-full font-bold uppercase text-xs hover:bg-red-600 hover:text-white transition-all text-center"
          >
            Poproś o kopię polisy
          </a>
        </div>
      </div>
    </section>
  );
}
