import React, { useState } from 'react';

const SortHotel = () => {
  const typesHebergement:string[] = [
    "Hôtel", "Resort", "Auberge de jeunesse", "Appartement", "Appart hôtel", "Villa", "Capsule"
  ];

  const nombreEtoiles:string[] = [
    "★★★★★", "★★★★", "★★★", "★★", "★", "Non classé"
  ];
const [rating, setRating] = useState(3); // Valeur initiale

  const handleRatingChange = (event:any) => {
    setRating(parseInt(event.target.value, 10));
  };
  const equipements = [
    { name: "Piscine", count: 98 },
    { name: "Internet", count: 155 },
    { name: "Parking", count: 111 },
    { name: "Navette aéroport", count: 72 },
    { name: "Gymnase/fitness", count: 98 },
    { name: "Réception 24h/24", count: 151 },
    { name: "Familles/enfants bienvenus", count: 154 },
    { name: "Politique tabac – interdiction de fumer", count: 145 },
    { name: "Spa/sauna", count: 32 },
    { name: "Restaurant", count: 116 },
    { name: "Espace fumeur", count: 88 },
    { name: "Animaux de compagnie acceptés", count: 4 }
  ];

  const notesEmplacement = [
    { note: "9+ Superbe", count: 62 },
    { note: "8+ Fantastique", count: 129 },
    { note: "7+ Très bien", count: 160 }
  ];

    const [price, setPrice] = useState(250); // Prix initial

  const handlePriceChange = (event:any) => {
    setPrice(parseInt(event.target.value, 10));
  };

  return (
    <form className="mt-12 mb-12 bg-slate-50 p-10 rounded-xl">
      <ul>
        <li>
          <p className="font-bold">Tarif par nuit</p>
          <div>
            <ul>
             <div className="p-4 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm">Prix: {price}€</span>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
              <li className="flex mt-4 flex-col">
                <p className="font-bold">Type d hébergement</p>
               <ul className="grid grid-cols-2 gap-4 max-w-lg mt-3">
  {typesHebergement.map((type) => (
    <li key={type} className="flex text-md items-center justify-center text-center  p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
      {type}
    </li>
  ))}
</ul>

              </li>
              <li className="flex mt-4 flex-col">
                <p className="font-bold">Nombre d étoiles</p>
               <div className="p-4 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm">Étoiles: {rating}</span>
      </div>
      <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={rating}
          onChange={handleRatingChange}
          className=" h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
              </li>
              <li className="flex mt-4 flex-col">
                <p className="font-bold">Équipements de l’établissement</p>
                <ul>
                  {equipements.map((equipement) => (
                    <li key={equipement.name} className="flex items-center mt-2">
                      <input type="checkbox" />
                      <span className="ml-2 text-sm">{equipement.name} ({equipement.count})</span>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="flex mt-4 flex-col">
                <p className="font-bold">Note de l emplacement</p>
                <ul>
                  {notesEmplacement.map((note) => (
                    <li key={note.note} className="flex items-center mt-2">
                      <input type="checkbox" />
                      <span className="ml-2 text-sm">{note.note} ({note.count})</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </form>
  );
};

export default SortHotel;
