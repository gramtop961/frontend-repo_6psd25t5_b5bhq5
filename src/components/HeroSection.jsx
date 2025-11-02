import React from 'react';

const SteelPlate = ({ size = 'w-64 h-64', className = '' }) => {
  return (
    <div
      className={`relative ${size} rounded-full shadow-xl overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base silver gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ECECEC] via-[#D5D5D5] to-[#BFBFBF]" />
      {/* Soft inner vignette to suggest curvature */}
      <div className="absolute inset-0 rounded-full shadow-inner" style={{ boxShadow: 'inset 0 20px 50px rgba(0,0,0,0.15)' }} />
      {/* Shimmer sweep */}
      <div className="absolute -inset-1 rotate-12 animate-[shimmer_4s_linear_infinite]" style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 80%)'
      }} />
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#F5EDE3]">
      {/* Subtle linen-like texture using radial gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 60%), radial-gradient(30% 30% at 20% 80%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0) 70%)'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="tracking-[0.08em] text-4xl md:text-5xl font-serif text-[#5A5A5A]">DHATU</div>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#7A7A7A]">Stories Etched in Steel</p>

          <h1 className="mt-8 text-3xl md:text-4xl font-serif text-[#4F4F4F] leading-tight">
            Where India’s heritage meets modern design.
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#6A6A6A] max-w-xl">
            Designer steel plates crafted with art, emotion, and authenticity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#collections" className="px-5 py-2 rounded-full border border-[#9A9A9A] text-[#4F4F4F] hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] transition-colors duration-300">
              Explore Collections
            </a>
            <a href="#gifting" className="px-5 py-2 rounded-full border border-[#9A9A9A] text-[#4F4F4F] hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] transition-colors duration-300">
              Gift with Dhatu
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <SteelPlate size="w-72 h-72 md:w-80 md:h-80" />
        </div>
      </div>
    </section>
  );
}
