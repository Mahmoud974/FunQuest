'use client';
import React, { useState } from 'react';
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
  Euro,
  Flag,
  ShoppingBasket,
  Heart,
  Plane,
  House,
  Drum,
  Mail,
  User,
} from 'lucide-react';
import Link from 'next/link';

import { signIn } from 'next-auth/react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { CircleUser } from 'lucide-react';
import UserLogin from './UserLogin';
import MenuBar from './MenuBarMobile';
type Props = {};

const NavMenu = (props: Props) => {
  const [isAuth, setAuth] = useState<boolean>(true);
  const onLogin = (provider: string) => () => {
    signIn(provider, { callbackUrl: '/' });
  };
  return (
    <>
      <Menubar className="flex border-none bg-transparent  cursor-pointer text-white drop-shadow-9xl ">
        <MenuBar />
        <section className="md:flex hidden">
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
          {isAuth && (
            <Dialog>
              <DialogTrigger>
                <p className="flex">
                  <CircleUser className="mr-2" /> Login
                </p>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="my-8">
                  <DialogTitle className="flex justify-center text-2xl my-3">
                    Connectez-vous
                  </DialogTitle>
                  <DialogDescription className="flex justify-center text-2xl my-8">
                    <Button onClick={onLogin('google')}>
                      <Mail /> Connect to Google
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          <UserLogin setAuth={setAuth} isAuth={isAuth} />
        </section>
      </Menubar>
    </>
  );
};

export default NavMenu;
