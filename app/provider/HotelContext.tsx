'use client';
import React, { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { useTemplate } from '../utils/hooks/useTemplate';

// Créez un contexte pour l'hôtel
const HotelContext = createContext<any>(null);

// Créez un Provider qui va encapsuler l'application
export const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const idHotel = pathname.split('/').pop();
  const { data } = useTemplate();
  const findHotel =
    data && data.find((hotel: any) => hotel.id === Number(idHotel));

  return (
    <HotelContext.Provider value={{ findHotel }}>
      {children}
    </HotelContext.Provider>
  );
};

// Hook pour accéder aux données de l'hôtel
export const useHotel = () => {
  return useContext(HotelContext);
};
