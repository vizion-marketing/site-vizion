"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const footerLinks = {
  entreprise: [
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F2F2] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12">
      <div className="container-wide px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
          <div className="lg:col-span-4 flex flex-col gap-10">
            <Link href="/" className="block">
              <Image
                src="/logo-vizion.svg"
                alt="Vizion - Agence Marketing B2B"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0"
              />
            </Link>

            <div className="flex flex-col gap-5">
              <a href="mailto:contact@by-vizion.com" className="flex items-center gap-4 text-black/80 group cursor-pointer hover:text-black transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-none group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <span className="font-[var(--font-body)] text-sm">contact@by-vizion.com</span>
              </a>
              <a href="tel:+33750836543" className="flex items-center gap-4 text-black/80 group cursor-pointer hover:text-black transition-colors">
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-none group-hover:bg-black group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <span className="font-[var(--font-body)] text-sm">07 50 83 65 43</span>
              </a>
              <div className="flex items-center gap-4 text-black/80">
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-none">
                  <MapPin size={16} />
                </div>
                <span className="font-[var(--font-body)] text-sm">815 La Pyrénéenne, 31670 Labège</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/vizion-marketing-b2b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez Vizion sur LinkedIn"
                className="w-11 h-11 border border-black/10 rounded-none flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-col gap-6">
              <h4 className="surtitre text-black">Navigation</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.entreprise.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-[var(--font-body)] text-sm text-black/60 hover:text-black transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="card-white p-8 flex flex-col gap-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <h4 className="surtitre text-black">Une question ?</h4>
                <p className="font-[var(--font-body)] text-xs text-black/50 leading-relaxed">
                  Notre équipe est disponible pour échanger sur vos projets de croissance B2B.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn btn-primary w-full"
              >
                NOUS CONTACTER
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-6 sm:pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="surtitre text-black/40">
            © {currentYear} VIZION. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="surtitre text-black/40 hover:text-black transition-colors">
              Mentions Légales
            </Link>
            <Link href="/confidentialite" className="surtitre text-black/40 hover:text-black transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
