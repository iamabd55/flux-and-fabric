import React from 'react';
import heroImg from './images/hero.jpg';
const Hero = () => {
  return (
    <section className="relative w-full hero-height flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f0d]">
        <img 
          alt="Woman wearing stylish summer clothes" 
          className="w-full h-full object-cover opacity-90" 
          src={heroImg}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-360 mx-auto px-6 lg:px-10">
        <div className="max-w-3xl grid grid-cols-1 gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              New Season
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              Summer Solstice <br /> Collection
            </h1>
            <p className="text-lg lg:text-xl text-white/80 font-light max-w-xl leading-relaxed border-l-2 border-white/20 pl-6">
              Embrace the warmth with breathable fabrics designed for the modern nomad. Lightweight linens and organic cottons.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <button className="px-8 py-5 bg-white text-primary font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl">
              Shop Women
            </button>
            <button className="px-8 py-5 bg-transparent border border-white text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              Shop Men
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;