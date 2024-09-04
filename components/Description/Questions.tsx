import { MessageSquare } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function Questions() {
  let data = [12, 56, 89, 12, 56, 89];
  return (
    <>
      <h3 className="text-2xl font-bold my-5 ">Question des voyageurs</h3>

      <Carousel>
        <CarouselContent>
          {data.map((ok) => (
            <CarouselItem className="basis-1/3" key={ok}>
              <Card className="h-auto py-10">
                <CardContent>
                  <ul className="grid grid-cols-1 divide-y space-y-4">
                    <li className="flex items-center pt-2 justify-between ">
                      {" "}
                      <div className="flex">
                        <MessageSquare />
                        <p className="pl-2">Commentaires clients</p>
                      </div>
                      <p>►</p>
                    </li>
                    <li className="flex items-center pt-2 justify-between ">
                      {" "}
                      <div className="flex mt-10">
                        <MessageSquare />
                        <p className="pl-2">Commentaires clients</p>
                      </div>
                      <p>►</p>
                    </li>
                    <li className="flex items-center pt-2 justify-between ">
                      {" "}
                      <div className="flex mt-10">
                        <MessageSquare />
                        <p className="pl-2">Commentaires clients</p>
                      </div>
                      <p>►</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
