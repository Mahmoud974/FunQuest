import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

export default function NavDescription() {
  return (
    <Menubar className="border-none mb-7  space-x-12 ">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-md">
          <Link href="/description/presentation">Description</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-md">
          <Link href="/description/rooms">Rooms</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-md">
          <Link href="/description/nearby">Équipement</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-md">
          <Link href="/description/ruleshouse">Régles de la maison</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer text-md">
          <Link href="/description/quotes">Commentaires clients</Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
