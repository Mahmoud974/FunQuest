import React, { useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { useTemplate } from '@/app/utils/hooks/useTemplate';
import { Hotel } from '@/modules/interface';
import { useFilterAccommodation } from '@/store/store';

const SortHotel = () => {
  const { data } = useTemplate();

  const { filteredHotels, setFilteredHotels } = useFilterAccommodation();

  const nombreEtoiles = ['★★★★★', '★★★★', '★★★', '★★', '★', 'Non classé'];
  const ratings = [
    { stars: 3, label: 'Très bien', count: 160 },
    { stars: 4, label: 'Fantastique', count: 129 },
    { stars: 5, label: 'Superbe', count: 62 },
  ];
  const equipements = [
    { name: 'Piscine', count: 98 },
    { name: 'Internet', count: 155 },
    { name: 'Parking', count: 111 },
    { name: 'Navette aéroport', count: 72 },
    { name: 'Gymnase/fitness', count: 98 },
    { name: 'Réception 24h/24', count: 151 },
    { name: 'Familles/enfants bienvenus', count: 154 },
    { name: 'Politique tabac – interdiction de fumer', count: 145 },
    { name: 'Spa/sauna', count: 32 },
    { name: 'Restaurant', count: 116 },
    { name: 'Espace fumeur', count: 88 },
    { name: 'Animaux de compagnie acceptés', count: 4 },
  ];

  const notesEmplacement = [
    { note: '9+ Superbe', count: 62 },
    { note: '8+ Fantastique', count: 129 },
    { note: '7+ Très bien', count: 160 },
  ];

  const getUniqueValues = (data: any[], key: string) => {
    return data && data
      ? Array.from(new Set(data && data?.map((item) => item[key])))
      : [];
  };

  const uniqueTypeRooms = getUniqueValues(data, 'typeRoom');
  const priceTab = getUniqueValues(data, 'pricePerNight');

  const [rating, setRating] = useState(3);
  const [price, setPrice] = useState(0);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value, 10));
  };
  const renderStars = (rating: number) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
      return index < rating ? '★' : '☆'; // Remplir ou vide
    });
    return <span className="text-black">{stars}</span>; // Vous pouvez changer la couleur ici
  };

  return (
    <form className="mt-12 md:mb-12 bg-slate-50 p-10 rounded-xl">
      <ul>
        <li>
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            Tarif par nuit {isPriceOpen ? '-' : '+'}
          </p>
          {isPriceOpen && (
            <div className="py-4 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Prix: {price}€</span>
              </div>
              <div className="flex items-center">
                <Slider
                  defaultValue={[price]}
                  min={Math.min(...priceTab)}
                  max={Math.max(...priceTab)}
                  step={1}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          )}
        </li>

        <li className="flex flex-col mt-4">
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsTypeOpen(!isTypeOpen)}
          >
            {`Type d'hébergement`} {isTypeOpen ? '-' : '+'}
          </p>
          {isTypeOpen && (
            <ul className="grid grid-cols-2 gap-4 max-w-lg mt-3">
              {uniqueTypeRooms?.map((type: any) => (
                <li
                  onClick={() => setFilteredHotels(data, type)}
                  key={type}
                  className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer"
                >
                  {type}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="flex flex-col mt-4">
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsRatingOpen(!isRatingOpen)}
          >
            {`Nombre d'étoiles`} {isRatingOpen ? '-' : '+'}
          </p>
          {isRatingOpen && (
            <div className="w-full mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm">Étoiles: {renderStars(rating)}</span>
              </div>
              <div className="flex items-center">
                <Slider
                  defaultValue={[rating]}
                  min={0}
                  max={5}
                  step={1}
                  className="w-full custom-slider-width"
                  onChange={handleRatingChange}
                />
              </div>
            </div>
          )}
        </li>

        <li className="flex flex-col mt-4">
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsEquipementsOpen(!isEquipementsOpen)}
          >
            Équipements de l’établissement {isEquipementsOpen ? '-' : '+'}
          </p>
          {isEquipementsOpen && (
            <ul className="max-w-lg">
              {equipements.map((equipement) => (
                <li key={equipement.name} className="flex items-center mt-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <span className="ml-2 text-sm">
                    {equipement.name} ({equipement.count})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="flex flex-col mt-4">
          <p
            className="font-bold cursor-pointer"
            onClick={() => setIsNotesOpen(!isNotesOpen)}
          >
            {`Note de l'emplacement`} {isNotesOpen ? '-' : '+'}
          </p>
          {isNotesOpen && (
            <ul className="max-w-lg">
              {notesEmplacement.map((note) => (
                <li key={note.note} className="flex items-center mt-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <span className="ml-2 text-sm">
                    {note.note} ({note.count})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </form>
  );
};

export default SortHotel;
