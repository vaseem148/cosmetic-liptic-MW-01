import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const CosmeticHero = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-[#F7D2D2] overflow-hidden flex items-center py-20">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-8 order-2 lg:order-1">

          <div className="space-y-1">
            <h2 className="text-3xl md:text-5xl font-sans font-medium tracking-widest text-stone-800 uppercase leading-tight">
              Effortless Glow Feels
            </h2>

            <h1 className="text-4xl md:text-6xl font-serif text-stone-500 uppercase tracking-[0.2em] opacity-80">
              Luxury
            </h1>
          </div>

          <button className="w-fit bg-[#1a1a1a] text-white px-10 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300 shadow-xl">
            Enquiry Now
          </button>

          <div className="max-w-xs space-y-6">

            {/* Small product image */}
            <div className="w-24 drop-shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200"
                alt="Product"
                className="rounded-lg"
              />
            </div>

            <p className="text-stone-700 text-sm leading-relaxed font-light">
              Nurture your skin with clean, conscious ingredients designed to reveal a naturally luminous, healthy single day.
            </p>
          </div>

          {/* Slider buttons */}
          <div className="flex space-x-6 items-center pt-4">
            <button className="p-2 border border-stone-800/20 rounded-full hover:bg-white/20 transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>

            <button className="p-2 border border-stone-800/20 rounded-full hover:bg-white/20 transition-colors">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE VIDEO SHAPE */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-lg aspect-[4/5]">

            {/* Organic Shape */}
            <div
              className="w-full h-full overflow-hidden bg-stone-200 shadow-2xl"
              style={{ borderRadius: '45% 55% 65% 35% / 40% 35% 65% 60%' }}
            >

              {/* VIDEO */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              >
                <source src="/cosmetic.mp4" type="video/mp4" />
              </video>

            </div>

            {/* Sparkle Icons */}
            <div className="absolute top-10 -right-6 text-white drop-shadow-lg">
              <Sparkles size={54} fill="white" className="opacity-90 animate-pulse" />
            </div>

            <div className="absolute bottom-20 -left-6 text-white drop-shadow-lg">
              <Sparkles size={30} fill="white" className="opacity-80" />
            </div>

            {/* Trusted Customers */}
            <div className="absolute -bottom-6 right-0 md:-right-8 bg-white/30 backdrop-blur-xl p-4 flex items-center space-x-3 border border-white/40 rounded-3xl shadow-lg">

              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="customer"
                    />
                  </div>
                ))}
              </div>

              <div className="pr-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-800">
                  Trusted by 10k+
                </p>
                <p className="text-[10px] uppercase tracking-tighter text-stone-600">
                  Customers
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CosmeticHero;