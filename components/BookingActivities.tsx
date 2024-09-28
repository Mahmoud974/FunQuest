'use client';
import React, { useEffect, useState } from 'react'; // Import useState
import { Button } from '@/components/ui/button';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function BookingActivities({ params }: any) {
  const { data } = useTemplateActivities();
  const { slug } = params;
  const [storedValue, setStoredValue] = useState<any>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = localStorage.getItem('myKey');
      setStoredValue(value || '');
    }
  }, []);

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myData', JSON.stringify(storedValue));
    }
  };

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPersonn, setTotalPersonn] = useState(1);

  const FormSchema = z.object({
    numPeople: z.preprocess(
      (val) => (typeof val === 'string' ? parseInt(val, 10) : val),
      z.number().min(1, 'Veuillez renseigner un nombre de personnes.').max(12)
    ),
    language: z.string().nonempty('Veuillez sélectionner une langue.'),
    availableDate: z.string(),
    availableTime: z.string().nonempty('Veuillez sélectionner une heure.'), // Nouveau champ ajouté pour l'heure
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
      availableTime: '', // Champ pour l'heure
    },
  });

  const filterActivities = data?.find((item: any) => item.id === Number(slug));
  if (!filterActivities) {
    return <div>Aucune activité trouvée.</div>;
  }

  const { id, title, image, description, duration, price } = filterActivities;

  const onSubmit = (formData: FormSchemaType) => {
    const calculatedTotal = formData.numPeople * price; // Calculer le total en fonction du nombre de personnes
    setTotalPrice(calculatedTotal);
    setTotalPersonn(formData.numPeople);
    handleSave();

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
            className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          {errors.availableDate && (
            <span className="text-red-500">
              Veuillez sélectionner une date.
            </span>
          )}
        </div>

        {/* Nouveau champ pour sélectionner l'heure */}
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
