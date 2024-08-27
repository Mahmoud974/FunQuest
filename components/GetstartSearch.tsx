"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { DatePickerWithRange } from "./DateSearch";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { UsersRound, ChevronDown } from "lucide-react";
import { useTemplateActivities } from "@/app/utils/hooks/useTemplate";
import { Activities } from "@/modules/interface";
type Props = {};

const GetstartSearch = (props: Props) => {
  const { data } = useTemplateActivities();
  const [searchActivities, setSearchActivities] = useState<string>();
  console.log(searchActivities);

  let titleActivities =
    data &&
    data.filter((title: Activities) => title.title === searchActivities);
  console.log(titleActivities);

  return (
    <header className="relative bg-white -mt-12 p-12 w-[66em] rounded-xl shadow-lg mx-auto">
      <section className="container mx-auto flex justify-center">
        <form className="flex ">
          <input
            type="search"
            name=""
            id=""
            className="border-black border rounded-sm py-2 w-56"
            placeholder="search your...."
            onInput={(e) => setSearchActivities(e.target.value)}
          />
          <DatePickerWithRange className="border-black border mx-2 rounded-lg" />
          <Menubar className="border-black border cursor-pointer">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer">
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
          <Button className="ml-2" variant={"blue"}>
            Rechercher
          </Button>
        </form>
      </section>
    </header>
  );
};

export default GetstartSearch;
