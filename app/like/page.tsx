import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { generateStars } from '@/modules/exportFunction';
import { Clock9 } from 'lucide-react';
import Image from 'next/image';
import { title } from 'process';

const page = () => {
  return (
    <>
      <Navbar />
      {/* <main className="flex h-screen items-center justify-center">
        <section className="text-center">
          <h1>Vos favoris est vide</h1>
          <Button className="w-1/4 mt-4 px-12">
            <Link href="/">Home</Link>
          </Button>
        </section>
      </main> */}

      <main className="">
        <section className="container mx-auto">
          <h1 className="text-3xl font-bold mt-3">Favoris</h1>

          <Menubar className="w-64 mt-3">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
                Flights
              </MenubarTrigger>
              <MenubarTrigger className="cursor-pointer">Rooms</MenubarTrigger>
              <MenubarTrigger className="cursor-pointer">
                Activities
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
          {/* Cards Like */}
          <section className="grid md:grid-cols-3 justify-items-left mt-4">
            <Card className="w-8/12 rounded-md text-md mb-4 cursor-pointer ">
              <CardHeader className="relative h-48">
                <Image
                  className="rounded-t-md"
                  src="https://zhqpheunskiuodymniyz.supabase.co/storage/v1/object/public/profiles/admin/Royaume-Uni.jpg?t=2024-09-24T09%3A10%3A28.521Z"
                  alt="Description de l'image"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </CardHeader>

              <CardContent className="mt-4 ">
                <h1 className="font-bold text-xl ">{title}</h1>
                <div className="flex items-center ">
                  <Clock9 className="w-3 p-0 " />
                  <p className="text-sm ml-1">fg</p>
                </div>
                <p className="text-gray-700 mb-2">df</p>
                <div className="flex items-center">
                  <span className="text-sm italic">(23 avis)</span>
                </div>
              </CardContent>

              <CardFooter>
                <p className="text-lg  ">À partir de 200€ par personne</p>
              </CardFooter>
            </Card>
          </section>
        </section>
      </main>
    </>
  );
};

export default page;
