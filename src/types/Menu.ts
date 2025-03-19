type Menu = {
  name: string;
  image: string;
  description: string;
  recipes: string[];
  procedures: string[];
  category: string[];
};

type Menus = Menu[];

export type { Menu, Menus };
