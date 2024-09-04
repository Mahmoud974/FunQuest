import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

export default function Indication() {
  return (
    <>
      <article className="flex justify-between my-6">
        <aside>
          <h3 className="text-2xl font-bold">À savoir</h3>
          <p>
            Les informations essentielles pour les voyageurs et voyageuses
            séjournant dans cet établissement
          </p>
        </aside>

        <Button variant="blue" className="my-4">
          Voir les disponibilités
        </Button>
      </article>

      <Card className="w-full p-3">
        <CardHeader>
          <p>
            L’établissement est accessible en 15 minutes de hors-bord depuis
            l’aéroport international de Malé. Tarifs des transferts en hors-bord
            (aller-retour, depuis l’aéroport international de Malé) :
          </p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li>
              - Enfant (de 2 à 11 ans) : 46,82 USD par enfant. Ces frais ne sont
              pas inclus dans le tarif de la réservation et seront facturés en
              supplément.
            </li>
            <li>- Bébé (jusqu’à 2 ans) : gratuit.</li>
          </ul>
          <p className="mt-3">
            Veuillez communiquer les détails de votre vol à l’établissement au
            moins 3 jours avant votre arrivée afin de sécuriser le(s) siège(s)
            pour votre transfert. Conditions relatives aux enfants : Les enfants
            âgés de moins de 2 ans bénéficient de repas gratuits, selon les
            conditions et la formule choisies par l’adulte les accompagnant
            (boissons alcoolisées non comprises). Veuillez noter qu’une taxe
            écologique de 6 USD par enfant et par nuit sera facturée en
            supplément. Cette taxe est déjà calculée et incluse dans le tarif de
            la réservation pour les adultes. Lors de l’enregistrement ou du
            règlement sur place, vous devrez présenter la carte de crédit
            utilisée pour garantir votre réservation. L’établissement se réserve
            le droit de contacter la personne titulaire de la carte à des fins
            de vérification. Pour des raisons de sécurité et de protection de la
            vie privée, il est interdit de faire voler des systèmes aériens sans
            pilote ou des drones, y compris des modèles réduits d’avions pour
            les amateurs de modélisme. Avantages de la formule tout compris :
          </p>
          <p className="mt-5">
            Il s’agit d’un établissement tout compris. La formule inclut :
          </p>
          <ul className="space-y-5">
            <li>- le petit-déjeuner avec une sélection de boissons</li>
            <li>- le déjeuner avec une sélection de boissons</li>
            <li>- le dîner avec une sélection de boissons</li>
            <li>- les repas sont servis au restaurant Gallery</li>
            <li>
              - une sélection de boissons est disponible au bar Sand, au bar de
              la piscine et au Huvan
            </li>
            <li>- du thé est servi en soirée au Sea Breeze</li>
            <li>
              - le minibar réapprovisionné une fois par jour à horaires
              réguliers
            </li>
            <li>
              - l’utilisation des planches à voile et des canoës-kayaks, limitée
              à 2 heures maximum par personne et par jour
            </li>
            <li>
              - les activités sportives et de loisirs proposées au Clubhouse,
              sous réserve de disponibilité et selon la période de réservation
            </li>
          </ul>
          <p>
            Pour toute réservation d’un forfait lune de miel, vous bénéficierez
            gratuitement des avantages suivants une fois par séjour (pour les
            mariages de moins de 6 mois, un certificat de mariage devra être
            présenté au moment de l’enregistrement) :
          </p>
          <ul>
            <li>- une bouteille de vin</li>
            <li>- une corbeille de fruits</li>
          </ul>
          <p className="mt-3">
            {` Vous devrez présenter une pièce d'identité avec photo et une carte
            de crédit lors de l'enregistrement. Veuillez noter que toutes les
            demandes spéciales seront satisfaites sous réserve de disponibilité
            et pourront entraîner des frais supplémentaires. Veuillez informer
            l'établissement Bandos Maldives à l'avance de l'heure à laquelle
            vous prévoyez d'arriver. Vous pouvez indiquer cette information dans
            la rubrique « Demandes spéciales » lors de la réservation ou
            contacter directement l'établissement. Ses coordonnées figurent sur
            votre confirmation de réservation.`}
          </p>
        </CardContent>
      </Card>
    </>
  );
}
