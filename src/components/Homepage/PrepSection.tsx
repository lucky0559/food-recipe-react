import { Cooking, Eating, Foods, PrepFood } from "@/assets/images";
import { PrepCard } from "@/components/Homepage/PrepCard";
import { CircleHelp } from "lucide-react";

const prepSteps = [
  {
    image: PrepFood,
    stepCount: "-01",
    step: "Browse Our Menu",
    className: "rounded-customA"
  },
  {
    image: Foods,
    stepCount: "-02",
    step: "Find Favorite Food",
    className: "rounded-customB"
  },
  {
    image: Cooking,
    stepCount: "-03",
    step: "Prepare and Cook",
    className: "rounded-customC"
  },
  {
    image: Eating,
    stepCount: "-04",
    step: "Enjoy Meal",
    className: "rounded-customD"
  }
];

export const PrepSection = () => {
  return (
    <>
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
    </>
  );
};
