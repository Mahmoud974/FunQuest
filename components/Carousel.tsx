import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import React from "react"
import Image from 'next/image';

export function CarouselProduct() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
       <CarouselItem className="relative h-[330px]">
          <Image
            src="/ROOM.jpg"
            alt="Description de l'image"
            layout="fill"
            objectFit="cover"
            priority 
          />
        </CarouselItem>
        <CarouselItem className="relative h-[330px]"> 
          <Image
            src="/outside.jpg"
            alt="Description de l'image"
            layout="fill"
            objectFit="cover"
            priority 
          />
        </CarouselItem>
       
      </CarouselContent>
    </Carousel>
  )
}
