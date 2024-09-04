import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { Menu } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { CircleUser } from "lucide-react";
import UserLogin from "./UserLogin";

export default function MenuBar() {
  return (
    <section className="md:hidden ">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <MenubarMenu>
              <SheetDescription>
                <div className="flex space-y-8 mt-6 flex-col  text-xl ">
                  <Link href="/flights">
                    <MenubarTrigger className="cursor-pointer">
                      <Plane className="mr-2" /> Flights
                    </MenubarTrigger>
                  </Link>
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
                    <Link href="/activities">
                      <MenubarTrigger className="cursor-pointer">
                        <ShoppingBasket className="mr-2 text-2xl" />{" "}
                        <p>Activities</p>
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                  <MenubarMenu>
                    <Link href="/activities">
                      <MenubarTrigger className="cursor-pointer">
                        <Heart className="mr-2 text-2xl" />{" "}
                        <p>Liste de jaime</p>
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                  <MenubarMenu>
                    <Link href="/activities">
                      <MenubarTrigger className="cursor-pointer">
                        <CircleUser className="mr-2" /> <p>Account</p>
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                </div>
              </SheetDescription>
            </MenubarMenu>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
}
