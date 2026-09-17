import { BatteryCharging, CircleGauge, Cog, Disc3, Fan, Gauge, ScanLine, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  number: string;
  name: string;
  description: string;
  details: string;
  includes: string[];
  duration: string;
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: '01',
    name: 'Diagnostyka komputerowa',
    description: 'Odczyt danych i szybkie namierzenie przyczyny usterki.',
    details: 'Łączymy odczyt błędów z pomiarem parametrów rzeczywistych i doświadczeniem mechanika. Dzięki temu nie kasujemy tylko kontrolki — szukamy źródła problemu i wyjaśniamy, co naprawdę wymaga naprawy.',
    includes: ['Odczyt i interpretacja kodów błędów', 'Test parametrów rzeczywistych', 'Kontrola układów elektronicznych', 'Raport z rekomendacją dalszych prac'],
    duration: 'od 45 min',
    image: '/images/services/diagnostyka-komputerowa.png',
    icon: ScanLine,
  },
  {
    number: '02',
    name: 'Serwis olejowy',
    description: 'Olej, filtry i kontrola punktów krytycznych auta.',
    details: 'Serwis olejowy to dobry moment, by sprawdzić kondycję auta szerzej niż tylko przez wymianę płynu. Dobieramy właściwą specyfikację, wymieniamy filtry i kontrolujemy miejsca, które mogą zwiastować większy problem.',
    includes: ['Wymiana oleju zgodnego ze specyfikacją', 'Wymiana filtra oleju', 'Kontrola poziomów płynów eksploatacyjnych', 'Kontrola wycieków i punktów krytycznych'],
    duration: 'od 60 min',
    image: '/images/services/serwis-olejowy.png',
    icon: Gauge,
  },
  {
    number: '03',
    name: 'Układ hamulcowy',
    description: 'Klocki, tarcze, płyn i pomiar skuteczności hamowania.',
    details: 'Hamulce muszą działać przewidywalnie w każdych warunkach. Oceniamy zużycie całego układu, sprawdzamy nierównomierność hamowania i dobieramy zakres prac do faktycznego stanu auta.',
    includes: ['Pomiar grubości klocków i tarcz', 'Kontrola zacisków i przewodów', 'Wymiana płynu hamulcowego', 'Kontrola skuteczności hamowania'],
    duration: 'od 90 min',
    image: '/images/services/uklad-hamulcowy.png',
    icon: Disc3,
  },
  {
    number: '04',
    name: 'Zawieszenie',
    description: 'Diagnoza luzów i wymiana elementów bez zgadywania.',
    details: 'Stuki, ściąganie auta i nierówne zużycie opon mają konkretną przyczynę. Sprawdzamy zawieszenie i układ kierowniczy pod obciążeniem, a potem przedstawiamy rozwiązanie, które ma sens techniczny i finansowy.',
    includes: ['Kontrola luzów zawieszenia', 'Sprawdzenie amortyzatorów i sprężyn', 'Kontrola geometrii i zużycia opon', 'Wymiana zużytych elementów'],
    duration: 'od 90 min',
    image: '/images/services/zawieszenie.png',
    icon: Cog,
  },
  {
    number: '05',
    name: 'Klimatyzacja',
    description: 'Serwis, odgrzybianie i diagnostyka układu A/C.',
    details: 'Sprawna klimatyzacja to komfort, widoczność i czyste powietrze w kabinie. Weryfikujemy szczelność i wydajność układu, wykonujemy serwis czynnika oraz usuwamy przyczynę nieprzyjemnych zapachów.',
    includes: ['Kontrola szczelności układu', 'Odzysk i uzupełnienie czynnika', 'Pomiar temperatury nawiewu', 'Odgrzybianie i wymiana filtra kabinowego'],
    duration: 'od 60 min',
    image: '/images/services/klimatyzacja.png',
    icon: Fan,
  },
  {
    number: '06',
    name: 'Mechanika ogólna',
    description: 'Konkretne naprawy samochodów osobowych i dostawczych.',
    details: 'Od nietypowego dźwięku po awarię, która unieruchomiła auto. Łączymy oględziny, pomiary i praktykę, żeby sprawnie przejść od objawu do naprawy bez niepotrzebnej wymiany sprawnych części.',
    includes: ['Diagnoza objawów i oględziny', 'Naprawy silnika i osprzętu', 'Naprawy układu napędowego', 'Kontrola po wykonaniu prac'],
    duration: 'wycena po diagnozie',
    image: '/images/services/mechanika-ogolna.png',
    icon: Wrench,
  },
  {
    number: '07',
    name: 'Wymiana rozrządu',
    description: 'Kompletny zakres prac z kontrolą napędu osprzętu.',
    details: 'Rozrząd wymieniamy jako kompletny układ, z uwzględnieniem pompy wody i napędu osprzętu tam, gdzie wymaga tego konstrukcja silnika. Przed pracą potwierdzamy zakres i stosujemy części o sprawdzonym pochodzeniu.',
    includes: ['Weryfikacja interwału i stanu rozrządu', 'Wymiana zestawu rozrządu', 'Kontrola pompy wody i napędu osprzętu', 'Ustawienie i kontrola pracy silnika'],
    duration: '1–2 dni robocze',
    image: '/images/services/wymiana-rozrzadu.png',
    icon: CircleGauge,
  },
  {
    number: '08',
    name: 'Przegląd przed zakupem',
    description: 'Raport stanu auta, zanim podejmiesz decyzję.',
    details: 'Pomagamy kupować samochody spokojniej. Ocenimy stan techniczny, historię usterek widoczną w diagnostyce i elementy, których nie widać na pierwszy rzut oka. Na koniec otrzymasz konkretny raport i listę priorytetów.',
    includes: ['Oględziny nadwozia i podwozia', 'Diagnostyka komputerowa', 'Jazda testowa lub test funkcjonalny', 'Raport ryzyk i orientacyjnych kosztów'],
    duration: 'od 90 min',
    image: '/images/services/przeglad-przed-zakupem.png',
    icon: BatteryCharging,
  },
];
