import { Clock } from 'lucide-react';
import React from 'react';

export default function DetailsHotel({ getItemData }: any) {
  return (
    <aside className="flex-4 border rounded-md h-auto p-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h2 className="text-xl font-bold my-1">
            Les détails de votre réservation
          </h2>
        </div>

        <div>
          <ul>
            <li className="text-xl">
              <div>
                <span className="font-bold">Départ</span>
                <ul>
                  <li className="font-bold text-3xl">
                    {getItemData.availableDate}
                  </li>
                  <li className="text-lg flex items-center">
                    <Clock className="mr-2 " /> {getItemData.availableTime}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <h3 className="text-xl">Vous aviez sélectionnez</h3>
        <ul>
          <li className="text-green-500">
            1 activité pour {getItemData.numPeople} adultes
          </li>
          <li>1 x Chambre Familiale Deluxe</li>
          <li className="text-blue-400 font-bold">
            Modifier la réservation
          </li>{' '}
          {/* Suppression de l'élément <li> imbriqué ici */}
        </ul>
      </div>
    </aside>
  );
}
