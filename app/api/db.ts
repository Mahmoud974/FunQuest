export const db = {
  hotels: [
    {
      id: 1,
      name: "Hotel de Paris",
      location: {
        address: "16 Rue de la Paix, 75002 Paris, France",
        city: "Paris",
        country: "France",
        latitude: 48.8686,
        longitude: 2.3305,
      },
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Bar"],
      rooms: [
        {
          id: 101,
          type: "Deluxe Room",
          price_per_night: 200,
          currency: "EUR",
          availability: true,
        },
        {
          id: 102,
          type: "Standard Room",
          price_per_night: 150,
          currency: "EUR",
          availability: false,
        },
      ],
      reviews: [
        {
          user: "JohnDoe",
          rating: 4.5,
          comment: "Great location and friendly staff.",
        },
      ],
    },
    {
      id: 2,
      name: "Hotel Sunshine",
      location: {
        address: "123 Beach Road, Miami, FL 33139, USA",
        city: "Miami",
        country: "USA",
        latitude: 25.7617,
        longitude: -80.1918,
      },
      amenities: ["Free WiFi", "Beach Access", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 201,
          type: "Ocean View Room",
          price_per_night: 250,
          currency: "USD",
          availability: true,
        },
        {
          id: 202,
          type: "City View Room",
          price_per_night: 180,
          currency: "USD",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "BeachLover",
          rating: 5.0,
          comment: "Amazing views and perfect location.",
        },
      ],
    },
    {
      id: 3,
      name: "Hotel Tokyo",
      location: {
        address: "5-3-1 Roppongi, Minato-ku, Tokyo 106-0032, Japan",
        city: "Tokyo",
        country: "Japan",
        latitude: 35.6895,
        longitude: 139.6917,
      },
      amenities: ["Free WiFi", "Onsen", "Restaurant", "Bar"],
      rooms: [
        {
          id: 301,
          type: "Suite",
          price_per_night: 300,
          currency: "JPY",
          availability: true,
        },
        {
          id: 302,
          type: "Standard Room",
          price_per_night: 200,
          currency: "JPY",
          availability: false,
        },
      ],
      reviews: [
        {
          user: "TokyoExplorer",
          rating: 4.7,
          comment: "Great amenities and excellent service.",
        },
      ],
    },
    {
      id: 4,
      name: "Hotel New York",
      location: {
        address: "789 Broadway, New York, NY 10003, USA",
        city: "New York",
        country: "USA",
        latitude: 40.7128,
        longitude: -74.006,
      },
      amenities: [
        "Free WiFi",
        "Fitness Center",
        "Restaurant",
        "Business Center",
      ],
      rooms: [
        {
          id: 401,
          type: "Penthouse Suite",
          price_per_night: 500,
          currency: "USD",
          availability: true,
        },
        {
          id: 402,
          type: "King Room",
          price_per_night: 250,
          currency: "USD",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "NYCVisitor",
          rating: 4.8,
          comment: "Luxury stay in the heart of the city.",
        },
      ],
    },
    {
      id: 5,
      name: "Hotel Berlin",
      location: {
        address: "10 Alexanderplatz, 10178 Berlin, Germany",
        city: "Berlin",
        country: "Germany",
        latitude: 52.52,
        longitude: 13.405,
      },
      amenities: ["Free WiFi", "Sauna", "Restaurant", "Bar"],
      rooms: [
        {
          id: 501,
          type: "Executive Room",
          price_per_night: 220,
          currency: "EUR",
          availability: true,
        },
        {
          id: 502,
          type: "Standard Room",
          price_per_night: 160,
          currency: "EUR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "BerlinTraveler",
          rating: 4.2,
          comment: "Good location and comfortable stay.",
        },
      ],
    },
    {
      id: 6,
      name: "Hotel Sydney",
      location: {
        address: "50 George Street, Sydney, NSW 2000, Australia",
        city: "Sydney",
        country: "Australia",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      amenities: ["Free WiFi", "Pool", "Restaurant", "Bar"],
      rooms: [
        {
          id: 601,
          type: "Harbor View Room",
          price_per_night: 275,
          currency: "AUD",
          availability: true,
        },
        {
          id: 602,
          type: "City View Room",
          price_per_night: 190,
          currency: "AUD",
          availability: false,
        },
      ],
      reviews: [
        {
          user: "SydneyFan",
          rating: 4.6,
          comment: "Beautiful views and excellent service.",
        },
      ],
    },
    {
      id: 7,
      name: "Hotel Rome",
      location: {
        address: "Via del Corso, 00186 Rome, Italy",
        city: "Rome",
        country: "Italy",
        latitude: 41.9028,
        longitude: 12.4964,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Spa"],
      rooms: [
        {
          id: 701,
          type: "Luxury Suite",
          price_per_night: 350,
          currency: "EUR",
          availability: true,
        },
        {
          id: 702,
          type: "Classic Room",
          price_per_night: 180,
          currency: "EUR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "RomeLover",
          rating: 4.9,
          comment: "Exceptional stay in a historic city.",
        },
      ],
    },
    {
      id: 8,
      name: "Hotel Toronto",
      location: {
        address: "123 King Street W, Toronto, ON M5H 1W4, Canada",
        city: "Toronto",
        country: "Canada",
        latitude: 43.651,
        longitude: -79.347,
      },
      amenities: ["Free WiFi", "Gym", "Restaurant", "Bar"],
      rooms: [
        {
          id: 801,
          type: "Suite",
          price_per_night: 280,
          currency: "CAD",
          availability: true,
        },
        {
          id: 802,
          type: "Standard Room",
          price_per_night: 190,
          currency: "CAD",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "TorontoTraveler",
          rating: 4.4,
          comment: "Convenient location and great amenities.",
        },
      ],
    },
    {
      id: 9,
      name: "Hotel Cape Town",
      location: {
        address: "1 Long Street, Cape Town, 8001, South Africa",
        city: "Cape Town",
        country: "South Africa",
        latitude: -33.9249,
        longitude: 18.4241,
      },
      amenities: ["Free WiFi", "Pool", "Restaurant", "Bar"],
      rooms: [
        {
          id: 901,
          type: "Ocean View Room",
          price_per_night: 220,
          currency: "ZAR",
          availability: true,
        },
        {
          id: 902,
          type: "Mountain View Room",
          price_per_night: 180,
          currency: "ZAR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "CapeTownExplorer",
          rating: 4.3,
          comment: "Stunning views and excellent location.",
        },
      ],
    },
    {
      id: 10,
      name: "Hotel Vienna",
      location: {
        address: "10 Kärntnertor Theater, 1010 Vienna, Austria",
        city: "Vienna",
        country: "Austria",
        latitude: 48.2082,
        longitude: 16.3738,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Spa"],
      rooms: [
        {
          id: 1001,
          type: "Deluxe Room",
          price_per_night: 230,
          currency: "EUR",
          availability: true,
        },
        {
          id: 1002,
          type: "Standard Room",
          price_per_night: 170,
          currency: "EUR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "ViennaVisitor",
          rating: 4.7,
          comment: "Great hotel with a central location.",
        },
      ],
    },
    {
      id: 11,
      name: "Hotel Dubai",
      location: {
        address: "Sheikh Zayed Road, Dubai, UAE",
        city: "Dubai",
        country: "UAE",
        latitude: 25.276987,
        longitude: 55.296249,
      },
      amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
      rooms: [
        {
          id: 1101,
          type: "Luxury Suite",
          price_per_night: 400,
          currency: "AED",
          availability: true,
        },
        {
          id: 1102,
          type: "Standard Room",
          price_per_night: 220,
          currency: "AED",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "DubaiDreamer",
          rating: 4.8,
          comment: "Luxurious stay with exceptional service.",
        },
      ],
    },
    {
      id: 12,
      name: "Hotel Hong Kong",
      location: {
        address: "123 Nathan Road, Kowloon, Hong Kong",
        city: "Hong Kong",
        country: "Hong Kong",
        latitude: 22.3193,
        longitude: 114.1694,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 1201,
          type: "Harbor View Room",
          price_per_night: 300,
          currency: "HKD",
          availability: true,
        },
        {
          id: 1202,
          type: "City View Room",
          price_per_night: 210,
          currency: "HKD",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "HKTraveler",
          rating: 4.5,
          comment: "Excellent location and fantastic views.",
        },
      ],
    },
    {
      id: 13,
      name: "Hotel Zurich",
      location: {
        address: "8 Bahnhofstrasse, 8001 Zurich, Switzerland",
        city: "Zurich",
        country: "Switzerland",
        latitude: 47.376886,
        longitude: 8.541694,
      },
      amenities: ["Free WiFi", "Spa", "Restaurant", "Fitness Center"],
      rooms: [
        {
          id: 1301,
          type: "Junior Suite",
          price_per_night: 250,
          currency: "CHF",
          availability: true,
        },
        {
          id: 1302,
          type: "Standard Room",
          price_per_night: 180,
          currency: "CHF",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "ZurichVisitor",
          rating: 4.6,
          comment: "Comfortable stay with excellent amenities.",
        },
      ],
    },
    {
      id: 14,
      name: "Hotel Lisbon",
      location: {
        address: "25 Avenida da Liberdade, Lisbon, Portugal",
        city: "Lisbon",
        country: "Portugal",
        latitude: 38.7169,
        longitude: -9.1399,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 1401,
          type: "Penthouse Suite",
          price_per_night: 350,
          currency: "EUR",
          availability: true,
        },
        {
          id: 1402,
          type: "Deluxe Room",
          price_per_night: 220,
          currency: "EUR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "LisbonLover",
          rating: 4.4,
          comment: "Beautiful views and great service.",
        },
      ],
    },
    {
      id: 15,
      name: "Hotel Buenos Aires",
      location: {
        address: "15 Avenida 9 de Julio, Buenos Aires, Argentina",
        city: "Buenos Aires",
        country: "Argentina",
        latitude: -34.6037,
        longitude: -58.3816,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 1501,
          type: "Luxury Suite",
          price_per_night: 270,
          currency: "ARS",
          availability: true,
        },
        {
          id: 1502,
          type: "Standard Room",
          price_per_night: 190,
          currency: "ARS",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "BAExplorer",
          rating: 4.3,
          comment: "Great location and friendly staff.",
        },
      ],
    },
    {
      id: 16,
      name: "Hotel Mumbai",
      location: {
        address: "45 Marine Drive, Mumbai, India",
        city: "Mumbai",
        country: "India",
        latitude: 19.076,
        longitude: 72.8777,
      },
      amenities: ["Free WiFi", "Pool", "Restaurant", "Spa"],
      rooms: [
        {
          id: 1601,
          type: "Suite",
          price_per_night: 300,
          currency: "INR",
          availability: true,
        },
        {
          id: 1602,
          type: "Deluxe Room",
          price_per_night: 200,
          currency: "INR",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "MumbaiTraveler",
          rating: 4.5,
          comment: "Comfortable stay with excellent amenities.",
        },
      ],
    },
    {
      id: 17,
      name: "Hotel Prague",
      location: {
        address: "10 Wenceslas Square, Prague, Czech Republic",
        city: "Prague",
        country: "Czech Republic",
        latitude: 50.0755,
        longitude: 14.4378,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 1701,
          type: "Deluxe Room",
          price_per_night: 200,
          currency: "CZK",
          availability: true,
        },
        {
          id: 1702,
          type: "Standard Room",
          price_per_night: 150,
          currency: "CZK",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "PragueVisitor",
          rating: 4.6,
          comment: "Great location and very comfortable.",
        },
      ],
    },
    {
      id: 18,
      name: "Hotel Warsaw",
      location: {
        address: "20 Nowy Świat, Warsaw, Poland",
        city: "Warsaw",
        country: "Poland",
        latitude: 52.2297,
        longitude: 21.0122,
      },
      amenities: ["Free WiFi", "Restaurant", "Bar", "Fitness Center"],
      rooms: [
        {
          id: 1801,
          type: "Suite",
          price_per_night: 230,
          currency: "PLN",
          availability: true,
        },
        {
          id: 1802,
          type: "Standard Room",
          price_per_night: 160,
          currency: "PLN",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "WarsawTraveler",
          rating: 4.4,
          comment: "Convenient location and great service.",
        },
      ],
    },
    {
      id: 19,
      name: "Hotel Singapore",
      location: {
        address: "1 Orchard Road, Singapore 238823",
        city: "Singapore",
        country: "Singapore",
        latitude: 1.3521,
        longitude: 103.8198,
      },
      amenities: ["Free WiFi", "Pool", "Restaurant", "Spa"],
      rooms: [
        {
          id: 1901,
          type: "Harbor View Room",
          price_per_night: 320,
          currency: "SGD",
          availability: true,
        },
        {
          id: 1902,
          type: "City View Room",
          price_per_night: 220,
          currency: "SGD",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "SGVisitor",
          rating: 4.7,
          comment: "Luxurious stay with amazing city views.",
        },
      ],
    },
    {
      id: 20,
      name: "Hotel Seoul",
      location: {
        address: "123 Myeongdong, Seoul, South Korea",
        city: "Seoul",
        country: "South Korea",
        latitude: 37.5665,
        longitude: 126.978,
      },
      amenities: ["Free WiFi", "Spa", "Restaurant", "Fitness Center"],
      rooms: [
        {
          id: 2001,
          type: "Luxury Room",
          price_per_night: 270,
          currency: "KRW",
          availability: true,
        },
        {
          id: 2002,
          type: "Standard Room",
          price_per_night: 190,
          currency: "KRW",
          availability: true,
        },
      ],
      reviews: [
        {
          user: "SeoulExplorer",
          rating: 4.5,
          comment: "Great amenities and central location.",
        },
      ],
    },
  ],
  bookings: [
    {
      booking_id: 1001,
      hotel_id: 1,
      room_id: 101,
      user: {
        id: 5001,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
      },
      check_in_date: "2024-08-01",
      check_out_date: "2024-08-05",
      total_price: 800,
      currency: "EUR",
      status: "confirmed",
    },
  ],
  users: [
    {
      id: 5001,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "securepassword123",
      bookings: [1001],
    },
  ],
};
