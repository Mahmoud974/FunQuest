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

// export const useSortStore = create<any>()((set) => ({
//   bool: false,
//   sortType: '', // Type de tri
//   sortHotel: [], // Liste des hôtels triés (initialisé à un tableau vide)

//   hotelSort: (sortType: string, data: any) => {
//     set((state: any) => {
//       if (sortType === 'less') {
//         console.log('Tri par prix croissant (moins cher)');
//         return {
//           sortHotel: data
//             ?.slice()
//             .sort((a: any, b: any) => a.pricePerNight - b.pricePerNight),
//           sortType,
//           bool: true, // Active l'état de tri
//         };
//       } else if (sortType === 'more') {
//         console.log('Tri par prix décroissant (plus cher)');
//         return {
//           sortHotel: data
//             ?.slice()
//             .sort((a: any, b: any) => b.pricePerNight - a.pricePerNight),
//           sortType,
//           bool: true, // Active l'état de tri
//         };
//       } else if (sortType === 'remettre') {
//         console.log("Remettre à l'état initial");
//         return {
//           sortHotel: data, // Restaure les données initiales
//           sortType: '', // Réinitialise le type de tri
//           bool: false, // Désactive l'état de tri
//         };
//       }
//     });
//   },
// }));

export const useSortStore = create<any>()((set, get) => ({
  bool: false,
  sortType: '', // Type de tri
  sortHotel: [], // Liste des hôtels triés (initialisé à un tableau vide)

  hotelSort: (sortType: string, data: any) => {
    const { sortType: currentSortType } = get(); // Récupère le type de tri actuel

    set((state: any) => {
      // Si on clique à nouveau sur le même tri, ne pas retrier
      if (currentSortType === sortType) {
        return { sortHotel: state.sortHotel }; // Ne change rien si le tri est déjà fait
      }

      // Cas de tri par prix croissant (moins cher)
      if (sortType === 'less') {
        console.log('Tri par prix croissant (moins cher)');
        return {
          sortHotel: data
            ?.slice()
            .sort((a: any, b: any) => a.pricePerNight - b.pricePerNight),
          sortType,
          bool: true,
        };
      }

      // Cas de tri par prix décroissant (plus cher)
      else if (sortType === 'more') {
        console.log('Tri par prix décroissant (plus cher)');
        return {
          sortHotel: data
            ?.slice()
            .sort((a: any, b: any) => b.pricePerNight - a.pricePerNight),
          sortType,
          bool: true,
        };
      }

      // Cas de réinitialisation du tri
      else if (sortType === 'remettre') {
        console.log("Remettre à l'état initial");
        return {
          sortHotel: data, // Restaure les données initiales
          sortType: '', // Réinitialise le type de tri
          bool: false,
        };
      }
      return state;
    });
  },
}));
