export interface Location {
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Room {
  id: number;
  type: string;
  price_per_night: number;
  currency: string;
  availability: boolean;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: Location;
  amenities: string[];
  rooms: Room[];
  reviews: {
    user: string;
    rating: number;
    comment: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  bookings: number[];
}

export interface Booking {
  booking_id: number;
  hotel_id: number;
  room_id: number;
  user: User;
  check_in_date: string;
  check_out_date: string;
  total_price: number;
  currency: string;
  status: string;
}

export interface HotelData {
  hotels: Hotel[];
  bookings: Booking[];
  users: User[];
}

export interface Activities {
  id: number;
  title: string;
  description: string;
  duration: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

export interface Flights {
  id: string;
  airline: string;
  departureCity: string;
  arrivalCity: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  availableSeats: number;
}
