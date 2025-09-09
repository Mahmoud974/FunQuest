'use client';
import React, { useEffect, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { useTemplate } from '@/app/utils/hooks/useTemplate';
import { useFilterAccommodation } from '@/store/store';

const SortHotel = () => {
  const { data } = useTemplate();
  const [rating, setRating] = useState(3);
  const [price, setPrice] = useState(0);
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const { setFilteredHotels } = useFilterAccommodation();

  const equipementHotel = () => {
    const equip = data.map((item: any) => item.equipment).flat();
    const newTab = [...new Set(equip)];

    return newTab.map((item: any) => (
      <li key={item} className="flex items-center mt-2">
        <input type="checkbox" className="cursor-pointer" />
        <span className="ml-2 text-sm">{item}</span>
      </li>
    ));
  };

  const getUniqueValues = (data: any[], key: string) => {
    return data && data
      ? Array.from(new Set(data && data?.map((item) => item[key])))
      : [];
  };

  const uniqueTypeRooms = getUniqueValues(data, 'typeRoom');
  const priceTab = getUniqueValues(data, 'pricePerNight');

  useEffect(() => {
    if (priceTab.length > 0) {
      setPrice(0);
    }
  }, [priceTab]);

  const handlePriceChange = (value: number[]) => {
    setPrice(value[0]);
    filterHotelsByPrice(value[0]);
  };

  const filterHotelsByPrice = (selectedPrice: number) => {
    const filtered = data.filter(
      (hotel: any) => hotel.pricePerNight <= selectedPrice
    );
    setFilteredHotels(filtered);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseInt(event.target.value, 10));
    filterHotelsByRating(parseInt(event.target.value, 10));
  };

  const filterHotelsByRating = (selectedRating: number) => {
    const filtered = data.filter(
      (hotel: any) => hotel.rating >= selectedRating
    );
    setFilteredHotels(filtered);
  };

  const handleNoteChange = (note: string) => {
    setSelectedNotes(
      (prev) =>
        prev.includes(note)
          ? prev.filter((n) => n !== note) // Retire la note si elle est déjà sélectionnée
          : [...prev, note] // Ajoute la note si elle n'est pas sélectionnée
    );
    filterHotelsByNotes(note);
  };

  const filterHotelsByNotes = (selectedNote: string) => {
    const noteThresholds: { [key: string]: number } = {
      '9+ Superbe': 9,
      '8+ Fantastique': 8,
      '7+ Très bien': 7,
    };

    const filtered = data.filter((hotel: any) => {
      const noteValue = noteThresholds[selectedNote];
      return noteValue ? hotel.rating >= noteValue : true; // Filtrer uniquement si une note est sélectionnée
    });
    setFilteredHotels(filtered);
  };

  const renderStars = (rating: number) => {
    return (
      <span className="text-black">
        {Array.from({ length: 5 }, (_, index) => (index < rating ? '★' : '☆'))}
      </span>
    );
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
                  min={Math.min(...priceTab) || 0}
                  max={Math.max(...priceTab) || 1000}
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
              {uniqueTypeRooms.map((type: any) => (
                <li
                  key={type}
                  onClick={() => setFilteredHotels(data, type)}
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
            <ul className="max-w-lg">{equipementHotel()}</ul>
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
              {[
                { note: '9+ Superbe', count: 62 },
                { note: '8+ Fantastique', count: 129 },
                { note: '7+ Très bien', count: 160 },
              ].map((note) => (
                <li key={note.note} className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    onChange={() => handleNoteChange(note.note)}
                    checked={selectedNotes.includes(note.note)}
                  />
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
