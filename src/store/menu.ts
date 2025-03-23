import { create } from "zustand";

type MenuStoreType = {
  recipes: string[];
  procedures: string[];
  category: string[];
  // error?: string;
  // createMenu: (menu: Omit<Menu, "image"> & { image: File }) => void;
  // addProcedure: (v: string) => void;
};

export const useMenuStore = create<MenuStoreType>(set => ({
  recipes: [],
  procedures: [],
  category: []
}));
