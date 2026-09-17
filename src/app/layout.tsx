import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = { metadataBase: new URL(site.url), title: 'APEX Mechanic | Profesjonalny Serwis Samochodowy', description: site.description, alternates: { canonical: '/' }, openGraph: { title: 'APEX Mechanic | Profesjonalny Serwis Samochodowy', description: site.description, url: site.url, siteName: site.name, type: 'website', locale: 'pl_PL' }, twitter: { card: 'summary_large_image', title: 'APEX Mechanic', description: site.description }, robots: { index: true, follow: true } };

const jsonLd = { '@context': 'https://schema.org', '@type': ['AutoRepair', 'LocalBusiness'], name: site.name, description: site.description, url: site.url, telephone: site.phone, address: { '@type': 'PostalAddress', streetAddress: site.address, addressLocality: site.city, addressCountry: 'PL' }, openingHoursSpecification: site.hours.filter(([, hours]) => hours !== 'zamknięte').map(([day, hours]) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: day === 'Sobota' ? 'Saturday' : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: hours.split('–')[0], closes: hours.split('–')[1] })) };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pl"><body><Navbar /><main>{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>; }
