import React from 'react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oups! Page non trouvée
        </p>
        <p className="text-gray-600 mt-2">
          {` La page que vous cherchez n'existe pas ou a été déplacée.`}
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-purple-500 hover:bg-blue-700 rounded-md"
        >
          {`Retour à la page d'accueil`}
        </a>
      </div>
    </div>
  );
}
