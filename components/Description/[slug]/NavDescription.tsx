import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import Link from 'next/link';

export default function NavDescription() {
  let listNav: string[] = [
    'Description',
    'Rooms',
    'Equipment',
    'Rules',
    'Quotes',
  ];
  let styleMenu: string = 'pl-0 cursor-pointer text-md';
  return (
    <Menubar className="border-none mb-7  gap-12 ">
      {listNav.map((item: string, index: number) => (
        <MenubarMenu key={index}>
          <MenubarTrigger className={styleMenu}>
            <Link href={`/description/${item.toLowerCase()}`}>{item}</Link>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
