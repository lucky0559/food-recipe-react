// import { DashboardTopImage } from "@/assets/images";

import { DashboardTopImage } from "@/assets/images";
import { Button } from "@/components/common";

export const HomePage = () => {
  return (
    <div>
      <div className="p-5 flex flex-col justify-center">
        <p className="text-4xl font-bold text-center">
          Welcome to BiteMe<span className="text-red-500">Daily</span>, where
          exceptional flavor meets unparalleled excellence
        </p>
        <Button text="View Menu" className="self-center mt-8" />
      </div>
      <div className="px-5 mt-3">
        <img
          src={DashboardTopImage}
          alt="Lily banse"
          className="h-80 w-full rounded-4xl"
        />
      </div>
    </div>
  );
};
