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

      return { filteredData };
    }),
}));

export const useSortStore = create<any>()((set, get) => ({
  bool: false,
  sortType: '',
  newTableDropdown: [],
  sortDropdown: (sortType: string, data: any) => {
    const { sortType: currentSortType } = get();
    set((state: any) => {
      if (currentSortType === sortType) {
        return { newTableDropdown: state.newTableDropdown };
      }

      if (sortType === 'less') {
        console.log('Tri par prix croissant (moins cher)');
        return {
          newTableDropdown: data
            ?.slice()
            .sort((a: any, b: any) => a.price - b.price),
          sortType,
          bool: true,
        };
      } else if (sortType === 'more') {
        console.log('Tri par prix décroissant (plus cher)');
        return {
          newTableDropdown: data
            ?.slice()
            .sort((a: any, b: any) => b.price - a.price),
          sortType,
          bool: true,
        };
      } else if (sortType === 'reset') {
        console.log('Reset');
        return {
          newTableDropdown: data,
          sortType: '',
          bool: false,
        };
      }
      return state;
    });
  },
}));

export const useFilterAccommodation = create<any>()((set) => ({
  filteredHotels: [],
  setFilteredHotels: (db: any, type: string) =>
    set(() => ({
      filteredHotels: db?.filter((hotel: any) => hotel.typeRoom === type),
    })),
}));
