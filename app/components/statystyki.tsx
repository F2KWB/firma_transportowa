"use client";
import { Truck, Map, Users, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    label: "Przejechanych kilometrów",
    value: "2 500 000+",
    icon: <Map className="w-6 h-6 text-red-500" />,
  },
  {
    id: 2,
    label: "Nowoczesnych pojazdów",
    value: "45",
    icon: <Truck className="w-6 h-6 text-red-500" />,
  },
  {
    id: 3,
    label: "Zadowolonych klientów",
    value: "1200+",
    icon: <Users className="w-6 h-6 text-red-500" />,
  },
  {
    id: 4,
    label: "Lat doświadczenia",
    value: "32", // Od 1992 roku
    icon: <Award className="w-6 h-6 text-red-500" />,
  },
];

export default function AchievementStats() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden text-white">
      {/* Dekoracyjne tło w formie delikatnej mapy świata lub linii */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 Q 25 45, 50 50 T 100 50"
            stroke="white"
            fill="transparent"
            strokeWidth="0.1"
          />
          <path
            d="M0 60 Q 25 55, 50 60 T 100 60"
            stroke="white"
            fill="transparent"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all duration-500">
                {stat.icon}
              </div>

              <div className="text-4xl md:text-5xl font-black italic tracking-tighter mb-2">
                {stat.value}
              </div>

              <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-red-400 transition-colors">
                {stat.label}
              </div>

              {/* Akcent pod spodem */}
              <div className="mt-4 w-8 h-1 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
