import React from 'react';

export default function Form() {
  return (
    <div className="border rounded-md">
      <div className="">
        <div>
          <div className=" rounded p-2 px-2 md:p-8 mb-6">
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
                      name="prenom"
                      id="prenom"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Moussa"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="nom">Nom*</label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Mahamoud"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Adresse e-mail*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="manuscrit974@gmail.com"
                    />
                    <p className="text-xs text-gray-500">
                      {`L'e-mail de confirmation sera envoyé à cette adresse.`}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="pays">Pays/région*</label>
                    <input
                      type="text"
                      name="pays"
                      id="pays"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="France"
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="telephone">Numéro de téléphone*</label>
                    <input
                      type="text"
                      name="telephone"
                      id="telephone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="06 69 79 42 73"
                    />
                    <p className="text-xs text-gray-500">
                      {`L'établissement en a besoin pour valider votre
                      réservation.`}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="confirmation_sms"
                        id="confirmation_sms"
                        className="form-checkbox"
                      />
                      <label htmlFor="confirmation_sms" className="ml-2">
                        Oui, je souhaite recevoir une confirmation numérique
                        gratuite (recommandé).
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">
                      {` Nous allons vous envoyer un lien de téléchargement de
                      l'appli par SMS.`}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="update_account"
                        id="update_account"
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
                          name="reservation_pour"
                          value="client_principal"
                          className="form-radio"
                        />
                        <span className="ml-2">
                          Je suis le client principal
                        </span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="reservation_pour"
                          value="autre_client"
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
                          name="voyage_travail"
                          value="oui"
                          className="form-radio"
                        />
                        <span className="ml-2">Oui</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="voyage_travail"
                          value="non"
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
        </div>
      </div>
    </div>
  );
}
