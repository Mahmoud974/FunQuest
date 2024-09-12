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

export default function GridImg({}: any) {
  const { findHotel } = useHotel();
  console.log(findHotel);
  console.log(findHotel?.countryAbbr);

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
                style={{
                  fontSize: '1.4em',
                  lineHeight: '1.4em',
                }}
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
      <section className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8">
        <div className="mx-auto max-w-screen-lg">
          <div className="grid grid-cols-2 gap-4">
            {/* Image 1 */}
            <div className="relative w-full h-60">
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                alt="Bandos Maldives 1"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full h-60">
              <Image
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                alt="Bandos Maldives 2"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            {/* Image 3 */}
            <div className="relative w-full h-60">
              <Image
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                alt="Bandos Maldives 3"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>

            {/* Image 4 */}
            <div className="relative w-full h-60">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                alt="Bandos Maldives 4"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
