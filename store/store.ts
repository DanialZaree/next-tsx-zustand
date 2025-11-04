import { create } from "zustand";

interface Store {
  stateValue: number;
  message: string;
  message2: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  updateMessage: (msg: string) => void;
  updateMessage2: (msg: string) => void;
}

export const useMyStore = create<Store>((set) => ({
  stateValue: 0,
  message: "",
  message2: "",
  increment: () => set((state) => ({ stateValue: state.stateValue + 1 })),
  decrement: () => set((state) => ({ stateValue: state.stateValue - 1 })),
  reset: () => set(() => ({ stateValue: 0 })),
  updateMessage: (msg) => set(() => ({ message: msg })),
  updateMessage2: (msg) => set(() => ({ message2: msg })),
}));
