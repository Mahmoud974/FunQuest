import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";
import { Flights } from "@/modules/interface";
import { Heart, Share } from "lucide-react";

type Props = {
  data: Flights;
};

export default function CardFlight({ data }: Props) {
  const {
    airline,
    departureCity,
    arrivalCity,
    departureDate,
    departureTime,
    arrivalTime,
    duration,
    price,
    availableSeats,
  } = data;
  console.log(airline);

  return (
    <article className="mb-5 py-4 w-full max-w-screen-lg overflow-hidden h-64 rounded-xl shadow md:pr-8">
      <figure className="">
        <div className=" ml-6 flex justify-between my-4 ">
          <button className="bg-emerald-500  border-emerald-900 py-1 px-3 rounded-md text-white">
            Cheapest
          </button>

          <div className="space-x-2 flex">
            <button className="border-emerald-900 border flex   py-1 px-3 rounded-md text-emerald-900">
              <Heart className="mr-1" />
              Save
            </button>
            <button className="border-emerald-900 border flex   py-1 px-3 rounded-md text-emerald-900">
              <Share className="mr-1" />
              Share
            </button>
          </div>
        </div>
        <figure className="flex flex-row items-center">
          <ul className="flex flex-col flex-1 ml-6">
            <li>
              <div className="flex justify-between">
                <p className="font-bold text-xl">
                  {" "}
                  {departureTime} - {arrivalTime}
                </p>
                <p className="text-md"> direct</p>
                <p className="text-xl"> 3h30m</p>
              </div>
              <p>
                {departureCity} - {arrivalCity}
              </p>
              <p>{airline}</p>
            </li>
            <li className="mt-2">
              <div className="flex justify-between">
                <p className="font-bold text-xl">
                  {" "}
                  {arrivalTime} - {departureTime}
                </p>
                <p className="text-md"> direct</p>
                <p className="text-xl"> 3h30m</p>
              </div>
              <p>
                {arrivalCity} - {departureCity}
              </p>
              <p>{airline}</p>
            </li>
          </ul>

          <div className="flex flex-col flex-3 ml-12">
            <div className="flex flex-row items-center">
              <p className="text-3xl font-bold">{price}€</p>
              <p className="ml-1">/pers</p>
            </div>
            <p className="my-1">461€ total</p>
            <Button variant="default">Select</Button>
          </div>
        </figure>
      </figure>
    </article>
  );
}
