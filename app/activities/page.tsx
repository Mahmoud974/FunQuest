"use client";
import React from "react";

import GetstartSearch from "@/components/GetstartSearch";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import SortHotel from "@/components/SortHotel";
import { useTemplateActivities } from "../utils/hooks/useTemplate";
import CardActivity from "@/components/CardActivity";
import { Activities } from "@/modules/interface";

const Page = () => {
  const { data, isFetching, isLoading, refetch } = useTemplateActivities();

  let lengthHotels = data && data.length;
  return (
    <>
      <Navbar />
      <main className="mx-auto container">
        <GetstartSearch />

        <section className="flex items-start md:flex-row flex-col">
          <SortHotel />

          <section className="md:container mx-auto flex flex-col  mt-10">
            <header className="flex flex-col md:flex-row  items-center md:justify-between mb-3">
              <h1 className="my-3  text-xl italic">
                {lengthHotels > 1
                  ? lengthHotels + " Activites"
                  : lengthHotels + " Activity"}{" "}
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
            <div className="grid md:grid-cols-3 justify-items-center">
              {data &&
                data.map((activity: Activities) => (
                  <CardActivity data={activity} key={activity.id} />
                ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default Page;
