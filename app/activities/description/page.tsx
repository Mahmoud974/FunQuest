'use client';
import React from 'react';
import GetstartSearch from '@/components/GetstartSearch';
import Navbar from '@/components/Navbar';
import SortHotel from '@/components/SortHotel';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Image from 'next/image';
import { aboutActivity } from '@/modules/exportFunction';

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <GetstartSearch />
        <section className="flex items-start md:flex-row flex-col">
          <SortHotel />

          <section className="md:container mx-auto flex  mt-10">
            <section>
              <aside className="w-[30em]">
                {`Partez à la découverte du MIT aux côtés d'un enthousiaste
                  étudiant. Apprenez-en davantage sur les recherches de pointe
                  qui sont menées dans le domaine des maths, de la science et de
                  la technologie, à l'occasion d'une visite guidée de 1 h 10.`}
              </aside>

              <aside>
                <h1 className="font-bold text-2xl my-3">
                  À propos de cette activité
                </h1>

                {aboutActivity.map((item, index) => (
                  <div key={index} className="mt-2">
                    <div className="flex flex-row items-center">
                      {item.logo}
                      <h2 className="ml-1 text-xl">{item.title}</h2>
                    </div>
                    <p className="mt-2">{item.content}</p>
                  </div>
                ))}
              </aside>
              <aside className="mb-12">
                <h3 className="font-bold text-2xl my-3">Votre expérience</h3>

                <ul>
                  <li>
                    {`
                        Partez à la découverte du MIT aux côtés d'un enthousiaste
                    étudiant. Apprenez-en davantage sur les recherches de pointe
                    dans les domaines des maths, de la science et de la
                    technologie lors d'une visite guidée de 1 h 10.
                    `}
                  </li>

                  <li>
                    <strong>À propos de cette activité :</strong>
                    <ul>
                      <li>
                        Annulation gratuite jusqu’à 24 heures à l’avance pour un
                        remboursement intégral.
                      </li>
                      <li>
                        Réservez maintenant, payez plus tard. Restez flexible
                        dans vos projets de voyage.
                      </li>
                      <li>Durée : 70 minutes.</li>
                      <li>
                        Vérifiez les disponibilités pour voir les heures de
                        début.
                      </li>
                      <li>Guide en anglais.</li>
                      <li>Accessible aux personnes en fauteuil roulant.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Votre expérience :</strong>
                    <ul>
                      <li>
                        {`Visitez le campus du MIT, l'une des meilleures
                        universités américaines.`}
                      </li>
                      <li>
                        {` Découvrez le parcours d'étudiants célèbres comme Buzz
                        Aldrin et I.M. Pei.`}
                      </li>
                      <li>
                        Apprenez-en plus sur les recherches de pointe en maths,
                        science et technologie.
                      </li>
                      <li>
                        {`Admirez le Great Dome, surnommé "Centre de l'Univers"
                        par les étudiants.`}
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Inclus :</strong>
                    <ul>
                      <li>Visite publique du MIT de 1 h 10.</li>
                      <li>
                        Plan illustré gratuit du MIT et de Kendall Square.
                      </li>
                      <li>Taxes incluses.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Non inclus :</strong>
                    <ul>
                      <li>Pourboires.</li>
                      <li>Nourriture et boissons.</li>
                      <li>Souvenirs.</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Informations importantes :</strong>
                    <ul>
                      <li>
                        À emporter : chaussures confortables, vêtements adaptés
                        à la météo.
                      </li>
                      <li>
                        Interdit : enregistrement vidéo pendant la visite.
                      </li>
                      <li>
                        Le parcours couvre moins de 2 km et est accessible aux
                        personnes à mobilité réduite.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <strong>Lieu de rendez-vous :</strong>{' '}
                    {`À l'extérieur de la
                    station de métro de la ligne rouge de Kendall Square, du
                    côté de l'hôtel Marriott. Cherchez les responsables avec un
                    chapeau de paille près du restaurant Chipotle.`}
                  </li>
                </ul>

                <section className="p-6 bg-gray-50">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    L avis des client·es
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

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Filtrer
                    </h3>
                    <div className="flex items-center">
                      <span className="text-sm">Étoiles: {12}</span>
                      <Slider
                        defaultValue={[12]}
                        min={0}
                        max={5}
                        step={1}
                        className="w-full custom-slider-width" // Appliquez une classe personnalisée
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                      Par note
                    </h3>
                    <ul className=" flex flex-wrap space-x-2">
                      <li className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
                        Tous types de voyage
                      </li>
                      <li className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
                        En couple
                      </li>
                      <li className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
                        Entre amis
                      </li>
                      <li className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
                        En solo
                      </li>
                      <li className="flex text-md items-center justify-center p-2 border rounded-lg hover:bg-blue-700 hover:text-white hover:font-bold cursor-pointer">
                        En famille
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Trier par :
                    </h3>
                    <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="conseille">Conseillé</option>
                      <option value="recent">Le plus récent</option>
                    </select>
                  </div>

                  <ul className="space-y-6">
                    <li className="p-4 bg-white shadow rounded-lg">
                      <p className="text-lg font-bold text-yellow-500">★★★★★</p>
                      <p className="text-sm text-gray-700">
                        <strong>Nom :</strong> Enouse — République dominicaine
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Date :</strong> 6 octobre 2023 — Réservation
                        vérifiée
                      </p>
                      <p className="mt-2 text-gray-700">
                        That one has been memorable. Great Walking tour on
                        Campus ever! Houston (he IS from Texas City), with 11
                        years experience AT MIT was the Best guide tour ever. I
                        would not leave! So much informations, funny anecdotes.
                        Highly recommended this tour for people interested about
                        Science and Technology. A 5star for the Tour guide! I
                        will definitely come back with my family. I Hope I will
                        meet again Houston.
                      </p>
                      <p className="mt-2 text-blue-600 cursor-pointer">
                        Utile ? Oui
                      </p>
                    </li>

                    <li className="p-4 bg-white shadow rounded-lg">
                      <p className="text-lg font-bold text-yellow-500">★★★★★</p>
                      <p className="text-sm text-gray-700">
                        <strong>Nom :</strong> Wendy — Australie
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Date :</strong> 6 octobre 2023 — Réservation
                        vérifiée
                      </p>
                      <p className="mt-2 text-gray-700">
                        {`We had a great tour with Gracie. She gave a great
                        commentary, sharing lots of funny stories about life at
                        MIT. It meant so much more doing this tour with a
                        student, than "just a tour guide". She certainly loves
                        MIT and was happy to answer any questions we had.`}
                      </p>
                      <p className="mt-2 text-blue-600 cursor-pointer">
                        Utile ? Oui
                      </p>
                    </li>
                  </ul>
                </section>
              </aside>
            </section>
            <aside className="border border-black p-3 rounded-xl h-full">
              <div className="flex items-center">
                <div>
                  <p>À partir de</p>
                  <p>99,00€</p>
                  <p>par personne</p>
                </div>
                <Button variant="blue" className="rounded-2xl">
                  Vérifier les disponibilités
                </Button>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CreditCard />
                <p className="w-72">
                  Réservez maintenant et payez plus tard pour garantir votre
                  place sans frais aujourd’hui
                </p>
              </div>
            </aside>
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
