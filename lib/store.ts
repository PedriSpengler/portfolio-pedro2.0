import { create } from "zustand";

interface FilterState {
  /** Currently active tech slug used to highlight matching projects, or null. */
  activeTech: string | null;
  setActiveTech: (slug: string | null) => void;
  toggleTech: (slug: string) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeTech: null,
  setActiveTech: (slug) => set({ activeTech: slug }),
  toggleTech: (slug) =>
    set((state) => ({ activeTech: state.activeTech === slug ? null : slug })),
}));
