import React from 'react';

export default function AboutContactSection() {
  return (
    <section id="about" className="bg-[#F5EDE3]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#4F4F4F]">From Steel to Story.</h2>
            <p className="mt-4 text-[#6A6A6A]">
              Dhatu was born from the idea that art doesn’t have to hang on a wall — it can live in your hands, on your table, and in your memories. We work with artisans, designers, and storytellers to turn stainless steel into heirlooms — pieces that shine with India’s heritage and craftsmanship.
            </p>
          </div>
          <div className="rounded-2xl bg-[#FAF4ED] p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#4F4F4F]">Made with pride in India 🇮🇳</h3>
            <ul className="mt-4 space-y-2 text-[#6A6A6A] list-disc list-inside">
              <li>Premium materials and finishes</li>
              <li>Artisan-led design and production</li>
              <li>Thoughtful packaging and gifting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="bg-gradient-to-b from-[#ECECEC] to-[#F7F7F7]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Contact form */}
          <form className="bg-white/70 backdrop-blur rounded-2xl p-6 shadow">
            <h3 className="font-serif text-2xl text-[#4F4F4F]">Get in Touch</h3>
            <div className="mt-4 grid gap-4">
              <input type="text" name="name" placeholder="Name" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80" />
              <input type="email" name="email" placeholder="Email" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80" />
              <textarea name="message" rows="4" placeholder="Message" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80" />
              <button type="button" className="px-5 py-2 rounded-full border border-[#9A9A9A] text-[#4F4F4F] hover:bg-gradient-to-r hover:from-[#C0C0C0] hover:to-[#ECECEC] transition-colors duration-300 w-max">Send Message</button>
            </div>
          </form>

          {/* Contact details */}
          <div>
            <h3 className="font-serif text-2xl text-[#4F4F4F]">Connect</h3>
            <ul className="mt-4 space-y-2 text-[#6A6A6A]">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Instagram</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">Pinterest</a>
              </li>
              <li className="mt-2">Email: <a href="mailto:contact@dhatu.in" className="underline hover:text-black">contact@dhatu.in</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300/60">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-[#6A6A6A]">
            <p>© Dhatu 2025. Stories Etched in Steel.</p>
            <p>Made with pride in India 🇮🇳</p>
          </div>
        </div>
      </div>
    </section>
  );
}
