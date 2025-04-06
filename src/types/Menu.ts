type Menu = {
  _id?: string;
  name: string;
  imageUrl: string;
  description: string;
  recipes: string[];
  procedures: string[];
  categories: string[];
};

type Menus = Menu[];

export type { Menu, Menus };
