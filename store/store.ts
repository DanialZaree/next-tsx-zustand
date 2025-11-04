import { create } from "zustand";

interface Store {
  stateValue: number;
  message: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  updateMessage: (msg: string) => void;
}

export const useMyStore = create<Store>((set) => ({
  stateValue: 0,
  message: "",
  increment: () => set((state) => ({ stateValue: state.stateValue + 1 })),
  decrement: () => set((state) => ({ stateValue: state.stateValue - 1 })),
  reset: () => set(() => ({ stateValue: 0 })),
  updateMessage: (msg) => set(() => ({ message: msg })),
}));
