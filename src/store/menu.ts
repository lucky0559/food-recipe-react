import { create } from "zustand";

type MenuStoreType = {
  name: string;
  file: File | string;
  description: string;
  recipes: string[];
  procedures: string[];
  category: string[];
  // error?: string;
  // addRecipe: (v: string) => void;
  // addProcedure: (v: string) => void;
};

export const useMenuStore = create<MenuStoreType>(set => ({
  name: "",
  file: "",
  description: "",
  recipes: [],
  procedures: [],
  category: []
  // addRecipe(v) {
  //   if (get().recipes.includes(v.toUpperCase())) {
  //     return set({ error: "This recipe exists!" });
  //   }
  //   set({ recipes: [...get().recipes, v.toUpperCase()], error: "" });
  // },
  // addProcedure(v) {
  //   if (get().procedures.includes(v.toUpperCase())) {
  //     return set({ error: "This procedure exists!" });
  //   }
  //   set({ procedures: [...get().procedures, v.toUpperCase()], error: "" });
  // }
}));
