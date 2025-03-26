import { DrawerMenu } from "@/components/common/DrawerMenu";
import { Avatar } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";

const navLinkClass =
  "p-3 hover:bg-red-500 rounded-md font-medium xl:text-lg hover:text-white transition duration-300 ease-in-out mx-1";

export const TopNav = () => {
  const menu = ["home", "about", "recipes", "contact"];
  return (
    <div className="relative flex justify-center lg:justify-normal items-center p-4 mb-3 mt-4 lg:px-10">
      <DrawerMenu />
      <Link
        to={"/"}
        className="font-bold italic text-xl md:text-2xl lg:text-3xl lg:-mr-16 "
      >
        BiteMe<span className="text-red-500">Daily</span>
      </Link>
      <div className="mx-auto hidden lg:inline-block">
        {menu.map(m => (
          <NavLink
            key={m}
            to={`${m === "home" ? "/" : m}`}
            className={({ isActive }) =>
              isActive ? `bg-red-500 text-white ${navLinkClass}` : navLinkClass
            }
          >
            <span>{m.toUpperCase()}</span>
          </NavLink>
        ))}
      </div>
      <Avatar
        visibleFrom="lg"
        size={50}
        radius={"xl"}
        className="bg-gray-500 hover:bg-red-500 hover:cursor-pointer transition duration-300 ease-in-out"
        color="white"
      />
    </div>
  );
};
