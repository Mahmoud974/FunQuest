import SortHotel from '@/components/SortHotel';
import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
};
type Props = {
  mis: string;
};
interface Item {
  id: number;
  title: string;
}

export interface FilterStoreState {
  db: Item[] | null;
  filteredData: Item[];
  setDb: (db: Item[] | null) => void;
  filterData: (title: string) => void;
}

export const useStoreHotel = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useYes = create<Props>()((set) => ({
  mis: 'Moussa Mahamoud',
}));

export const filterTheSearchStore = create<FilterStoreState>((set) => ({
  db: null,
  filteredData: [],
  setDb: (db) => set({ db }),
  filterData: (title) =>
    set((state) => {
      if (!state.db) {
        console.log('Data is not loaded yet');
        return { filteredData: [] };
      }

      const filteredData = state.db.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
      console.log(filteredData);
      return { filteredData };
    }),
}));

export const useSortStore = create<any>()((set) => ({
  db: null, // Base de données des hôtels
  sortType: '', // Type de tri
  sortHotel: [], // Liste des hôtels triés

  setDb: (db: any) => set({ db }),

  hotelSort: (sortType: string) => {
    set((state: any) => {
      if (sortType === 'less') {
        console.log('Tri par prix croissant (moins cher)');

        return {
          sortHotel: state.db
            ?.slice()
            .sort((a: any, b: any) => a.pricePerNight - b.pricePerNight),
          sortType, // Met à jour le type de tri
        };
      } else if (sortType === 'more') {
        console.log('Tri par prix décroissant (plus cher)');

        return {
          sortHotel: state.db
            ?.slice()
            .sort((a: any, b: any) => b.pricePerNight - a.pricePerNight),
          sortType, // Met à jour le type de tri
        };
      }
    });
  },
}));

// export const useSortStore = create<any>()((set, get) => ({
//   db: null, // Contiendra les données de l'hôtel
//   sortHotel: [], // Stocke les hôtels triés
//   setDb: (db: any) => set({ db }), // Met à jour la base de données

//   hotelSort: (sortType: string) => {
//     const data = get().db; // Récupère les données actuelles depuis l'état

//     if (sortType === 'less') {
//       const sortedData = data
//         ?.slice()
//         .sort((a: any, b: any) => a.pricePerNight - b.pricePerNight);
//       set({ sortHotel: sortedData });
//       console.log('Trié moins cher:', sortedData);
//     } else if (sortType === 'more') {
//       const sortedData = data
//         ?.slice()
//         .sort((a: any, b: any) => b.pricePerNight - a.pricePerNight);
//       set({ sortHotel: sortedData });
//       console.log('Trié plus cher:', sortedData);
//     }

//     console.log('Trié par:', sortType);
//   },
// }));
