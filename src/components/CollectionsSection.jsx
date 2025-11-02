import React from 'react';

const PlateCard = ({ title, label, snippet }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#FAF4ED] p-4">
      <div className="aspect-square rounded-full mx-auto w-48 md:w-56 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ECECEC] via-[#D7D7D7] to-[#BEBEBE]" />
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 20px 50px rgba(0,0,0,0.15)' }} />
        {/* Engraving detail on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
          background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)'
        }} />
      </div>
      <div className="mt-4 text-center">
        <p className="text-xs uppercase tracking-wide text-[#7A7A7A]">{label}</p>
        <h3 className="mt-1 font-serif text-lg text-[#4F4F4F]">{title}</h3>
        <p className="mt-2 text-sm text-[#6A6A6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300">{snippet}</p>
      </div>
    </div>
  );
};

export default function CollectionsSection() {
  return (
    <section id="collections" className="bg-[#F5EDE3] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-[#4F4F4F]">The Indian Stories by Dhatu</h2>
          <p className="mt-3 text-[#6A6A6A]">
            Each plate tells a story of a place, a festival, or a feeling. From Kerala’s backwaters to Rajasthan’s desert winds — experience India on a plate.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PlateCard title="Kerala Backwaters" label="Palm & Boat Motif" snippet="A calm flow of palm shadows and boats drifting in monsoon light." />
          <PlateCard title="Jaipur Fort & Peacock" label="Rajasthan" snippet="Graceful plumes and fort geometry etched in mirror steel." />
          <PlateCard title="Udaipur Lake Palace" label="Mewar" snippet="Evening ripples and palace arches in timeless silver." />
          <PlateCard title="Rajasthani Desert Festival" label="Thar" snippet="Dunes, music, and swirling textiles captured in metal." />
        </div>

        <div className="mt-8">
          <a href="#collections" className="inline-block px-5 py-2 rounded-full border border-[#9A9A9A] text-[#4F4F4F] hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] transition-colors duration-300">
            View the Heritage Collection
          </a>
        </div>
      </div>

      {/* Floral Section */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl bg-[#FAF4ED] p-8 flex items-center justify-center">
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ECECEC] via-[#D7D7D7] to-[#BEBEBE]" />
              <div className="absolute inset-0" style={{ boxShadow: 'inset 0 20px 50px rgba(0,0,0,0.15)' }} />
              <div className="absolute inset-0" style={{
                background: 'conic-gradient(from 180deg at 50% 50%, rgba(0,0,0,0.08), rgba(0,0,0,0) 30%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0) 90%)'
              }} />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#4F4F4F]">The Floral Beauty by Dhatu</h2>
            <p className="mt-3 text-[#6A6A6A]">
              Nature’s grace captured in steel. Our floral series celebrates India’s timeless motifs — etched delicately into mirror-polished plates.
            </p>
            <p className="mt-4 text-[#6A6A6A]">
              From lotus swamps in monsoon to vines blooming on palace walls, our floral collection brings the elegance of nature into your home.
            </p>
            <div className="mt-6">
              <a href="#collections" className="inline-block px-5 py-2 rounded-full border border-[#9A9A9A] text-[#4F4F4F] hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] transition-colors duration-300">
                Explore Floral Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
