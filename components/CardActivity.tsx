import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import React, { useState } from 'react';
import { generateStars } from '@/modules/exportFunction';
import { Activities } from '../modules/interface';
import { Clock9, Heart } from 'lucide-react'; // Ajout de l'icône Heart pour le bouton J'aime
import Link from 'next/link';

interface Props {
  data: Activities;
}

export default function CardActivity({ data }: Props) {
  const {
    title,
    description,
    duration,
    rating,
    reviews,
    image,
    price,
    id,
    countries,
  } = data;

  const [liked, setLiked] = useState(false); // État pour gérer le bouton "J'aime"
  const [tab, setTab] = useState<Activities[]>([]); // Tableau qui stocke les éléments aimés

  // Fonction pour gérer le clic sur le bouton J'aime
  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault(); // Pour éviter d'activer le lien lors du clic

    // Si l'activité est déjà dans la liste des "J'aime", on la retire
    if (liked) {
      setTab((prevTab) =>
        prevTab.filter((activity) => activity.id !== data.id)
      );
    }
    // Sinon, on l'ajoute
    else {
      setTab((prevTab) => [...prevTab, data]);
    }

    setLiked(!liked); // Inverse l'état de "J'aime"
  };

  return (
    <Link href={`/activities/description/${id}`}>
      <Card className="w-11/12 rounded-md text-md mb-4  cursor-pointer relative">
        <CardHeader className="relative h-48 mt-0">
          {/* Bouton J'aime au-dessus de l'image */}
          <button
            className="absolute top-2 right-2 bg-white p-1 rounded-full z-10"
            onClick={toggleLike}
          >
            <Heart
              className={`w-6 h-6  ${liked ? 'text-red-500' : 'text-gray-400'}`} // Change la couleur en fonction de l'état
              fill={liked ? 'red' : 'none'} // Remplit le cœur si aimé
            />
          </button>

          <Image
            className="rounded-t-md mt-0 "
            src={image}
            alt={`Image de ${title}`}
            fill
            style={{ objectFit: 'cover', marginTop: 0 }}
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
          <p className="text-lg ">
            <span className="text-lg  font-bold  ">{price}€</span>/pers.
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
