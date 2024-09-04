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
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { UsersRound, ChevronDown } from 'lucide-react';
import { useTemplateActivities } from '@/app/utils/hooks/useTemplate';
import { Activities } from '@/modules/interface';

type Props = {};

const GetstartSearch = (props: Props) => {
  const { data } = useTemplateActivities();
  const [searchActivities, setSearchActivities] = useState<string>();

  return (
    <header className="relative bg-white p-6 md:p-12 -mt-12 md:w-[66em] rounded-xl shadow-lg mx-4 md:mx-auto">
      <section className="container mx-auto flex justify-center">
        <form className="flex flex-col md:flex-row justify-center items-center md:space-y-0 space-y-3 w-full">
          <input
            type="search"
            className="border border-black rounded-sm py-2 px-4 w-full md:w-auto"
            placeholder="Search your..."
            onInput={(e) => setSearchActivities(e.target.value)}
          />
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
          <Button className="ml-0 md:ml-2 w-full md:w-auto bg-purple-600">
            Rechercher
          </Button>
        </form>
      </section>
    </header>
  );
};

export default GetstartSearch;
