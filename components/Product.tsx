import { Hotel, Review } from "@/modules/interface";
import React from "react";
import { Map } from "lucide-react";
import { Button } from "./ui/button";
import { CarouselProduct } from "./Carousel";
import { generateStars } from "@/modules/exportFunction";
import { Separator } from "@/components/ui/separator";

type Props = {
  hotel: Hotel;
};

const Product = ({ hotel }: Props) => {
  return (
    <article className="mb-6  max-w-screen-lg overflow-hidden shadow md:pr-8">
      <figure className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
        <aside className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
          <CarouselProduct />
        </aside>
        <figcaption className="flex w-full flex-col  sm:w-1/2 sm:p-8 lg:w-3/5">
          <div className="flex items-center">
            <h2 className="text-xl font-bold 0 md:text-2xl">{hotel.name}</h2>
            <p className="text-3xl ml-2">
              {hotel.reviews &&
                hotel.reviews.map((review: Review, index: number) => (
                  <p className="text-amber-300 text-xl" key={index}>
                    {generateStars(review.rating)}
                  </p>
                ))}
            </p>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex mt-1">
              <p className="text-sm text-blue-700 flex items-center">
                <Map /> {hotel.address.slice(0, 40)}
              </p>
              <p className="ml-1">(500m du centre)</p>
            </div>
          </div>

          <ul className="flex flex-col list-disc ml-2 mt-3">
            <li>Only 2 of these prices left</li>
            <li>Reservation possible without a credit card</li>
          </ul>
          <Separator className="my-4" />
          <div>
            <ul>
              <li>
                <div className="text-right ">
                  <h3 className="text-xl  text-emerald-500 font-bold md:text-2xl">
                    800€
                  </h3>
                  <p className="text-gray-500 italic -mt-1">per night</p>
                </div>
              </li>
            </ul>
            <div className="flex justify-between my-3 items-center ">
              <p className="text-emerald-500 font-bold">Breakfast included</p>
              <Button variant="blue" className="hover:bg-blue-900">
                See available rooms
              </Button>
            </div>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default Product;
