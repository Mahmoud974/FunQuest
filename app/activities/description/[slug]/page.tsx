'use client';
import React, { useState } from 'react'; // Import useState
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

  // State to control visibility of the reviews section
  const [showReviews, setShowReviews] = useState(false); // Start with reviews hidden
  const [formData, setFormData] = useState({
    numPeople: 1,
    language: '',
    availableDate: '',
  });

  let filterActivities = data?.find((item: any) => item.id === Number(slug));
  if (!filterActivities) {
    return <div>Aucune activité trouvée.</div>;
  }

  const { id, title, image, description, duration, price } = filterActivities;

  // Function to toggle reviews visibility
  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  // Handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Logic to handle form submission (e.g., API call) goes here
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        {/* Banner Image */}
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
          <section className="mt-12 md:mb-12 bg-slate-50 p-10 rounded-xl">
            <h3 className="font-bold text-2xl my-3 text-center">
              Réservez votre activité
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-4  rounded-lg bg-slate-50"
            >
              <div>
                <label className="block mb-2 text-gray-700" htmlFor="numPeople">
                  Nombre de personnes :
                </label>
                <input
                  type="number"
                  id="numPeople"
                  name="numPeople"
                  min="1"
                  value={formData.numPeople}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700" htmlFor="language">
                  Langue parlée :
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                >
                  <option value="">Sélectionnez une langue</option>
                  <option value="français">Français</option>
                  <option value="anglais">Anglais</option>
                  <option value="espagnol">Espagnol</option>
                  {/* Add more languages as needed */}
                </select>
              </div>
              <div>
                <label
                  className="block mb-2 text-gray-700"
                  htmlFor="availableDate"
                >
                  Date disponible :
                </label>
                <input
                  type="date"
                  id="availableDate"
                  name="availableDate"
                  value={formData.availableDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="blue"
                className="w-full rounded-2xl"
              >
                Soumettre
              </Button>
            </form>
          </section>
          <section className="md:container mx-auto flex mt-10">
            <section>
              <h1 className="font-bold text-2xl my-3">
                {filterActivities?.title}
              </h1>
              <aside className="w-[30em]">
                {`Partez à la découverte du MIT aux côtés d'un enthousiaste étudiant. Apprenez-en davantage sur les recherches de pointe qui sont menées dans le domaine des maths, de la science et de la technologie, à l'occasion d'une visite guidée de 1 h 10.`}
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

              {/* Experience Details */}
              <aside className="mb-12">
                <h3 className="font-bold text-2xl my-3">Votre expérience</h3>

                <button
                  onClick={toggleReviews}
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                  {showReviews ? 'Masquer les avis' : 'Afficher les avis'}
                </button>
              </aside>
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

        {/* Form for booking details */}

        {/* Reviews Section moved below availability check button */}
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
                  That one has been memorable. Great Walking tour on Campus
                  ever!
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
      </main>
    </>
  );
};

export default Page;
