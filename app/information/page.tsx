import AmountHotel from '@/components/Informations/AmountHotel';
import Arrived from '@/components/Informations/Arrived';
import DetailsHotel from '@/components/Informations/DetailsHotel';
import Dispo from '@/components/Informations/Disponibility';
import Form from '@/components/Informations/Form';
import Know from '@/components/Informations/Know';
import NameHotel from '@/components/Informations/NameHotel';
import Profil from '@/components/Informations/Profil';
import RecapRoom from '@/components/Informations/RecapitulatifRoom';
import SpecialAsk from '@/components/Informations/SpecialAsk';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';
import React from 'react';

export default function page() {
  return (
    <>
      <Navbar />
      <section className="mx-auto container ">
        <section className="flex flex-grow gap-2 mt-12">
          {/* HotelName */}
          <section className="flex-col flex gap-5 ">
            <NameHotel />
            <DetailsHotel />
            <AmountHotel />
            <Dispo />
          </section>
          <section className="flex gap-3 flex-col flex-grow">
            <Profil />
            <Form />
            <Know />
            <RecapRoom />
            <SpecialAsk />
            <Arrived />
          </section>
        </section>
        <div className="flex items-center justify-end space-x-4">
          <div className="flex">
            <Ticket /> <p className="ml-2">Nous ajustons nos tarifs</p>
          </div>
          <Button className="my-2 bg-purple-600">
            Prochaine étape: dernières informations{' '}
          </Button>
        </div>
      </section>
    </>
  );
}
