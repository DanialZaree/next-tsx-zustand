import { createStore } from "zustand/vanilla";

export type StoreState = {
    stateValue: number;
}

export type StoreActions = {
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export type store  = StoreState & StoreActions;

export const defaultState: StoreState = {
    stateValue: 0,
};

export const createStoreMe = (
  initState: StoreState = defaultState,
) => {
  return createStore<StoreState>()((set) => ({
    ...initState,
    increment: () => set((state) => ({ stateValue: state.stateValue + 1 })),
    decrement: () => set((state) => ({ stateValue: state.stateValue - 1 })),
    reset: () => set({ stateValue: 0 }),
  }))
}