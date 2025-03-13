// import { DashboardTopImage } from "@/assets/images";

import { DashboardTopImage, PrepFood } from "@/assets/images";
import { Button } from "@/components/common";
import { PrepCard } from "@/components/Homepage/PrepCard";
import { CircleHelp, SwatchBook } from "lucide-react";

const prepSteps = [
  {
    image: PrepFood,
    stepCount: "-01",
    step: "Browse Our Menu",
    className: "rounded-customA"
  },
  {
    image: PrepFood,
    stepCount: "-02",
    step: "Find Favorite Food",
    className: "rounded-customB"
  },
  {
    image: PrepFood,
    stepCount: "-03",
    step: "Prepare and Cook",
    className: "rounded-customC"
  },
  {
    image: PrepFood,
    stepCount: "-04",
    step: "Enjoy Meal",
    className: "rounded-customD"
  }
];

export const HomePage = () => {
  return (
    <div>
      <div className="p-5 flex flex-col justify-center">
        <p className="text-4xl font-bold text-center">
          Welcome to BiteMe<span className="text-red-500">Daily</span>, where
          exceptional flavor meets unparalleled excellence
        </p>
        <Button
          text="View Menu"
          className="self-center mt-8"
          Icon={SwatchBook}
        />
      </div>
      <div className="px-5 mt-3">
        <img
          src={DashboardTopImage}
          alt="Lily banse"
          className="h-80 w-full rounded-4xl"
        />
      </div>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center">
          <CircleHelp />
          <span className="text-2xl mt-2">How Does it Works</span>
        </div>
        <div className="p-4 flex justify-center flex-wrap items-center">
          {prepSteps.map(({ image, stepCount, step, className }) => (
            <>
              <PrepCard
                key={stepCount}
                image={image}
                stepCount={stepCount}
                step={step}
                className={className}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
