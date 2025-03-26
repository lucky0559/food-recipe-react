import { DashboardTopImage } from "@/assets/images";
import { Button } from "@/components/common";
import { SwatchBook } from "lucide-react";
import { Link } from "react-router-dom";

export const WelcomeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-5 flex flex-col justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Welcome to BiteMe<span className="text-red-500">Daily</span>, where
          exceptional flavor meets unparalleled excellence
        </p>
        <Link to={"/recipes"} className="self-center mt-8">
          <Button text="View Menu" Icon={SwatchBook} />
        </Link>
      </div>
      <div className="px-5 mt-3 lg:p-0 flex justify-between items-center w-11/12">
        <img
          src={DashboardTopImage}
          alt="Lily banse"
          className="h-56 sm:h-64 md:h-72 lg:h-96 xl:h-[35rem] w-full rounded-4xl"
        />
      </div>
    </div>
  );
};
