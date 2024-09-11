import React from 'react';

export default function Know() {
  return (
    <aside className="border rounded-md ">
      <section>
        <h1 className="font-bold text-2xl">À savoir :</h1>

        <ul>
          <li>Aucune carte nécessaire, indiquez juste vos coordonnées !</li>
          <li>
            {`Aucun paiement n'est nécessaire pour garantir cette réservation.
            Vous paierez pendant votre séjour.`}
          </li>
        </ul>
      </section>
    </aside>
  );
}
