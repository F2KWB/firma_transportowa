import Header from "./components/naglowek";
import Hero from "./components/sekcja_glowna";
import Stats from "./components/statystyki"; // Import nowej sekcji
import Offer from "./components/oferta";
import Team from "./components/zespol";
import Contact from "./components/kontakt";
import Truck from "./components/ciezarowka";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Nagłówek jest w layout.tsx, więc tutaj go nie powtarzamy */}
      <Header />
      <Hero />
      <Stats />
      <Offer />
      <Team />
      <Truck />
      <Contact />
      {/* Tutaj kolejne sekcje... */}
    </main>
  );
}