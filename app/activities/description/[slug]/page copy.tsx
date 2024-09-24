'use client';
import React, { useState } from 'react'; // Importer useState pour les états

import Navbar from '@/components/Navbar';
import SortHotel from '@/components/SortHotel';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { aboutActivity } from '@/modules/exportFunction';
import Image from 'next/image';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import Link from 'next/link';

const Page = ({ params }: any) => {
  const { data } = useTemplateActivities();
  const { slug } = params;

  // Déclaration des états pour le formulaire
  const [participants, setParticipants] = useState(1);
  const [date, setDate] = useState('');
  const [language, setLanguage] = useState('');

  // Recherche de l'activité
  const filterActivities = data?.find((item: any) => item.id === Number(slug));
  if (!filterActivities) {
    return <div>Aucune activité trouvée.</div>; // Message d'erreur ou redirection
  }

  const { id, title, image, description, duration, price } = filterActivities;

  // Fonction pour gérer l'envoi du formulaire
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez traiter l'envoi des données du formulaire, par exemple, en les envoyant à un serveur.
    console.log('Formulaire soumis', { participants, date, language });
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        {/* Banniere Image */}
        <section className="rounded-xl mt-12 relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image
            src={filterActivities?.image}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Description de l'image"
            fill
            priority
          />
          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">{title}</h2>
            <p className="sm:text-lg text-base text-center text-gray-200">
              {description}
            </p>
            <button
              type="button"
              className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Book Now
            </button>
          </div>
        </section>

        <section className="flex items-start md:flex-row flex-col">
          <SortHotel />
          <section className="md:container mx-auto flex mt-10">
            <section>
              <h1 className="font-bold text-2xl my-3">
                {filterActivities?.title}
              </h1>
              <aside className="w-[30em]">
                {`Partez à la découverte du MIT aux côtés d'un enthousiaste étudiant. Apprenez-en davantage sur les recherches de pointe qui sont menées dans le domaine des maths, de la science et de la technologie, à l'occasion d'une visite guidée de 1 h 10.`}
              </aside>

              <form
                onSubmit={handleFormSubmit}
                className="mt-6 flex space-x-4 items-center bg-gray-100 p-4 rounded-lg shadow-lg"
              >
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="participants"
                    className="text-sm font-medium text-gray-800"
                  >
                    Nombre de participant·es
                  </label>
                  <input
                    type="number"
                    id="participants"
                    min="1"
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="h-10 border border-blue-400 rounded-lg px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-gray-800"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="h-10 border border-blue-400 rounded-lg px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="language"
                    className="text-sm font-medium text-gray-800"
                  >
                    Langue
                  </label>
                  <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="h-10 border border-blue-400 rounded-lg px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="" disabled>
                      Choisissez une langue
                    </option>
                    <option value="fr">Français</option>
                    <option value="en">Anglais</option>
                    <option value="es">Espagnol</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <button
                    type="submit"
                    className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Envoyer
                  </button>
                </div>
              </form>

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

              {/* Reste du contenu... */}
            </section>

            <aside className="border border-black p-3 rounded-xl h-full">
              <div className="flex items-center">
                <div>
                  <p>À partir de</p>
                  <p className="font-bold text-xl">{price}€</p>
                  <p>par personne</p>
                </div>
                <Link href={`/information/${id}`}>
                  <Button variant="blue" className="rounded-2xl">
                    Vérifier les disponibilités
                  </Button>
                </Link>
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
