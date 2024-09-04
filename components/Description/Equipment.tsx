import { BicepsFlexed, Bus, Car, EggFried, Hotel } from 'lucide-react';
import React from 'react';
import { FaSpa, FaUmbrellaBeach } from 'react-icons/fa';
import { PiSwimmingPoolDuotone } from 'react-icons/pi';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export default function Equipment() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold my-4">Équipements populaires</h2>
      <ul className="grid grid-cols-4 gap-4 ">
        <li className="flex items-center">
          <PiSwimmingPoolDuotone className="text-3xl mr-1 text-amber-700" />{' '}
          Piscine extérieure
        </li>
        <li className="flex items-center">
          <FaSpa className="text-2xl mr-1 text-amber-700" /> Spa & centre de
          bien-être
        </li>
        <li className="flex items-center">
          <Bus className="mr-1 text-amber-700" /> Navette aéroport
        </li>
        <li className="flex items-center">
          <FaUmbrellaBeach className="mr-1 text-amber-700 text-2xl" /> En bord
          de plage
        </li>
        <li className="flex items-center">
          <BicepsFlexed className="mr-1 text-amber-700" /> Salle de sport
        </li>
        <li className="flex items-center">
          <EggFried className="mr-1 text-amber-700" /> Petit-déjeuner
        </li>
        <li className="flex items-center">
          <Hotel className="mr-1 text-amber-700" /> Reception 24h/24
        </li>
      </ul>
    </section>
  );
}
