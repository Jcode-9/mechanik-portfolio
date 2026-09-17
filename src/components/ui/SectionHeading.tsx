import { ArrowDownRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function SectionHeading({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: ReactNode; intro?: string }) {
  return <div className="grid min-w-0 gap-5 md:grid-cols-[160px_1fr] md:gap-10">
    <div className="flex max-w-full flex-wrap items-start gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-apex-red"><ArrowDownRight size={16} /><span>{index} / {eyebrow}</span></div>
    <div className="min-w-0"><h2 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.91] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">{title}</h2>{intro && <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">{intro}</p>}</div>
  </div>;
}
