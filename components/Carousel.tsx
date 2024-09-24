import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import React from 'react';
import Image from 'next/image';
import { useImageUnsplash } from '@/app/utils/hooks/useTemplate';

export function CarouselProduct() {
  const { data, isLoading, error } = useImageUnsplash(); // Ajout de la gestion des états
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (isLoading) return <p>Loading...</p>; // Gestion de l'état de chargement
  if (error) return <p>Error loading images</p>; // Gestion des erreurs

  // Assure-toi que 'data' est un tableau et qu'il contient des éléments
  const images = data?.map((img: any) => img.urls?.raw) || [];

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        {images.length > 0 ? (
          images.map((src: string, index: number) => (
            <CarouselItem key={index} className="relative h-[330px]">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </CarouselItem>
          ))
        ) : (
          <CarouselItem className="relative h-[330px]">
            <p>No images available</p>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  );
}
