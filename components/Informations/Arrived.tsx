import React from 'react';
import { ComboboxDemo } from './Combobox';

export default function Arrived() {
  return (
    <div className="flex-1 border rounded-md space-y-3 p-4 ">
      <h3>{`Votre heure d'arrivée`}</h3>
      <ul>
        <li>{`L'enregistrement sera ouvert pour votre hébergement entre 0h00 et 0h00.`}</li>
        <li>{`Réception ouverte 24h/24 - Une aide à toute heure !`}</li>
      </ul>
      <h4>{`Ajoutez votre heure d'arrivée prévue *`}</h4>
      <ComboboxDemo />
    </div>
  );
}
