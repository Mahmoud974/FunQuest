import { Hotel } from '../../modules/interface';
// modules/api.ts

export const fetchHotelByName = async (name: string): Promise<Hotel> => {
  const response = await fetch(`/api/hotels?name=${encodeURIComponent(name)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch hotel');
  }
  const data = await response.json();
  return data;
};
