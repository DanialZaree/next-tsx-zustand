import { createStore } from "zustand/vanilla";

export type Store = {
  stateValue: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const defaultState = {
  stateValue: 0,
};

export const createStoreMe = (
  initState = defaultState, 
) => {
  return createStore<Store>()((set) => ({
    ...initState,
    increment: () => set((state) => ({ stateValue: state.stateValue + 1 })),
    decrement: () => set((state) => ({ stateValue: state.stateValue - 1 })),
    reset: () => set({ stateValue: 0 }), 
  }));
};

export const myStore = createStoreMe();