import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Euro,
  Flag,
  ShoppingBasket,
  Heart,
  Plane,
  House,
  Drum,
} from "lucide-react";
import Link from "next/link";
type Props = {};

const NavMenu = (props: Props) => {
  return (
    <Menubar className=" border-none bg-transparent  cursor-pointer text-white drop-shadow-9xl ">
      <MenubarMenu>
        <Link href="/flights">
          <MenubarTrigger className="cursor-pointer">
            <Plane className="mr-2" /> Flights
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/">
          <MenubarTrigger className="cursor-pointer">
            <House className="mr-2" /> Rooms
          </MenubarTrigger>
        </Link>
      </MenubarMenu>
      <MenubarMenu>
        <Link href="/activities">
          <MenubarTrigger className="cursor-pointer">
            <Drum className="mr-2" /> Activities
          </MenubarTrigger>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">
          <Flag className="mr-1" />
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

      <MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <Euro />
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
      </MenubarMenu>

      <MenubarMenu>
        <Link href="/basket">
          <MenubarMenu>
            <MenubarTrigger className="cursor-pointer">
              <ShoppingBasket />
            </MenubarTrigger>
          </MenubarMenu>
        </Link>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/like">
            <Heart />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Compte</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default NavMenu;
