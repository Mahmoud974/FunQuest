import { MessageSquare } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Comments from '@/components/Description/Comments';

const data = [12, 56, 89, 12, 56, 89];

export default function Page() {
  return (
    <>
      <h3 className="text-2xl font-bold">Question des voyageurs</h3>
      <Comments />
      <Carousel>
        <CarouselContent>
          {data.map((id) => (
            <CarouselItem className="basis-1/3" key={id}>
              <Card className="h-auto py-10">
                <CardContent>
                  <ul className="grid grid-cols-1 divide-y space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <li
                        className="flex items-center justify-between pt-2"
                        key={i}
                      >
                        <div className="flex mt-10">
                          <MessageSquare />
                          <p className="pl-2">Commentaires clients</p>
                        </div>
                        <p>►</p>
                      </li>
                    ))}
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
