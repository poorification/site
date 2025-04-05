import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
      {/* Glitch Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-black mix-blend-overlay animate-glitch opacity-10" />
        <div className="w-full h-full bg-gradient-to-r from-pink-500 via-purple-700 to-green-500 animate-glitch-fast opacity-10" />
      </div>

      {/* LOGO */}
      <header className="relative z-10 py-6 flex justify-center">
        <img
          src="/logo.png"
          alt="$POOR logo"
          className="h-24 w-24 object-contain drop-shadow-lg"
        />
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 z-10">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-pink-500/10 via-purple-700/10 to-green-500/10 blur-3xl" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white z-10 drop-shadow-xl">
          Get Rich or Stay <span className="text-pink-500">$POOR</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 z-10">
          Built on despair, mooning on hope.
        </p>
        <div className="mt-8 flex gap-4 z-10">
          <a
            href="https://t.me/poorcult"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg transition"
          >
            Join the Cult
          </a>
          <a
            href="https://t.me/poorification"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-500 hover:bg-pink-400 text-black px-6 py-3 rounded-2xl font-bold shadow-lg transition"
          >
            Channel
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          What is <span className="text-green-400">$POOR</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          We are the broke, the misfits, the degens. No plan. No VCs. Just memes, hopium, and the hunger to moon.
          This isn’t a project. It’s a shared delusion. A global cult of bag fillers.
        </p>
      </section>

      {/* Meme of the Day */}
      <section className="bg-[#1a1a1a] py-20 text-center z-10 px-6">
        <h3 className="text-3xl font-bold mb-8 text-white">💀 $POOR of the Day</h3>
        <div className="max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <img src="/meme1.png" alt="Meme" className="w-full object-cover" />
        </div>
      </section>

      {/* Links Section */}
      <section className="bg-purple-950 py-16 text-center px-6 z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Dive into the $POOR-verse
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://t.me/poorcult"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-md hover:scale-105 transition"
          >
            💬 Telegram Group
          </a>
          <a
            href="https://t.me/poorification"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-md hover:scale-105 transition"
          >
            📢 Telegram Channel
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-md hover:scale-105 transition"
          >
            🐦 Twitter
          </a>
        </div>
        <p className="mt-8 text-sm text-gray-400">[Contract coming soon]</p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 bg-black z-10">
        <p>You will lose everything. Or maybe not. Who knows. Not financial advice.</p>
      </footer>

      {/* Custom Glitch Animations */}
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }
        @keyframes glitch-fast {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.15; }
        }
        .animate-glitch {
          animation: glitch 2s infinite;
        }
        .animate-glitch-fast {
          animation: glitch-fast 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
