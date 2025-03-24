import { DrawerMenu } from "@/components/common/DrawerMenu";
import { Avatar } from "@mantine/core";
import { Link } from "react-router-dom";

export const TopNav = () => {
  const menu = ["home", "about", "recipes", "contact"];
  return (
    <div className="relative flex justify-center lg:justify-center items-center p-4 mb-3 mt-4 lg:px-10">
      <DrawerMenu />
      <span className="font-bold italic text-xl md:text-2xl lg:text-2xl xl:text-3xl lg:-mr-16 ">
        BiteMe<span className="text-red-500">Daily</span>
      </span>
      <div className="mx-auto hidden">
        {menu.map(m => (
          <Link
            key={m}
            to={`${m === "home" ? "/" : m}`}
            className="p-3 hover:bg-amber-50 font-medium xl:text-lg"
          >
            <span>{m.toUpperCase()}</span>
          </Link>
        ))}
      </div>
      <Avatar visibleFrom="lg" size={50} radius={"xl"} />
    </div>
  );
};
