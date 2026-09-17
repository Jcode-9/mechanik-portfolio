import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ButtonProps = { href: string; children: React.ReactNode; variant?: 'primary' | 'ghost'; className?: string };

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const base = 'inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-[11px] font-bold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-red focus-visible:ring-offset-2 focus-visible:ring-offset-apex-ink';
  const styles = variant === 'primary' ? 'bg-apex-red text-white hover:bg-apex-orange hover:shadow-glow' : 'border border-white/20 text-white hover:border-apex-red hover:text-apex-orange';
  return <Link href={href} className={`${base} ${styles} ${className}`}>{children}<ArrowUpRight size={16} strokeWidth={1.8} /></Link>;
}
