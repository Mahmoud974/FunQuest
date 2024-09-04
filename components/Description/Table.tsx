import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PersonStanding, Users } from 'lucide-react';
import { PiPerson } from 'react-icons/pi';
import { Button } from '../ui/button';

export default function TableRoom() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-purple-600  ">
          <TableHead className="w-[100px] text-white">{`Type d'hébergement`}</TableHead>
          <TableHead className=" text-white">Nombre de voyageurs</TableHead>
          <TableHead className=" text-white">Tarif pour 61 nuits</TableHead>
          <TableHead className=" text-white">Vos options</TableHead>
          <TableHead className="w-[100px] text-white">
            Sélectionnez un nombre
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-purple-50">
          <TableCell className="font-medium">
            <p className="w-72">{`Sélectionnez le type et le nombre d'hébergements que vous souhaitez réserver.
Type d'hébergement	Nombre de voyageurs	
Tarif pour 61 nuits	Vos options	Sélectionnez un nombre
Surclassement gratuit
Wellbeing Sanctuary Pool Villa with Free Transfer min. 3 nights & one-time shared Sunset Cruise or Night Fishing for 2 Pax per stay Min 4 nights | Valid for stays until 31 Oct 2024`}</p>
          </TableCell>
          <TableCell className="">
            <Users />
          </TableCell>
          <TableCell>
            <ul className="flex flex-col  space-y-3 text-xl">
              <li className="font-bold">30€</li>
              <li>
                <Button variant="default">-10%</Button>
              </li>
              <li>30€</li>
            </ul>
          </TableCell>
          <TableCell className="">$250.00</TableCell>
          <TableCell className="text-right space-y-2">
            <ul className="">
              <li>Petit-déjeuner compris - Exceptionnel</li>
              <li>Compris : Internet haut débit</li>
              <li>Annulation gratuite avant le 10 juin 2025</li>
              <li>Surclassement gratuit appliqué</li>
            </ul>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
