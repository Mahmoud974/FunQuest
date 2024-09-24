import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Définir un schéma de validation avec Zod
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
  reservation_pour: z.string().optional(),
  voyage_travail: z.string().optional(),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // Utiliser le résolveur Zod
  });

  const onSubmit = (dat: any) => {
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
                    type="text"
                    {...register('prenom')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.prenom ? 'border-red-500' : ''
                    }`}
                    placeholder="Moussa"
                  />
                  {errors.prenom && (
                    <p className="text-red-500 text-xs">
                      {errors.prenom.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="nom">Nom*</label>
                  <input
                    type="text"
                    {...register('nom')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.nom ? 'border-red-500' : ''
                    }`}
                    placeholder="Mahamoud"
                  />
                  {errors.nom && (
                    <p className="text-red-500 text-xs">{errors.nom.message}</p>
                  )}
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="email">Adresse e-mail*</label>
                  <input
                    type="email"
                    {...register('email')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="manuscrit974@gmail.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    {`L'e-mail de confirmation sera envoyé à cette adresse.`}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="pays">Pays/région*</label>
                  <input
                    type="text"
                    {...register('pays')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.pays ? 'border-red-500' : ''
                    }`}
                    placeholder="France"
                  />
                  {errors.pays && (
                    <p className="text-red-500 text-xs">
                      {errors.pays.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="telephone">Numéro de téléphone*</label>
                  <input
                    type="text"
                    {...register('telephone')}
                    className={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${
                      errors.telephone ? 'border-red-500' : ''
                    }`}
                    placeholder="06 69 79 42 73"
                  />
                  {errors.telephone && (
                    <p className="text-red-500 text-xs">
                      {errors.telephone.message}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    {`L'établissement en a besoin pour valider votre réservation.`}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      {...register('confirmation_sms')}
                      className="form-checkbox"
                    />
                    <label htmlFor="confirmation_sms" className="ml-2">
                      Oui, je souhaite recevoir une confirmation numérique
                      gratuite (recommandé).
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    {` Nous allons vous envoyer un lien de téléchargement de l'appli par SMS.`}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      {...register('update_account')}
                      className="form-checkbox"
                    />
                    <label htmlFor="update_account" className="ml-2">
                      Mettre à jour mon compte avec ces nouvelles coordonnées.
                    </label>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <label>Pour qui réservez-vous ? (facultatif)</label>
                  <div className="flex gap-4 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="client_principal"
                        {...register('reservation_pour')}
                        className="form-radio"
                        defaultChecked
                      />
                      <span className="ml-2">Je suis le client principal</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="autre_client"
                        {...register('reservation_pour')}
                        className="form-radio"
                      />
                      <span className="ml-2">
                        Je réserve pour un autre client
                      </span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <label>Vous voyagez pour le travail ? (facultatif)</label>
                  <div className="flex gap-4 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="oui"
                        {...register('voyage_travail')}
                        className="form-radio"
                      />
                      <span className="ml-2">Oui</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="non"
                        {...register('voyage_travail')}
                        className="form-radio"
                      />
                      <span className="ml-2">Non</span>
                    </label>
                  </div>
                </div>

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
