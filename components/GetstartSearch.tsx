'use client';
import React from 'react';
import { Button } from './ui/button';
import { DatePickerWithRange } from './DateSearch';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
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
  title: z.string().min(1, 'Title is requiredqss'),
});

// Extraire le type des inputs à partir du schéma Zod
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
  });

  // Charger les données dans le store lorsque le composant est monté
  React.useEffect(() => {
    if (data) {
      setDb(data);
    }
  }, [data, setDb]);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    filterData(formData.title); // Appliquer le filtrage en utilisant le store
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
                  <p>1 adulte</p>
                  <p>1 chambre</p>
                </div>
                <ChevronDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
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
