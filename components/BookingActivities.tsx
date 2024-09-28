import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function BookingActivities({
  params,
  setTotalPrice,
  setTotalPersonn,
  setIsDisabled,
}: any) {
  const { data } = useTemplateActivities();
  const { slug } = params;
  const [storedValue, setStoredValue] = useState<any>(''); // État pour stocker les valeurs sauvegardées

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('myKey');
      setStoredValue(value || '');
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myData', JSON.stringify(storedValue)); // Sauvegarde des données dans localStorage
    }
  };

  // Fonction pour récupérer la date actuelle en format AAAA-MM-JJ
  const today = new Date().toISOString().split('T')[0];

  const FormSchema = z.object({
    numPeople: z.preprocess(
      (val) => (typeof val === 'string' ? parseInt(val, 10) : val),
      z.number().min(1, 'Veuillez renseigner un nombre de personnes.').max(12)
    ),
    language: z.string().nonempty('Veuillez sélectionner une langue.'),
    availableDate: z.string().refine((date) => date >= today, {
      message: 'La date ne peut pas être dans le passé.',
    }), // Validation pour s'assurer que la date n'est pas passée
    availableTime: z.string().nonempty('Veuillez sélectionner une heure.'),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  // Définition des valeurs par défaut ici
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numPeople: 2, // Valeur par défaut pour le nombre de personnes
      language: 'français', // Valeur par défaut pour la langue
      availableDate: today, // Par défaut, la date actuelle est sélectionnée
      availableTime: '12:00', // Heure par défaut
    },
  });

  const filterActivities = data?.find((item: any) => item.id === Number(slug));
  if (!filterActivities) {
    return <div>Aucune activité trouvée.</div>;
  }

  const { price } = filterActivities;

  const onSubmit = (formData: FormSchemaType) => {
    const calculatedTotal = formData.numPeople * price;
    setTotalPersonn(formData.numPeople);
    setTotalPrice(calculatedTotal);
    handleSave();
    setIsDisabled(false);
    console.log({ ...formData, total: calculatedTotal });

    setStoredValue({
      ...formData,
      total: calculatedTotal,
    });
  };

  return (
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
            <span className="text-red-500">{errors.numPeople.message}</span>
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
            <span className="text-red-500">{errors.language.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2 text-gray-700" htmlFor="availableDate">
            Date disponible :
          </label>
          <input
            type="date"
            id="availableDate"
            {...register('availableDate', { required: true })}
            min={today} // Ajout de l'attribut min pour désactiver les dates passées
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {errors.availableDate && (
            <span className="text-red-500">{errors.availableDate.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-2 text-gray-700" htmlFor="availableTime">
            Heure disponible :
          </label>
          <input
            type="time"
            id="availableTime"
            {...register('availableTime', { required: true })}
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {errors.availableTime && (
            <span className="text-red-500">
              Veuillez sélectionner une heure.
            </span>
          )}
        </div>

        <Button type="submit" className="bg-purple-600 w-full">
          Soumettre
        </Button>
      </form>
    </section>
  );
}
