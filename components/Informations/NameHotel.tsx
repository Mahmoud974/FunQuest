import { Wifi, ParkingCircle } from 'lucide-react';
import React from 'react';
import { PiKnife } from 'react-icons/pi';

export default function NameHotel() {
  return (
    <aside className="flex-4 border rounded-md h-auto p-4">
      <div className="flex flex-col  ">
        <div className="flex items-center">
          <h1 className="text-lg">Hôtel</h1>
          <ul className="flex text-xs ml-1">
            <li>★</li>
            <li>★</li>
            <li>★</li>
            <li>★</li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold my-1">Boutiqueinn Ayubia</h1>
        <p className="w-80">
          chairlift ayubia near parking ayubia, 22310 Ayubia, Pakistan
        </p>
        <ul>
          <li className="text-green-500">Très bon emplacement - 8.5</li>
          <li className="flex items-center sapce-x-4 my-2">
            <p className="p-3 bg-blue-600 w-12 rounded-lg text-white font-bold">
              9,6
            </p>
            <p className="ml-2">Bien - 61 commentaires</p>
          </li>
          <li>
            <ul className="flex flex-col space-y-2 ">
              <li className="flex items-center">
                <Wifi />
                <p className="ml-1">Connexion WI-FI gratuite</p>
              </li>
              <li className="flex items-center">
                <ParkingCircle />
                <p className="ml-1">Parking</p>
              </li>
              <li className="flex items-center">
                <PiKnife />
                <p className="ml-1">Restaurant</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
}
