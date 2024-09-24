'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { DatePickerWithRange } from './DateSearch';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { UsersRound, ChevronDown } from 'lucide-react';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import { useForm, SubmitHandler } from 'react-hook-form';
import { filterTheSearchStore } from '@/store/store';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Définir le schéma de validation avec Zod
const inputsSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  adults: z.number().min(1, 'At least one adult is required'),
  rooms: z.number().min(1, 'At least one room is required'),
});

type Inputs = z.infer<typeof inputsSchema>;

const GetstartSearch = () => {
  const { db, filteredData, setDb, filterData } = filterTheSearchStore();
  const { data } = useTemplateActivities();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(inputsSchema), // Utiliser zodResolver pour la validation avec Zod
    defaultValues: {
      adults: 1,
      rooms: 1,
    },
  });

  // Ajouter un état pour les personnes et les chambres
  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);

  // Charger les données dans le store lorsque le composant est monté
  React.useEffect(() => {
    if (data) {
      setDb(data);
    }
  }, [data, setDb]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    filterData({ ...formData, adults, rooms }); // Appliquer le filtrage en utilisant le store
  };

  return (
    <header className="relative bg-white p-6 md:p-12 -mt-12 md:w-[66em] rounded-xl shadow-lg mx-4 md:mx-auto">
      <section className="container mx-auto flex justify-center">
        <form
          className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="search"
            className="border border-black rounded-sm py-2 px-4 w-full md:w-auto"
            placeholder="Search your..."
            {...register('title')}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}

          <DatePickerWithRange className="border border-black rounded-lg w-full md:w-auto md:mx-2" />

          <Menubar className="border border-black cursor-pointer w-full md:w-auto">
            <MenubarMenu>
              <MenubarTrigger className="flex items-center cursor-pointer w-full md:w-auto">
                <UsersRound />
                <div className="mx-2">
                  <p>
                    {adults} adulte{adults > 1 ? 's' : ''}
                  </p>
                  <p>
                    {rooms} chambre{rooms > 1 ? 's' : ''}
                  </p>
                </div>
                <ChevronDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setAdults(adults + 1)}>
                  Ajouter un adulte
                </MenubarItem>
                <MenubarItem
                  onClick={() => setAdults(adults > 1 ? adults - 1 : 1)}
                >
                  Retirer un adulte
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => setRooms(rooms + 1)}>
                  Ajouter une chambre
                </MenubarItem>
                <MenubarItem
                  onClick={() => setRooms(rooms > 1 ? rooms - 1 : 1)}
                >
                  Retirer une chambre
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Button
            type="submit"
            className="ml-0 md:ml-2 w-full md:w-auto bg-purple-600"
          >
            Rechercher
          </Button>
        </form>
      </section>
    </header>
  );
};

export default GetstartSearch;
