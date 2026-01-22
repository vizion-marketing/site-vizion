"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Conseil Stratégique', href: '/services/conseil-strategique' },
    { name: 'Solutions SaaS', href: '/services/solutions-saas' },
  ],
  entreprise: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Cas clients', href: '/cas-clients' },
    { name: 'Blog', href: '/blog' },
  ],
  contact: [
    { name: 'Contactez-nous', href: '/contact' },
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F2F2F2] pt-24 pb-12">
      <div className="container-wide px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 flex flex-col gap-10">
            <Link href="/" className="font-['Roboto'] text-2xl font-[900] uppercase tracking-tighter text-black">
              Conseil<span className="text-black/30">Digital</span>
            </Link>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 text-black/80 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <span className="font-['Inter'] text-sm">contact@conseildigital.fr</span>
              </div>
              <div className="flex items-center gap-4 text-black/80 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center border border-black/10 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                  <Phone size={16} />
                </div>
                <span className="font-['Inter'] text-sm">+33 (0)1 23 45 67 89</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="w-11 h-11 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-11 h-11 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="surtitre text-black">Services</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-['Inter'] text-sm text-black/60 hover:text-black transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="surtitre text-black">Entreprise</h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.entreprise.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="font-['Inter'] text-sm text-black/60 hover:text-black transition-colors">
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
                <h4 className="surtitre text-black">Newsletter</h4>
                <p className="font-['Inter'] text-xs text-black/50 leading-relaxed">
                  Recevez nos dernières analyses stratégiques directement.
                </p>
              </div>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-[#F2F2F2] border-none text-sm font-['Inter'] focus:ring-1 focus:ring-black outline-none rounded-md"
                  required
                />
                <button type="submit" className="btn-primary w-full py-4 text-xs tracking-widest font-[900]">
                  S&apos;INSCRIRE
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="surtitre text-black/40">
            © {currentYear} CONSEIL DIGITAL. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="surtitre text-black/40 hover:text-black transition-colors">
              Mentions Légales
            </Link>
            <Link href="#" className="surtitre text-black/40 hover:text-black transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
