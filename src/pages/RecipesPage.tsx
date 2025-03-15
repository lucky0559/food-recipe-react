import { Input } from "@/components/common";
import { ChipList, NeedToTrySection } from "@/components/RecipesPage";
import { Search } from "lucide-react";

export const RecipesPage = () => {
  return (
    <div className="px-10">
      <div>
        <Input placeholder="Search" Icon={Search} size="md" />
      </div>
      <ChipList />
      <NeedToTrySection />
    </div>
  );
};
