'use client';
import React, { useState, useEffect } from 'react';
import GetstartSearch from '@/components/GetstartSearch';
import Navbar from '@/components/Navbar';
import SortHotel from '@/components/SortHotel';
import { useTemplateActivities } from '../utils/hooks/useTemplate';
import CardActivity from '@/components/CardActivity';
import { Activities } from '@/modules/interface';
import { ComboboxDemo } from '@/components/Sort';
import { filterTheSearchStore } from '@/store/store';

const Page = () => {
  const { data, isFetching, isLoading, refetch } = useTemplateActivities();
  const { filteredData, filterData } = filterTheSearchStore(); // Utilise les données filtrées et la fonction de filtrage du store
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<any>(data || []);
  const itemsPerPage = 6;

  // Effectue les mises à jour nécessaires lorsque `data` ou `filteredData` changent
  useEffect(() => {
    if (filteredData.length > 0) {
      setDisplayedData(filteredData);
    } else {
      setDisplayedData(data || []);
    }
  }, [filteredData, data]);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil((displayedData.length || 0) / itemsPerPage);

  // Récupérer les activités pour la page actuelle
  const currentActivities = displayedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Gérer le changement de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <GetstartSearch />

        <section className="flex items-start md:flex-row flex-col">
          <SortHotel />

          <section className="md:container mx-auto flex flex-col mt-10">
            <header className="flex flex-col md:flex-row items-center md:justify-between mb-3">
              <h1 className="my-3 text-xl italic">
                {displayedData.length > 1
                  ? displayedData.length + ' Activités'
                  : displayedData.length + ' Activité'}{' '}
              </h1>

              <ComboboxDemo />

              {/* Dropdown Menu */}
              <div
                id="dropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </header>

            {/* Affichage des activités avec pagination */}
            <div className="grid md:grid-cols-3 justify-items-center">
              {currentActivities.map((activity: Activities) => (
                <CardActivity data={activity} key={activity.id} />
              ))}
            </div>

            {/* Contrôles de pagination */}
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Précédent
              </button>

              <span className="px-4 py-2">
                Page {currentPage} sur {totalPages}
              </span>

              <button
                className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Suivant
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
