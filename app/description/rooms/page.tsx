import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const rowData = [
  {
    description: `Sélectionnez le type et le nombre d'hébergements que vous souhaitez réserver.
Type d'hébergement	Nombre de voyageurs	
Tarif pour 61 nuits	Vos options	Sélectionnez un nombre
Surclassement gratuit
Wellbeing Sanctuary Pool Villa with Free Transfer min. 3 nights & one-time shared Sunset Cruise or Night Fishing for 2 Pax per stay Min 4 nights | Valid for stays until 31 Oct 2024`,
    price: '30€',
    discount: '-10%',
    total: '$250.00',
    options: [
      'Petit-déjeuner compris - Exceptionnel',
      'Compris : Internet haut débit',
      'Annulation gratuite avant le 10 juin 2025',
      'Surclassement gratuit appliqué',
    ],
  },
  // On peut ajouter d'autres objets similaires ici si nécessaire
];

export default function Page() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-purple-600">
          {[
            "Type d'hébergement",
            'Nombre de voyageurs',
            'Tarif pour 61 nuits',
            'Vos options',
            'Sélectionnez un nombre',
          ].map((header) => (
            <TableHead key={header} className="text-white">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rowData.map((row, idx) => (
          <TableRow key={idx} className="bg-purple-50">
            <TableCell className="font-medium w-72">
              <p>{row.description}</p>
            </TableCell>
            <TableCell>
              <Users />
            </TableCell>
            <TableCell>
              <ul className="flex flex-col space-y-3 text-xl">
                <li className="font-bold">{row.price}</li>
                <li>
                  <Button className="bg-yellow-300 text-black font-bold text-lg">
                    {row.discount}
                  </Button>
                </li>
                <li>{row.price}</li>
              </ul>
            </TableCell>
            <TableCell>{row.total}</TableCell>
            <TableCell className="text-right space-y-2">
              <ul>
                {row.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
