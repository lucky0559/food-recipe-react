import { Input } from "@/components/common";
import { ChipList, FoodListsSection } from "@/components/RecipesPage";
import { CATEGORIES } from "@/enums";
import { GET_ALL_MENU } from "@/graphql/queries/menu.query";
import { Menu } from "@/types";
import { useQuery } from "@apollo/client";
import { Search } from "lucide-react";
import { useMemo } from "react";

type GroupedItems = {
  [category: string]: Menu[];
};

export const RecipesPage = () => {
  const { data, error, loading } = useQuery(GET_ALL_MENU);

  const groupedItems = useMemo(() => {
    return data?.allMenu.reduce((acc: GroupedItems, item: Menu) => {
      // For each category of the item
      item.categories.forEach(category => {
        if (!acc[category]) {
          acc[category] = []; // Create an empty array if the category doesn't exist
        }
        acc[category].push(item); // Add the item to the corresponding category
      });

      return acc;
    }, {});
  }, [data]);

  return (
    <div className="px-10">
      <div>
        <Input placeholder="Search" Icon={Search} size="md" />
      </div>
      <ChipList />
      {!loading && (
        <>
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText="Need to try"
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.APPETIZERS}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.BEVERAGES}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.BREAKFAST}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.DESSERTS}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.ENTREES}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.SALADS}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.SIDES}
          />
          <FoodListsSection
            menus={groupedItems.dessert}
            headerText={CATEGORIES.SOUPS}
          />
        </>
      )}
    </div>
  );
};
