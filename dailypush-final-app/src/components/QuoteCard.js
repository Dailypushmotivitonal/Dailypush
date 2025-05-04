import { quotes } from "../data/quotes";

export default function QuoteCard() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="p-6 max-w-xl mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-xl border border-white/10 backdrop-blur-md">
      <p className="text-white text-xl font-semibold italic text-center animate-pulse drop-shadow-md">{`“${quote}”`}</p>
    </div>
  );
}
