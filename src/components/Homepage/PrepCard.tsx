type PrepCardProps = {
  image: string;
  stepCount: string;
  step: string;
  className?: string;
};

export const PrepCard = ({
  image,
  stepCount,
  step,
  className
}: PrepCardProps) => {
  return (
    <div className="flex flex-col bg-amber-200 p-5 w-fit rounded-xl text-sm md:text-lg lg:text-xl xl:text-xl m-3 border">
      <img
        src={image}
        alt={step}
        className={`w-40 md:w-44 lg:w-48 xl:w-56 h-32 md:h-36 lg:h-44 xl:h-44 mb-2 ${className}`}
      />
      <span>{stepCount}</span>
      <span>{step}</span>
    </div>
  );
};
