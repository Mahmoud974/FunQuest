import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { ShoppingBasket, Heart, Plane, House, Drum } from 'lucide-react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { CircleUser } from 'lucide-react';

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
                        <ShoppingBasket className="mr-2 text-2xl" />{' '}
                        <p>Activities</p>
                      </MenubarTrigger>
                    </Link>
                  </MenubarMenu>
                  <MenubarMenu>
                    <Link href="/activities">
                      <MenubarTrigger className="cursor-pointer">
                        <Heart className="mr-2 text-2xl" />{' '}
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
