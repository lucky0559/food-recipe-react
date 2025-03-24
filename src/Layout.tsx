import { TopNav } from "@/components/common";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-ubuntu xl:px-40 2xl:px-52">
      <TopNav />
      <Outlet />
    </div>
  );
};
