import React, { useState } from 'react';

export default function Comments() {
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div>
      {showReviews && (
        <section className="p-6 bg-gray-50 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {`L'avis des client·es`}
          </h2>
          <p className="text-lg font-semibold text-gray-700">
            Note globale : 4,6/5
          </p>
          <p className="text-sm text-gray-600 mb-4">{`D'après 445 avis`}</p>

          <ul className="space-y-2 mb-6">
            <li>
              <strong>Guide :</strong> 4,7/5
            </li>
            <li>
              <strong>Qualité/prix :</strong> 4,4/5
            </li>
            <li>
              <strong>Service :</strong> 4,6/5
            </li>
            <li>
              <strong>Organisation :</strong> 4,6/5
            </li>
          </ul>

          {/* Reviews List */}
          <ul className="space-y-6">
            <li className="p-4 bg-white shadow rounded-lg">
              <p className="text-lg font-bold text-yellow-500">★★★★★</p>
              <p className="text-sm text-gray-700">
                <strong>Nom :</strong> Enouse — République dominicaine
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date :</strong> 6 octobre 2023 — Réservation vérifiée
              </p>
              <p className="mt-2 text-gray-700">
                That one has been memorable. Great Walking tour on Campus ever!
              </p>
              <p className="mt-2 text-blue-600 cursor-pointer">Utile ? Oui</p>
            </li>

            <li className="p-4 bg-white shadow rounded-lg">
              <p className="text-lg font-bold text-yellow-500">★★★★★</p>
              <p className="text-sm text-gray-700">
                <strong>Nom :</strong> Wendy — Australie
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date :</strong> 6 octobre 2023 — Réservation vérifiée
              </p>
              <p className="mt-2 text-gray-700">
                We had a great tour with Gracie...
              </p>
              <p className="mt-2 text-blue-600 cursor-pointer">Utile ? Oui</p>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
}
