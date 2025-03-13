import { DrawerMenu } from "@/components/common/DrawerMenu";

export const TopNav = () => {
  return (
    <div className="relative flex justify-center items-center p-4 bg-amber-50">
      <DrawerMenu />
      <span className="font-bold italic text-2xl">
        BiteMe<span className="text-red-500">Daily</span>
      </span>
    </div>
  );
};
