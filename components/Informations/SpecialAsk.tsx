import React from 'react';
import { Textarea } from '@/components/ui/textarea';

export default function SpecialAsk() {
  return (
    <div className="flex-1 border rounded-md space-y-3 p-4 ">
      <h3>Demandes spéciales</h3>
      <p>
        {' '}
        {` 
        Les demandes spéciales ne peuvent pas être garanties mais
        l'établissement fera tout son possible pour les satisfaire. Vous pourrez
        toujours faire des demandes spéciales, même après avoir finalisé votre
        réservation !
      `}
      </p>
      <Textarea placeholder="Veuillez écrire vos demandes" />
    </div>
  );
}
