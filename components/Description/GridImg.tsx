import React from 'react';
import Image from 'next/image';
import {
  Bus,
  Heart,
  MapPin,
  Share,
  ThumbsUp,
  Ticket,
  Umbrella,
  Waves,
} from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import { Button } from '../ui/button';
import Equipment from './Equipment';

export default function GridImg() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold ">Bandos Maldives</h1>
            <ul className="flex items-center ml-2 text-yellow-300">
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
              <li className="text-xl">★</li>
            </ul>
          </div>
          <div className="flex mt-1">
            <MapPin className="text-blue-700 " />
            <p className="ml-1">
              {' '}
              Bandos Island, 08480 Atoll Malé Nord, Maldives
            </p>
          </div>
          <ul className="flex list-none items-center mt-3 space-x-3 ">
            <li>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="bg-yellow-300 text-gray-500 p-1 rounded-lg ">
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
              <Bus className="text-gray-500 bold" />{' '}
              <p className="text-gray-500 bold">Navette aéroport</p>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex justify-end">
            <li className="text-2xl font-bold ">3,020€</li>
          </ul>
          <ul className="flex items-center justify-end space-x-4">
            <li>
              <Heart className="text-purple-600" />
            </li>
            <li>
              <Share className="text-purple-600" />
            </li>
            <li>
              <Button className="my-2 bg-purple-600">Reserver</Button>
            </li>
          </ul>
          <p className="flex text-purple-600 font-bold">
            <Ticket /> <p className="ml-2">Nous ajustons nos tarifs</p>
          </p>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <article className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                layout="fill"
                objectFit="cover"
                alt="Photo by Minh Pham"
                className="transition duration-200 group-hover:scale-110 cursor-pointer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </article>

            <article className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                layout="fill"
                objectFit="cover"
                alt="Photo by Magicle"
                className="transition duration-200 group-hover:scale-110 cursor-pointer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </article>

            <article className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                layout="fill"
                objectFit="cover"
                alt="Photo by Martin Sanchez"
                className="transition duration-200 group-hover:scale-110 cursor-pointer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </article>

            <article className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                layout="fill"
                objectFit="cover"
                alt="Photo by Lorenzo Herrera"
                className="transition duration-200 group-hover:scale-110 cursor-pointer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
