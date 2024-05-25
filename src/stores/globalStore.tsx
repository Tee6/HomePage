import { create } from 'zustand';

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;

  showDropdown: boolean;
  ToggleDropdown: () => void;
};



const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  showDropdown: false,
  ToggleDropdown: () => set((state) => ({ showDropdown: !state.showDropdown }))
}));


export default useStore;