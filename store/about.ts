import { create } from "zustand";

interface AboutStore {
    year:number;
    num:number;
}

export const useAboutStore = create<AboutStore>((set) => ({
    year: 2024,
    num:0,
}))