import { TopNav } from "@/components/common";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};
