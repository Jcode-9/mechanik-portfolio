'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';

const links = [['Start', '#start'], ['Usługi', '#uslugi'], ['O nas', '#o-nas'], ['Realizacje', '#realizacje'], ['Opinie', '#opinie'], ['Kontakt', '#kontakt']];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'border-b border-white/10 bg-apex-ink/95 backdrop-blur-xl' : ''}`}>
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#start" className="relative z-10 flex items-center gap-3" aria-label="APEX Mechanic — strona główna"><span className="grid h-8 w-8 place-items-center bg-apex-red text-xs font-black italic">A</span><span className="font-display text-sm font-black uppercase leading-none tracking-[0.08em]">APEX<br /><span className="text-white/45">MECHANIC</span></span></a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">{links.map(([label, href]) => <a key={href} href={href} className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55 transition hover:text-white">{label}</a>)}</nav>
      <div className="flex items-center gap-3"><a href={`tel:${site.phone.replaceAll(' ', '')}`} className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65 transition hover:text-apex-orange sm:flex"><Phone size={14} /> Zadzwoń</a><Button href="#umow-wizyte" className="hidden sm:inline-flex">Umów wizytę</Button><button className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Zamknij menu' : 'Otwórz menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div>
    </div>
    <div aria-hidden={!open} className={`mobile-menu-panel fixed inset-0 z-40 overflow-y-auto px-5 pb-8 pt-28 transition duration-500 lg:hidden ${open ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'}`}><nav className="flex flex-col gap-1" aria-label="Mobilna nawigacja">{links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-display text-4xl font-black uppercase tracking-[-0.04em] text-white">0{index + 1} <span className="text-white/35">/ {label}</span></a>)}</nav><a href="#umow-wizyte" onClick={() => setOpen(false)} className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-apex-red text-[11px] font-bold uppercase tracking-[0.2em] text-white">Umów wizytę</a></div>
  </header>;
}
