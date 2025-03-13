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
    <div className="flex flex-col bg-amber-100 p-5 w-fit rounded-xl text-sm m-3">
      <img src={image} alt={step} className={`w-45 h-40 mb-2 ${className}`} />
      <span>{stepCount}</span>
      <span>{step}</span>
    </div>
  );
};
