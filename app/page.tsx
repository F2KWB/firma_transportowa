import Header from "./components/naglowek";
import Hero from "./components/sekcja_glowna";
import O_nas from "./components/o_nas";
import Certyfikaty from "./components/certyfikaty";
import Kierunki from "./components/kierunki";
import Lokalizacja from "./components/lokalizacja";

import Stats from "./components/statystyki"; // Import nowej sekcji
import Team from "./components/zespol";
import Contact from "./components/kontakt";
import Truck from "./components/ciezarowka";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Nagłówek jest w layout.tsx, więc tutaj go nie powtarzamy */}
      <Hero />
      <O_nas />
      <Stats />
      <Certyfikaty />
      <Kierunki />
      <Truck />
      <Lokalizacja />
      {/* Tutaj kolejne sekcje... */}
    </main>
  );
}