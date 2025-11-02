import React from 'react';

export default function GiftingSection() {
  return (
    <section id="gifting" className="bg-black text-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual box mockup */}
          <div className="relative">
            <div className="relative h-72 w-full max-w-md mx-auto">
              {/* Matte black box */}
              <div className="absolute inset-0 rounded-xl bg-zinc-900 shadow-2xl" />
              {/* Lid */}
              <div className="absolute -top-6 left-6 right-6 h-12 rounded-t-xl bg-zinc-950 shadow-xl" />
              {/* Velvet interior */}
              <div className="absolute inset-6 rounded-lg bg-zinc-800" />
              {/* Silver foil logo */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 tracking-[0.08em] text-sm font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#C0C0C0] to-[#ECECEC]">
                DHATU
              </div>
              {/* Plate hint */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#ECECEC] via-[#D7D7D7] to-[#BEBEBE] shadow-xl" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Gift India, Gift Timelessness.</h2>
            <p className="mt-4 text-gray-300">
              Every Dhatu plate is packed as a premium gift — in a matte black box with silver foil logo, velvet interior, and a story card that tells where it comes from. Perfect for weddings, housewarmings, and corporate gifting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="px-5 py-2 rounded-full border border-gray-500 text-gray-200 hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] hover:text-black transition-colors duration-300">
                Corporate Gifting Enquiries
              </a>
              <a href="#collections" className="px-5 py-2 rounded-full border border-gray-500 text-gray-200 hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] hover:text-black transition-colors duration-300">
                Shop Gifting Range
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Crafted to Last */}
      <div className="bg-[#F0F0F0] text-[#4F4F4F] mt-20 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="font-serif text-2xl">Crafted to Last</h3>
            <p className="mt-3 text-[#6A6A6A]">Made with food-grade stainless steel 304. Designed, etched, and finished by skilled craftsmen. Sustainable, durable, and made in India.</p>
          </div>
          <div className="rounded-xl bg-white/60 p-6 shadow-sm">
            <h4 className="font-medium">Engraving</h4>
            <p className="text-sm mt-2 text-[#6A6A6A]">Precision etching captures intricate motifs with clarity and depth.</p>
          </div>
          <div className="rounded-xl bg-white/60 p-6 shadow-sm">
            <h4 className="font-medium">Polishing & Finish</h4>
            <p className="text-sm mt-2 text-[#6A6A6A]">Mirror sheen with soft reflections — the hallmark of understated luxury.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
