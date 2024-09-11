import { Hotel, Review } from '@/modules/interface';
import React from 'react';
import { Map } from 'lucide-react';
import { Button } from './ui/button';
import { CarouselProduct } from './Carousel';
import { generateStars } from '@/modules/exportFunction';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

type Props = {
  hotel: Hotel;
};

const Product = ({ hotel }: Props) => {
  return (
    <Link href={`/description/presentation`}>
      <article className="mb-6 max-w-screen-lg overflow-hidden shadow md:rounded-none rounded-xl">
        <figure className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          {/* Section Image: Déplacement à gauche */}
          <aside className="order-first h-48 w-full sm:h-auto sm:w-1/2 lg:w-2/5">
            <CarouselProduct />
          </aside>

          {/* Section Détails: Alignement à droite */}
          <figcaption className="flex w-full flex-col sm:w-1/2 lg:w-3/5 sm:p-8 p-4 md:items-start md:text-left text-center">
            {/* Nom de l'hôtel et les étoiles */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
              <h2 className="text-xl font-bold md:text-2xl">{hotel.name}</h2>
              <div className="text-amber-300 text-xl">
                {hotel.reviews &&
                  hotel.reviews.map((review: Review, index: number) => (
                    <span key={index}>{generateStars(review.rating)}</span>
                  ))}
              </div>
            </div>

            {/* Adresse et emplacement */}
            <div className="flex flex-col sm:flex-row items-start md:mt-0 mt-2">
              <p className="text-sm text-blue-700 flex items-center">
                <Map className="mr-1" /> {hotel.address.slice(0, 40)}
              </p>
              <p className="ml-1">(500m du centre)</p>
            </div>

            {/* Liste des avantages */}
            <ul className="list-disc ml-6 mt-3 text-sm">
              <li>Only 2 of these prices left</li>
              <li>Reservation possible without a credit card</li>
            </ul>

            <Separator className="my-4" />

            {/* Détails des prix */}
            <div className="text-right">
              <h3 className="text-xl text-emerald-500 font-bold md:text-2xl">
                {hotel.pricePerNight} €
              </h3>
              <p className="text-gray-500 italic -mt-1">per night</p>
            </div>

            {/* Petit-déjeuner et bouton */}
            <div className="flex justify-between items-center my-4">
              <p className="text-emerald-500 font-bold">Breakfast included</p>
              <Button variant="blue" className="hover:bg-blue-900">
                See available rooms
              </Button>
            </div>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default Product;
