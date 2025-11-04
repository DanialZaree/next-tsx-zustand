import { create } from "zustand";


export interface Store {
  stateValue: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}


export const useMyStore = create<Store>((set) => ({
  stateValue: 0,
  increment: () => set((state) => ({ stateValue: state.stateValue + 1 })),
  decrement: () => set((state) => ({ stateValue: state.stateValue - 1 })),
  reset: () => set(() => ({ stateValue: 0 })),
}));
