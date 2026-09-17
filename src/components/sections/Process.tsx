import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [['Kontakt', 'Opowiedz, co dzieje się z autem. Ustalimy następny krok.'], ['Diagnostyka', 'Sprawdzimy objawy i zmierzymy to, co naprawdę ma znaczenie.'], ['Wycena', 'Dostajesz konkretny zakres prac i koszt przed naprawą.'], ['Naprawa', 'Robimy swoje. Po odbiorze wiesz, co zostało wykonane.']];

export function Process() { return <section className="section-pad border-b border-white/10 bg-apex-panel"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal><SectionHeading index="04" eyebrow="Process" title={<>Od problemu<br /><span className="text-white/25">do rozwiązania.</span></>} /></Reveal><div className="mt-16 grid gap-px bg-white/10 md:grid-cols-4">{steps.map(([title, text], i) => <Reveal key={title} delay={i * .08}><article className="relative min-h-[230px] bg-apex-panel p-6 sm:p-8"><span className="font-mono text-5xl text-white/10">0{i + 1}</span><h3 className="mt-10 font-display text-2xl font-bold uppercase text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p>{i < steps.length - 1 && <ArrowRight className="absolute right-6 top-8 hidden text-apex-red md:block" size={18} />}</article></Reveal>)}</div></div></section>; }
