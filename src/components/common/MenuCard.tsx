type MenuCardProps = {
  image: string;
  name: string;
  description: string;
};

export const MenuCard = ({ image, name, description }: MenuCardProps) => {
  return (
    <div className="w-fit p-5 shadow-2xl rounded-2xl flex flex-col justify-center items-center mt-5 bg-gray-100">
      <img src={image} alt={name} className="w-36 rounded-2xl border shadow" />
      <div className="max-w-50 flex flex-col mt-2">
        <span className="text-sm">{name}</span>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
};
