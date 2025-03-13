import { TopNav } from "@/components/common";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="font-ubuntu">
      <TopNav />
      <Outlet />
    </div>
  );
};
