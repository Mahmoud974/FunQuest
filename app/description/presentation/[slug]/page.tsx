import { EquipementIcon } from '@/modules/exportFunction';
import React from 'react';

type Equipement = {
  icon: React.JSX.Element;
  text: string;
};
export default function Presentation() {
  return (
    <>
      <article className="mt-3">
        <figcaption>
          <div className="flex items-center mt-2">
            <p className="p-3 bg-green-600 w-12 rounded-lg text-white font-bold">
              9,6
            </p>
            <p className="text-2xl ml-2">Exceptionnel</p>
          </div>
          <p>Les voyageurs ont aimés :</p>
          <p>Chambres propres, personnel amical, chambres confortables</p>
          <p className="text-blue-500 text-1xl mt-2 underline">
            Afficher 136 avis
          </p>
        </figcaption>
        <figcaption>
          <p className="mt-3">
            {`Affordable and convenient inn in vibrant Little India district. Ideal
            for family travelers. Enjoy free Wi-Fi, parking, and 24-hour front
            desk. Explore nearby attractions for a rich cultural experience in
            Singapore. Explore vibrant Little India, with its temples, markets,
            and Indian charm. Enjoy 24-hour check-in and room service, along with
            modern rooms featuring air conditioning, Wi-Fi, and luxurious
            toiletries. Conveniently located near Mustafa Centre, Little India,
            and Arab Street, Asphodel Inn is the perfect accommodation choice for
            families exploring Singapore cultural gems. Surrounded by a coral reef
            in Maldives, Dhawa Ihuru - By Banyan Tree enjoy beachfront villas with
            private timber patios on Ihuru Island. It offers guided snorkelling
            safaris, Maldivian cooking classes and a PADI dive centre. The
            thatched-roof villas at the resort offer in-room WiFi and feature
            dining and seating areas in their private gardens. It features views
            of the ocean and toiletries. Some villas have an open-air jet pool.
            Each villa features Maldivian swings. Dhawa Ihuru - By Banyan Tree is
            situated in the North Malé Atoll, a 20-minute speedboat ride from Malé
            International Airport. The resort organises island hopping trips and
            island exploration excursions. The property offers massages and
            aromatherapies at the spa or a walk on the white sandy beach. It's
            water-sports center is well equipped, and all non-motorized sports
            equipment rental is free. The property offers Maldivian specialities
            prepared by the resort's chefs on a private sandbank or a barbecue
            party in your villa. The restaurant have an Indian Ocean view with
            Asian, Mediterranean and local dishes, while the waterfront Velaavani
            serves cocktails. For additional dining / activity variety, guests are
            able to travel to Banyan Tree Vabbinfaru, 5 minutes away by speedboat,
            where they can dine at restaurants and snorkel in the house reef.`}
          </p>
        </figcaption>
        <section className="mb-8">
          <h2 className="text-2xl font-bold my-4">Équipements populaires</h2>
          <ul className="grid grid-cols-4 gap-4 ">
            {EquipementIcon.map((item: Equipement, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                {item.icon}
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}
