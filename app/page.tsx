import Header from "./components/naglowek";
import Hero from "./components/sekcja_glowna";
import Stats from "./components/statystyki"; // Import nowej sekcji
import Offer from "./components/oferta";
import Team from "./components/zespol";
import Contact from "./components/kontakt";
import Truck from "./components/ciezarowka";

export default function Page() {
  return (
    // 'items-center' centruje wszystko w poziomie, 'w-full' dba o szerokość
    <main className="flex flex-col items-center w-full min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      
      {/* Każda sekcja dostaje w-full, żeby kontrolować swoje max-w wewnątrz */}
      <div className="w-full flex justify-center"><Header /></div>
      <div className="w-full flex justify-center"><Hero /></div>
      <div className="w-full flex justify-center"><Stats /></div>
      <div className="w-full flex justify-center"><Offer /></div>
      <div className="w-full flex justify-center"><Team /></div>
      <div className="w-full flex justify-center"><Truck /></div>
      <div className="w-full flex justify-center"><Contact /></div>
      
    </main>
  );
}