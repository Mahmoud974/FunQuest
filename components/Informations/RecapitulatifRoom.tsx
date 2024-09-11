import React from 'react';

export default function RecapRoom() {
  return (
    <aside className="flex-1 border rounded-md space-y-3 p-4 ">
      <h3 className="text-2xl font-bold"> Chambre Familiale Deluxe</h3>
      <ul className="space-y-2">
        <li>Petit-déjeuner compris dans le tarif</li>
        <li>Annulation gratuite à tout moment</li>
        <li>Aucun prépaiement requis - Payez sur place</li>
        <li>Clients : 2 adultes</li>
        <li>{`Hébergements d'une propreté exceptionnelle - 8,0`}</li>
        <li>{`Non-fumeurs`}</li>
      </ul>
      <ul className="flex gap-2 mt-2 h-auto flex-wrap ">
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          15m2
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Vue sur le jardin
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Vue sur la montagne
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Patio
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Salle de bains privative
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Lave-vaisselle
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Télévision à écran plat
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Insonorisation
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Terrasse
        </li>
        <li className=" border-2 border-black rounded-md w-auto px-2 text-center ">
          Machine à café
        </li>
        <li className=" border-2 border-black rounded-md w-auto  px-2 text-center ">
          Minibar
        </li>
      </ul>
      <form action="" className="mt-6 rounded-xl space-x-2">
        <input type="text" placeholder="Nom et prénom du client" />
        <input type="text" placeholder="Email" />
      </form>
    </aside>
  );
}
