import { MenuCard } from "@/components/common";
import { Menu } from "@/types";
import { MoveRight } from "lucide-react";

type FoodListsSectionProps = {
  menus: Menu[];
  headerText: string;
};

export const FoodListsSection = ({
  menus,
  headerText
}: FoodListsSectionProps) => {
  return (
    <div className="px-5 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold italic">{headerText}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg">See all</span>
          </div>
          <div>
            <MoveRight />
          </div>
        </div>
      </div>
      <div>
        {menus.map(({ _id, name, imageUrl, description }) => (
          <MenuCard
            key={_id}
            name={name}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
