import React from 'react';

export default function AmountHotel({ getItemData }: any) {
  return (
    <aside className="flex-4 border rounded-md h-auto p-4">
      <div className="flex flex-col">
        <div className="flex items-center">
          <h2 className="text-xl font-bold my-1">Récapitulati du montant</h2>
        </div>
        <div>
          <div className="flex">
            <ul className="flex flex-col">
              <li className="text-4xl font-bold w-24">Montant total</li>
              <li className="text-4xl font-bold w-24">{getItemData}€</li>{' '}
              {/* Correction ici */}
              <li className="w-3/6">
                {` Taxes et frais compris Dans la devise de l'établissement: PKR 9
                500`}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <h2 className="text-xl">Informations sur le tarif</h2>
            </li>
            <li className="w-80">
              Le montant est converti en € pour vous indiquer le prix
              approximatif. Vous paierez en PKR. Le taux de change peut varier
              avant votre paiement.
            </li>
            <li className="w-80">
              {` N'oubliez pas que l'émetteur de votre carte peut vous facturer des
              frais sur les paiements en devises étrangères.`}
            </li>
          </ul>
        </div>
        <p className="w-80">Durée totale du séjour : 1 nuit</p>

        <h3 className="text-xl">Vous aviez sélectionnez</h3>
        <ul>
          <li className="text-green-500">1 chambre pour 2 adultes</li>
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
