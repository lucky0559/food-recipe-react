import { DrawerMenu } from "@/components/common/DrawerMenu";

export const TopNav = () => {
  return (
    <div className="relative flex justify-center items-center p-4 mb-3 mt-4">
      <DrawerMenu />
      <span className="font-bold italic text-3xl">
        BiteMe<span className="text-red-500">Daily</span>
      </span>
    </div>
  );
};
