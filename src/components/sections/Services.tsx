'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Check, Clock3, Phone, X } from 'lucide-react';
import { services } from '@/data/services';
import type { Service } from '@/data/services';
import { site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedService(null);

      if (event.key === 'Tab') {
        const dialog = document.querySelector('[role="dialog"]');
        const focusableElements = dialog?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        );

        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [selectedService]);

  const openService = (service: Service, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedService(service);
  };

  const closeService = () => setSelectedService(null);

  return (
    <section id="uslugi" className="section-pad border-b border-white/10 bg-apex-ink">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Services"
            title={<>Serwis bez<br /><span className="text-white/25">kompromisów.</span></>}
            intro="Od pierwszego odczytu błędów do ostatniej kontroli. Pracujemy na danych, doświadczeniu i jasnej komunikacji."
          />
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.number} delay={index * 0.04}>
                <button
                  type="button"
                  className="service-card group relative flex min-h-[270px] w-full flex-col justify-between overflow-hidden bg-apex-ink p-6 text-left focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-apex-red sm:p-7"
                  onClick={(event) => openService(service, event.currentTarget)}
                  aria-label={`Otwórz szczegóły usługi: ${service.name}`}
                >
                  <div className="relative z-10 flex shrink-0 items-start justify-between">
                    <span className="font-mono text-[10px] text-apex-red">{service.number}</span>
                    <Icon size={22} strokeWidth={1.3} className="text-white/40 transition duration-300 group-hover:text-apex-red group-focus-visible:text-apex-red" />
                  </div>
                  <div className="relative z-10 mt-10 sm:mt-12">
                    <h3 className="max-w-[18ch] font-display text-2xl font-bold uppercase leading-none tracking-[-0.03em] text-white">{service.name}</h3>
                    <p className="mt-3 max-w-[28ch] text-xs leading-5 text-white/45">{service.description}</p>
                    <span className="mt-5 flex translate-y-2 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-apex-orange opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      Sprawdź zakres <ArrowUpRight size={13} />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6 lg:items-center"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeService();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-dialog-title"
              className="relative my-auto grid w-full max-w-[1120px] overflow-hidden border border-white/15 bg-apex-panel shadow-2xl shadow-black/50 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,.97fr)]"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative min-h-[270px] overflow-hidden bg-black sm:min-h-[360px] lg:min-h-[650px]">
                <Image
                  src={selectedService.image}
                  alt={`${selectedService.name} — wizualizacja pracy w warsztacie`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover object-[68%_center]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 sm:inset-x-8 sm:bottom-8">
                  <div>
                    <span className="mb-2 block font-mono text-[10px] tracking-[0.18em] text-apex-red">SERVICE FILE / {selectedService.number}</span>
                    <p className="max-w-[360px] text-xs uppercase tracking-[0.16em] text-white/60">APEX MECHANIC / PRECISION SERVICE</p>
                  </div>
                  <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 font-mono text-xs text-white/70 sm:flex">{selectedService.number}</div>
                </div>
              </div>

              <div className="service-dialog-panel relative min-w-0 bg-apex-panel p-5 sm:p-8 lg:p-10">
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeService}
                  className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-apex-ink/85 text-white transition hover:border-apex-red hover:text-apex-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-red sm:right-6 sm:top-6"
                  aria-label="Zamknij szczegóły usługi"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>

                <div className="pr-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-apex-red">Zakres usługi</span>
                  <h2 id="service-dialog-title" className="mt-5 max-w-full break-words font-display text-[clamp(2.25rem,3.3vw,4rem)] font-bold uppercase leading-[.88] tracking-[-0.045em] text-white [overflow-wrap:anywhere]">{selectedService.name}</h2>
                </div>

                <p className="mt-8 max-w-[570px] text-sm leading-7 text-white/60 sm:text-[15px]">{selectedService.details}</p>

                <div className="mt-9 grid gap-4 border-y border-white/10 py-5 sm:grid-cols-2">
                  <div>
                    <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35"><Clock3 size={14} className="text-apex-red" /> Orientacyjny czas</span>
                    <strong className="mt-2 block text-sm font-medium text-white">{selectedService.duration}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Standard APEX</span>
                    <strong className="mt-2 block text-sm font-medium text-white">Diagnoza + konkretna rekomendacja</strong>
                  </div>
                </div>

                <div className="mt-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">W ramach usługi</span>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {selectedService.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-xs leading-5 text-white/65"><Check size={15} className="mt-0.5 shrink-0 text-apex-red" />{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="#umow-wizyte" onClick={closeService} className="inline-flex min-h-12 items-center justify-center gap-3 bg-apex-red px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-apex-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-red focus-visible:ring-offset-2 focus-visible:ring-offset-apex-panel">Umów tę usługę <ArrowUpRight size={16} /></a>
                  <a href={`tel:${site.phone.replaceAll(' ', '')}`} className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 px-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-apex-red hover:text-apex-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-red focus-visible:ring-offset-2 focus-visible:ring-offset-apex-panel"><Phone size={15} /> Zadzwoń</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
