import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Schéma de validation avec Zod
const schema = z.object({
  prenom: z.string().min(1, { message: 'Ce champ est requis.' }),
  nom: z.string().min(1, { message: 'Ce champ est requis.' }),
  email: z
    .string()
    .email({ message: 'Veuillez entrer une adresse e-mail valide.' }),
  pays: z.string().min(1, { message: 'Ce champ est requis.' }),
  telephone: z.string().min(1, { message: 'Ce champ est requis.' }),
  confirmation_sms: z.boolean().optional(),
  update_account: z.boolean().optional(),
  reservation_pour: z.enum(['client_principal', 'autre_client']).optional(),
  voyage_travail: z.enum(['oui', 'non']).optional(),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Données du formulaire soumises:', data);
    // Traitez ici les données soumises (par exemple, envoyez-les à une API)
  };

  return (
    <div className="border rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded p-2 px-2 md:p-8 mb-6">
          <h2 className="font-semibold text-2xl text-gray-600 my-6">
            Saisissez vos coordonnées
          </h2>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2">
                  <label htmlFor="prenom">Prénom*</label>
                  <input
                    id="prenom"
                    type="text"
                    {...register('prenom')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.prenom ? 'border-red-500' : ''
                    }`}
                    placeholder="Moussa"
                  />
                  {errors.prenom?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.prenom.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="nom">Nom*</label>
                  <input
                    id="nom"
                    type="text"
                    {...register('nom')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.nom ? 'border-red-500' : ''
                    }`}
                    placeholder="Mahamoud"
                  />
                  {errors.nom?.message && (
                    <p className="text-red-500 text-xs">{errors.nom.message}</p>
                  )}
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="email">Adresse e-mail*</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="manuscrit974@gmail.com"
                  />
                  {errors.email?.message && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    {`L'e-mail de confirmation sera envoyé à cette adresse.`}
                  </p>
                </div>

                {/* Ajoutez ici les autres champs avec les mêmes modifications */}

                <div className="md:col-span-5 text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Soumettre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
