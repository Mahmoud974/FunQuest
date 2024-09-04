import React from 'react';
import TableRoom from './Table';

export default function Disponibility() {
  return (
    <section>
      <h2 className="text-2xl font-bold my-3">Disponibilités</h2>
      <TableRoom />

      <h3 className="text-2xl font-bold my-3">Commentaires clients</h3>
      <ul className="flex items-center space-x-3">
        <li className="bg-blue-700 w-14 p-3 rounded-lg font-bold text-white text-xl">
          8,6
        </li>
        <li>• 1499 expériences vécus</li>
        <li className="text-blue-700">Voir tous les commentaires</li>
      </ul>
      <h2 className="text-2xl font-bold my-3">Catégories : </h2>
      <p>Barre</p>
    </section>
  );
}
