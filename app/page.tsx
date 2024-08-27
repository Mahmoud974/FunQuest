"use client";
import React from "react";

import GetstartSearch from "@/components/GetstartSearch";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import SortHotel from "@/components/SortHotel";
import { useTemplate } from "./utils/hooks/useTemplate";

const Page = () => {
  const { data, isFetching, isLoading, refetch } = useTemplate();
  let lengthHotels = data && data.length;
  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <GetstartSearch />

        <section className="flex items-start">
          <SortHotel />

          <section className="container mx-auto flex flex-col mt-10">
            <header className="flex items-center justify-between mb-3">
              <h1 className="my-3 ml-4 text-2xl font-bold">
                Tous les hôtels:{" "}
                {lengthHotels > 1
                  ? lengthHotels + " Hotels"
                  : lengthHotels + " Hotel"}{" "}
              </h1>

              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown button{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

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
            {data &&
              data.map((hotel: any) => (
                <Product hotel={hotel} key={hotel.id} />
              ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
