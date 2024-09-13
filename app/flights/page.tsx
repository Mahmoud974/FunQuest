'use client';
import React from 'react';
import GetstartSearch from '@/components/GetstartSearch';
import Navbar from '@/components/Navbar';
import SortHotel from '@/components/SortHotel';
import { useTemplateFlights } from '../utils/hooks/useTemplate';
import CardFlight from '@/components/CardFlight';
import { ComboboxDemo } from '@/components/Sort';

const Page = () => {
  const { data } = useTemplateFlights();
  let numberFlights = data && data.length;

  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <GetstartSearch />
        <section className="flex items-start">
          <SortHotel />

          <section className="container mx-auto flex flex-col mt-10">
            <header className="flex items-center justify-between mb-3">
              <p className="my-3  text-xl italic">
                {numberFlights > 1
                  ? numberFlights + ' Flights'
                  : numberFlights + ' Flight'}
              </p>

              <ComboboxDemo />
            </header>
            <div className="font-['Open_Sans']">
              {data &&
                data?.map((flight: any) => (
                  <CardFlight data={flight} key={flight.id} />
                ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
