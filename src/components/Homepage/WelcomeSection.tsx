import { DashboardTopImage } from "@/assets/images";
import { Button } from "@/components/common";
import { SwatchBook } from "lucide-react";
import { Link } from "react-router-dom";

export const WelcomeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-5 flex flex-col justify-center">
        <p className="text-4xl font-bold text-center">
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
          className="h-80 lg:h-96 w-full rounded-4xl xl:h-[30rem] 2xl:h-[36rem]"
        />
      </div>
    </div>
  );
};
