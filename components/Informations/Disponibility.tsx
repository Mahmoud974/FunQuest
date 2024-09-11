import React from 'react';

export default function Dispo() {
  return (
    <aside className="flex-4 border rounded-md h-auto p-4 bg-red-800 border-red-700 text-white gap-2">
      <h4 className="text-xl font-bold">Disponibilité limitée à vos dates :</h4>
      <p className="w-3/3">
        1 hôtel 4 étoiles similaire est déjà indisponible sur notre site
      </p>
    </aside>
  );
}
