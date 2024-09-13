import {
  Accessibility,
  CalendarCheck,
  Clock,
  CreditCard,
  User,
} from 'lucide-react';
import { Bus, BicepsFlexed, EggFried, Hotel } from 'lucide-react';
import { FaSpa, FaUmbrellaBeach } from 'react-icons/fa';
import { PiSwimmingPoolDuotone } from 'react-icons/pi';
export const generateStars = (rating: number): string => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  return '★'.repeat(fullStars) + (halfStars ? '☆' : '');
};

export const filterTheSearch = (title: string, db: any) => {
  if (!db) {
    return [];
  }

  const filteredData = db?.filter((item: any) =>
    item?.title.toLowerCase().includes(title.toLowerCase())
  );

  return filteredData;
};

export const aboutActivity = [
  {
    logo: <CalendarCheck />,
    title: 'Annulation gratuite',
    content: `Annulation jusqu’à 24 heures à l’avance pour un remboursement intégral`,
  },
  {
    logo: <CreditCard />,
    title: 'Réservez maintenant, payez plus tard',
    content: `Restez flexible dans vos projets de voyage : réservez votre place sans rien payer aujourd'hui`,
  },
  {
    logo: <Clock />,
    title: 'Durée 70 minutes',
    content: `Vérifiez les disponibilités pour voir les heures de début`,
  },
  {
    logo: <User />,
    title: 'Guide',
    content: `Anglais`,
  },
  {
    logo: <Accessibility />,
    title: 'Accessible aux personnes en fauteuil roulant',
    content: null,
  },
];

export const EquipementIcon = [
  {
    icon: <PiSwimmingPoolDuotone className="text-3xl mr-1 text-amber-700" />,
    text: 'Piscine extérieure',
  },
  {
    icon: <FaSpa className="text-2xl mr-1 text-amber-700" />,
    text: `Spa & centre de bien-être`,
  },
  {
    icon: <Bus className="mr-1 text-amber-700" />,
    text: 'Navette aéroport',
  },
  {
    icon: <FaUmbrellaBeach className="mr-1 text-amber-700 text-2xl" />,
    text: 'En bord de plage',
  },
  {
    icon: <BicepsFlexed className="mr-1 text-amber-700" />,
    text: 'Salle de sport',
  },
  {
    icon: <EggFried className="mr-1 text-amber-700" />,
    text: 'Petit-déjeuner',
  },
  {
    icon: <Hotel className="mr-1 text-amber-700" />,
    text: 'Reception 24h/24',
  },
];
