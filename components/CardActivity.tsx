import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { generateStars } from '@/modules/exportFunction';
import { Activities } from '../modules/interface';
import { Clock9 } from 'lucide-react';

interface Props {
  data: Activities;
}

export default function CardActivity({ data }: Props) {
  const { title, description, duration, rating, reviews, image, price } = data;

  return (
    <Card className="w-11/12 rounded-md text-md mb-4 cursor-pointer ">
      <CardHeader className="relative h-48">
        <Image
          className="rounded-t-md"
          src="https://images.unsplash.com/photo-1533616688419-b7a585564566"
          alt="Description de l'image"
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </CardHeader>

      <CardContent className="mt-4 text-bl">
        <h1 className="font-bold text-xl ">{title}</h1>
        <div className="flex items-center ">
          <Clock9 className="w-3 p-0 " />
          <p className="text-sm ml-1">{duration}</p>
        </div>
        <p className="text-gray-700 mb-2">{description}</p>
        <div className="flex items-center">
          <p className="text-yellow-400 text-sm mr-2">
            {generateStars(rating)}
          </p>
          <span className="text-sm italic">({reviews} avis)</span>
        </div>
      </CardContent>

      <CardFooter>
        <p className="text-lg  ">À partir de {price}€ par personne</p>
      </CardFooter>
    </Card>
  );
}
