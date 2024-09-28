import React, { useState } from 'react';

export default function PayElement() {
  // State pour gérer l'option de paiement sélectionnée
  const [paymentOption, setPaymentOption] = useState<string>('payLater');

  // State pour stocker les informations de la carte
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvc: '',
  });

  // Gestion du changement des champs de formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Option de paiement:', paymentOption);
    console.log('Détails de la carte:', cardDetails);

    // Ajouter la logique de validation ou d'envoi des données
  };

  return (
    <div className="flex-1 border rounded-md space-y-3 p-4">
      <form onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold">Quand souhaitez-vous payer ?</h2>

        {/* Options de paiement */}
        <div className="space-y-2">
          <label className="block">
            <input
              type="radio"
              value="payLater"
              checked={paymentOption === 'payLater'}
              onChange={() => setPaymentOption('payLater')}
              className="mr-2"
            />
            Payez sur place
            <p className="text-sm text-gray-500">
              Votre carte ne sera pas débitée. Nous avons besoin de vos
              informations de paiement pour garantir votre réservation.
            </p>
          </label>

          <label className="block">
            <input
              type="radio"
              value="payNow"
              checked={paymentOption === 'payNow'}
              onChange={() => setPaymentOption('payNow')}
              className="mr-2"
            />
            Payer maintenant
            <p className="text-sm text-gray-500">
              {`         Vous paierez via Booking.com au moment de finaliser cette
              réservation. Si vous annulez avant le 27 septembre 2024, vous
              pourrez bénéficier d'un remboursement intégral.`}
            </p>
          </label>
        </div>

        {/* Détails de la carte - visibles seulement si "Payer maintenant" est sélectionné */}
        {paymentOption === 'payNow' && (
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold">Détails de la carte</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Numéro de carte"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              name="cardName"
              placeholder="Nom du titulaire de la carte"
              value={cardDetails.cardName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiryDate"
                placeholder="Date d'expiration (MM/YY)"
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}

        {/* Bouton de soumission */}
        <button
          type="submit"
          className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Valider le paiement
        </button>
      </form>
    </div>
  );
}
