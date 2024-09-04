import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CreditCard, DoorClosed, DoorOpen } from 'lucide-react';
import React from 'react';

export default function Presentation() {
  return (
    <section className="mb-6">
      <div className="flex justify-between my-6">
        <div className=" ">
          <h3 className="text-2xl font-bold mb-1">Règles de la maison</h3>
          <p>
            {` L'établissement Bandos Maldives accepte les demandes spéciales.
            Ajoutez la vôtre à la prochaine étape !`}
          </p>
        </div>

        <Button className="my-4 bg-purple-600">Voir les disponibilités</Button>
      </div>
      <Card className="">
        <CardHeader className=" mb-3 divide-y">
          <div className="flex justify-between  ">
            <div className="flex items-center">
              <DoorOpen />
              <p className="font-bold text-xl ml-2 ">Arrivée</p>
            </div>
            <p className="w-6/12 ml-2">{`À partir de 14:00
              Vous devrez présenter une pièce d'identité avec photo et une carte de crédit lors de l'enregistrement.
              Vous devrez indiquer à l'avance votre heure d'arrivée à l'établissement.`}</p>
          </div>
        </CardHeader>
        <CardContent className=" mb-3 ">
          <div className="flex justify-between   ">
            <div className="flex items-center">
              <DoorClosed />
              <p className="font-bold text-xl ml-2 ">Départ</p>
            </div>
            <p className="w-6/12 ml-2">{`Jusqu'à 12:00`}</p>
          </div>
        </CardContent>
        <CardContent className=" mb-3 ">
          <div className="flex justify-between   ">
            <div className="flex items-center">
              <DoorClosed />
              <p className="font-bold text-xl ml-2 ">Animaux domestiques</p>
            </div>
            <p className="w-6/12 ml-2">{`Les animaux de compagnie ne sont pas admis au sein de l'établissement.`}</p>
          </div>
        </CardContent>
        <CardContent className=" mb-3 ">
          <div className="flex justify-between   ">
            <div className="flex items-center">
              <DoorClosed />
              <p className="font-bold text-xl ml-2 ">Groupes</p>
            </div>
            <p className="w-6/12 ml-2">{`Toute réservation de plus de 5 chambres peut entraîner des conditions particulières et des frais supplémentaires.`}</p>
          </div>
        </CardContent>

        <CardContent className=" mb-3 ">
          <div className="flex justify-between   ">
            <div className="flex items-center">
              <DoorClosed />
              <p className="font-bold text-xl ml-2 ">Enfants et lits</p>
            </div>
            <p className="w-6/12 ml-2">{`Conditions relatives aux enfants
Tous les enfants sont les bienvenus.

Pour voir les tarifs et les informations associés à la taille de votre groupe, veuillez ajouter à votre recherche le nombre d'enfants avec qui vous voyagez ainsi que leur âge.

Conditions relatives aux lits bébé et aux lits d'appoint`}</p>
          </div>
        </CardContent>
        <CardContent className=" mb-3 ">
          <div className="flex justify-between   ">
            <div className="flex items-center">
              <CreditCard />
              <p className="font-bold text-xl ml-2 ">
                Moyens de paiement acceptés
              </p>
            </div>
            <ul className="flex space-x-12">
              <li>okko</li>
              <li>okko</li>
              <li>okko</li>
              <li>okko</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
