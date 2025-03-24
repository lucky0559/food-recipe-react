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
    <div className="flex flex-col bg-amber-200 p-5 w-fit rounded-xl text-sm lg:text-lg xl:text-xl m-3 border">
      <img
        src={image}
        alt={step}
        className={`w-40 lg:w-44 xl:w-48 h-32 lg:h-40 xl:h-44 mb-2 ${className}`}
      />
      <span>{stepCount}</span>
      <span>{step}</span>
    </div>
  );
};
