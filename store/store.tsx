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
