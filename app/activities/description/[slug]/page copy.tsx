'use client'; // Reserve 'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import { CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aboutActivity } from '@/modules/exportFunction';
import Image from 'next/image';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Page = ({ params }: { params: { slug: string } }) => {
  const { data } = useTemplateActivities();
  const { slug } = params;

  const FormSchema = z.object({
    numPeople: z.preprocess(
      (val) => (typeof val === 'string' ? parseInt(val, 10) : val),
      z.number().min(1, 'Veuillez renseigner un nombre de personnes.').max(12)
    ),
    language: z.string().nonempty('Veuillez sélectionner une langue.'),
    availableDate: z.string(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numPeople: 1,
      language: '',
      availableDate: '',
    },
  });
  // Get filtered activity
  let filterActivities = data?.find((item: any) => item.id === Number(slug));
  if (!filterActivities) {
    return <div>Aucune activité trouvée.</div>;
  }

  const { id, title, image, description, duration, price } = filterActivities;
  let totalPrice: number = price;

  // Function to handle form submission
  const onSubmit = (formData: any) => {
    console.log(formData.numPeople);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <section className="rounded-xl mt-12 relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:z-10">
          <Image
            src={image}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Description de l'image"
            fill
            priority
          />
          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6"></div>
        </section>

        <section className="flex items-start md:flex-row flex-col">
          <section className="mt-12 md:mb-12 bg-slate-50 p-10 ">
            <h3 className="font-bold text-2xl my-3 text-center">
              Réservez votre activité
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 rounded-lg bg-slate-50"
            >
              <div>
                <label className="block mb-2 text-gray-700" htmlFor="numPeople">
                  Nombre de personnes :
                </label>
                <input
                  type="number"
                  id="numPeople"
                  {...register('numPeople', { required: true, min: 1 })}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
                {errors.numPeople && (
                  <span className="text-red-500">
                    {errors.numPeople.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block mb-2 text-gray-700" htmlFor="language">
                  Langue parlée :
                </label>
                <select
                  id="language"
                  {...register('language', { required: true })}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  <option value="">Sélectionnez une langue</option>
                  <option value="français">Français</option>
                  <option value="anglais">Anglais</option>
                  <option value="espagnol">Espagnol</option>
                </select>
                {errors.language && (
                  <span className="text-red-500">
                    {errors.language.message}
                  </span>
                )}
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
                  {...register('availableDate', { required: true })}
                  className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
                />
                {errors.availableDate && (
                  <span className="text-red-500">
                    Veuillez sélectionner une date.
                  </span>
                )}
              </div>

              <Button type="submit" className="bg-purple-600 w-full">
                Soumettre
              </Button>
            </form>
          </section>

          <section className="md:container mx-auto flex mt-10">
            <section>
              <h1 className="font-bold text-2xl my-3">{title}</h1>
              <aside className="w-[30em]">
                {`Partez à la découverte du MIT aux côtés d'un enthousiaste étudiant. Apprenez-en davantage sur les recherches de pointe qui sont menées dans le domaine des maths, de la science et de la technologie, à l'occasion d'une visite guidée de 1 h 10.`}
              </aside>

              <aside>
                <h1 className="font-bold text-2xl my-3">
                  À propos de cette activité
                </h1>
                {aboutActivity.map((item, index) => (
                  <div key={index} className="mt-2">
                    <div className="flex flex-row items-center ">
                      <p className="text-purple-600">{item.logo}</p>
                      <h2 className="ml-1 text-xl">{item.title}</h2>
                    </div>
                    <p className="mt-2">{item.content}</p>
                  </div>
                ))}
              </aside>

              <aside className="mb-12">
                <h3 className="font-bold text-2xl my-3">Votre expérience</h3>
              </aside>
            </section>

            <aside className="md:mb-12 bg-slate-50 p-5 rounded-xl h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p>À partir de</p>
                  <p className="font-bold text-xl">{price}€</p>
                  <p>par personne</p>
                </div>
                <Link href={`/information/${id}`}>
                  <Button className=" bg-purple-600 px-12">Réserver</Button>
                </Link>
              </div>

              <div className="flex items-center space-x-4 mt-2">
                <CreditCard className="text-purple-600" />
                <p className="w-72">
                  Réservez maintenant et payez plus tard pour garantir votre
                  place sans frais aujourd’hui.
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
