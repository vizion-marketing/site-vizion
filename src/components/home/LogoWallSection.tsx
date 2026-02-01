"use client";

import { motion } from "framer-motion";

export function LogoWallSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8F8F8] overflow-hidden relative">
      <div className="max-w-[82.5rem] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-black/40"
        >
          Ils nous font confiance
        </motion.p>
      </div>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#F8F8F8] to-transparent z-10 pointer-events-none" />
        {/* Logo marquee */}
        <div className="flex logo-marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-12 sm:gap-16 md:gap-20 px-6 sm:px-8">
              {/* Placeholder logos - À remplacer par les vrais logos */}
              {['easyVirtual', 'Ensenat', 'Eldo Wallet', 'Olivier Bas', 'Client 5', 'Client 6', 'Client 7', 'Client 8'].map((name, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="logo-item flex-shrink-0 h-8 sm:h-10 px-4 sm:px-6 flex items-center justify-center"
                >
                  <span className="text-sm sm:text-base font-['Roboto'] font-bold uppercase tracking-wide text-black/30 whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
