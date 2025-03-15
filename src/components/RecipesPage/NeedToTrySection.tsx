import { MenuCard } from "@/components/common";
import { recipes } from "@/mockData/mockData";
import { MoveRight } from "lucide-react";

export const NeedToTrySection = () => {
  return (
    <div className="px-5 pt-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold italic">Need to try</span>
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
        {recipes.map(({ _id, name, image, description }) => (
          <MenuCard
            key={_id}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
