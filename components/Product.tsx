import React, { useState } from 'react';
import { Hotel } from '@/modules/interface';
import { MapPin, Heart as HeartIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useImageUnsplash } from '@/app/utils/hooks/useTemplate';
import Image from 'next/image';

type Props = {
  hotel: Hotel;
};

const Product = ({ hotel }: Props) => {
  const { data } = useImageUnsplash();

  const imageUrls = data?.map((item: any) => item.urls.small) || [];
  const getRandomImage = () => {
    const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
    return shuffled[0] || '/sd.jpg';
  };

  const nombreEtoiles = ['★★★★★', '★★★★', '★★★', '★★', '★'];

  // État pour le cœur favori
  const [isFavorite, setIsFavorite] = useState(false);

  // Gestionnaire d'événements pour le clic sur le cœur
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  const randomImage = getRandomImage();

  return (
    <Link href={`/description/presentation/${hotel.id}`}>
      <article className="mb-6 max-w-screen-lg overflow-hidden shadow md:rounded-none rounded-xl">
        <figure className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          {/* Section Image */}
          <aside className="order-first h-48 w-full sm:h-auto sm:w-1/2 lg:w-2/5 relative">
            <div className="relative w-full h-full">
              <Image
                src={randomImage}
                alt={`Image de l'hôtel ${hotel.name}`}
                className="object-cover w-full h-full"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="/sd.jpg"
              />
              {/* Cœur cliquable */}
              <button
                onClick={handleFavoriteToggle}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition-transform"
              >
                <HeartIcon
                  className={`w-6 h-6 ${
                    isFavorite ? 'text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>
          </aside>

          {/* Section Détails */}
          <figcaption className="flex -mt-2 items-center justify-around w-full flex-col sm:w-1/2 lg:w-3/5 sm:p-8 p-4 md:items-start md:text-left text-center">
            {/* Nom de l'hôtel et les étoiles */}
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center">
                <h2 className="text-xl font-bold md:text-xl">{hotel.name}</h2>
                <p className="text-yellow-300 ml-2">
                  {nombreEtoiles[Math.floor(Math.random() * 5)]}
                </p>
              </div>
              <Button className="bg-yellow-300 font-bold p-2 flex justify-end text-black text-2xl">
                <p>{hotel.rate}</p>
              </Button>
            </div>

            {/* Adresse et emplacement */}
            <div>
              <div className="flex flex-col sm:flex-row items-start md:mt-0 mt-2">
                <p className="text-sm text-blue-700 flex items-center">
                  <MapPin className="mr-1" /> {hotel.address?.slice(0, 40)}
                </p>
                <p className="ml-1 italic">(500m du centre)</p>
              </div>
            </div>

            {/* Liste des avantages */}
            <ul className="list-disc ml-2 mt-2 text-sm">
              <li>Only 2 of these prices left</li>
              <li>Reservation possible without a credit card</li>
            </ul>

            <div className="flex flex-col ml-auto text-right">
              <h3 className="text-xl text-emerald-500 font-bold md:text-2xl">
                {hotel.price}€
              </h3>
              <p className="text-gray-500 italic -mt-1">per night</p>
              <small>6 nuits, 2 adultes, 1 enfant</small>
            </div>

            {/* Petit-déjeuner et bouton */}
            <div className="flex mt-4 items-center justify-between w-full">
              <p className="text-emerald-500 font-bold">Breakfast included</p>
              <Button className="bg-purple-600 hover:bg-blue-900">
                Voir les disponibilités
              </Button>
            </div>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default Product;
