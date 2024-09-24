'use client';
import React from 'react';
import Image from 'next/image';
import {
  Bus,
  Heart,
  MapPin,
  Share,
  ThumbsUp,
  Ticket,
  Waves,
} from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useHotel } from '@/app/provider/HotelContext';
import ReactCountryFlag from 'react-country-flag';
import { useImageUnsplash } from '@/app/utils/hooks/useTemplate';

export default function GridImg() {
  const { findHotel } = useHotel();
  const { data } = useImageUnsplash();

  // Vérifie que data est défini et génère un tableau d'URL d'images
  const imageUrls = data?.map((item: any) => item.urls.raw) || [];

  // Fonction pour obtenir des images aléatoires
  const getRandomImages = (num: number) => {
    const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomImages = getRandomImages(4);

  return (
    <>
      <div className="flex justify-between">
        {/* Informations sur la destination */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">{findHotel?.name}</h1>
            <ul className="flex items-center ml-2 text-yellow-300">
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
            </ul>
          </div>
          <div className="flex mt-1">
            <MapPin className="text-blue-700" />
            <p className="ml-1">
              {findHotel?.address}, {findHotel?.city},
              <span className="font-bold"> {findHotel?.country}</span>
              <ReactCountryFlag
                className="pb-1 ml-1"
                countryCode={findHotel?.countryAbbr}
                style={{ fontSize: '1.4em', lineHeight: '1.4em' }}
              />
            </p>
          </div>
          <ul className="flex list-none items-center mt-3 space-x-3">
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-yellow-300 text-gray-500 p-1 rounded-lg">
                    <ThumbsUp />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add to library</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
            <li className="bg-purple-200 p-1 flex space-x-3 rounded-md">
              <Waves className="text-purple-600 bold" />
              <p className="text-purple-600 bold">En bord de plage</p>
            </li>
            <li className="bg-gray-200 p-1 flex space-x-3 rounded-md">
              <Bus className="text-gray-500 bold" />
              <p className="text-gray-500 bold">Navette aéroport</p>
            </li>
          </ul>
        </div>

        {/* Prix et actions */}
        <div>
          <ul className="flex justify-end">
            <li className="text-2xl font-bold">{findHotel?.pricePerNight}€</li>
          </ul>
          <ul className="flex items-center justify-end space-x-4">
            <li>
              <Heart className="text-purple-600" />
            </li>
            <li>
              <Share className="text-purple-600" />
            </li>
            <li>
              <Link href="/information">
                <Button className="my-2 bg-purple-600">Reserver</Button>
              </Link>
            </li>
          </ul>
          <p className="flex text-purple-600 font-bold">
            <Ticket />
            <span className="ml-2">Nous ajustons nos tarifs</span>
          </p>
        </div>
      </div>

      {/* Section des images */}
      <section className="bg-white dark:bg-gray-800 w-auto py-6 sm:py-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 gap-4">
            {randomImages.map((url: string, index: number) => (
              <div key={index} className="relative w-full h-60">
                <Image
                  src={url}
                  alt={`Hotel Image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
