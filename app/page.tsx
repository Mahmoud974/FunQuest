'use client';
import React, { useState } from 'react';
import GetstartSearch from '@/components/GetstartSearch';
import Navbar from '@/components/Navbar';
import Product from '@/components/Product';
import SortHotel from '@/components/SortHotel';
import { Hotel } from '@/modules/interface';
import Footer from '@/components/Footer';
import { useTemplate } from './utils/hooks/useTemplate';
import { ComboboxDemo } from '@/components/Sort';
import { useSortStore } from '@/store/store';

const Page = () => {
  const { data } = useTemplate();
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 5; // Number of hotels to display per page
  const { sortHotel, bool } = useSortStore(); // Accède aux hôtels triés et à la fonction de tri

  React.useEffect(() => {
    console.log(bool);

    console.log(sortHotel);
  }, [sortHotel, bool]);
  const lengthHotels = data ? data.length : 0;
  const totalPages = Math.ceil(lengthHotels / itemsPerPage);

  const currentHotels =
    (sortHotel && sortHotel.length > 0 ? sortHotel : data)?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    ) || [];

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto md:container">
        <GetstartSearch />

        <section className="flex flex-col md:flex-row items-start">
          <SortHotel />

          <section className="container mx-auto flex flex-col mt-10">
            <header className="flex items-center justify-between mb-3">
              <h1 className="my-3 text-xl italic">
                {lengthHotels > 1
                  ? lengthHotels + ' Hotels'
                  : lengthHotels + ' Hotel'}
              </h1>

              <ComboboxDemo />
            </header>

            {/* Display current page hotels */}
            {currentHotels.map((hotel: Hotel) => (
              <Product hotel={hotel} key={hotel.id} />
            ))}

            {/* Pagination controls */}
            <div className="flex justify-center mt-6">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>

              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>

              <button
                className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
