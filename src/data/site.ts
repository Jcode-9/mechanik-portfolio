export const site = {
  name: 'APEX Mechanic',
  shortName: 'APEX',
  tagline: 'Diagnozujemy. Naprawiamy. Jedziesz dalej.',
  description: 'APEX Mechanic — profesjonalny serwis samochodowy. Diagnostyka, mechanika, hamulce, zawieszenie i kompleksowy serwis auta.',
  phone: '+48 000 000 000',
  email: 'kontakt@apexmechanic.pl',
  address: 'ul. Torowa 12 — ADRES DEMONSTRACYJNY', // TODO: REPLACE WITH CLIENT DATA
  city: '00-001 Warszawa', // TODO: REPLACE WITH CLIENT DATA
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Warszawa', // TODO: REPLACE WITH GOOGLE MAPS URL
  mapEmbedUrl: 'https://www.google.com/maps?q=Warszawa&output=embed', // TODO: REPLACE WITH CLIENT LOCATION
  hours: [
    ['Pon–Pt', '08:00–18:00'],
    ['Sobota', '09:00–14:00'],
    ['Niedziela', 'zamknięte'],
  ],
  social: { instagram: '#', facebook: '#' }, // TODO: REPLACE WITH CLIENT DATA
  url: 'https://apexmechanic.example', // TODO: REPLACE WITH CLIENT DOMAIN
} as const;
