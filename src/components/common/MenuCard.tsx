import { Image, Skeleton } from "@mantine/core";
import { useState } from "react";

type MenuCardProps = {
  imageUrl: string;
  name: string;
  description: string;
};

export const MenuCard = ({ imageUrl, name, description }: MenuCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="w-fit p-5 shadow-2xl rounded-2xl flex flex-col justify-center items-center mt-5 bg-gray-100">
      <Skeleton visible={!isImageLoaded} w={144} h={144} radius={16}>
        <Image
          src={imageUrl}
          fit="contain"
          radius={16}
          onLoad={() => setIsImageLoaded(true)}
        />
      </Skeleton>
      <div className="max-w-50 flex flex-col mt-2">
        <span className="text-sm">{name}</span>
        <p className="text-xs font-light">{description}</p>
      </div>
    </div>
  );
};
