import React from 'react';

export default function DetailsHotel() {
  return (
    <aside className="flex-4 border rounded-md h-auto p-4">
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <h2 className="text-xl font-bold my-1">
            Les détails de votre réservation
          </h2>
        </div>

        <div>
          <ul>
            <li className="text-xl">
              <ul>
                <li className="font-bold">Arrivée</li>
                <li>ven. 6 sept. 2024</li>
                <li className="text-lg">À partir de 0h00</li>
              </ul>
            </li>
            <li className="text-xl">
              <ul>
                <li className="font-bold">Départ</li>
                <li>sam. 7 sept. 2024</li>
                <li className="text-lg">6h30 - 11h00</li>
              </ul>
            </li>
          </ul>
        </div>
        <p className="w-80">Durée totale du séjour : 1 nuit</p>

        <h3 className="text-xl">Vous aviez selectionnez</h3>
        <ul>
          <li className="text-green-500">1 chambre pour 2 adultes</li>
          <li>1 x Chambre Familiale Deluxe</li>
          <li>
            <li className="text-blue-400 font-bold">Modifier la réservation</li>
          </li>
        </ul>
      </div>
    </aside>
  );
}
