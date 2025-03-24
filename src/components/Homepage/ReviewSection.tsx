import { ManCooking } from "@/assets/images";

export const ReviewSection = () => {
  return (
    <div className="bg-red-500 p-5 flex justify-center items-center h-fit lg:h-[26rem] flex-col lg:flex-row">
      <div className="flex-1/2 lg:px-8">
        <p className="text-white text-sm md:text-lg lg:text-lg xl:text-xl text-center ">
          "I recently tried the [recipe name] from BiteMeDaily, and it was
          delightful! The flavors were perfectly balanced, and the dish was both
          visually appealing and delicious. The clear instructions made cooking
          enjoyable and stress-free. I was impressed with the freshness of the
          ingredients and the recipe's attention to detail. Overall, it was a
          fantastic experience that I highly recommend. BiteMeDaily truly brings
          flavor and excellence to the table!"
        </p>
        <div className="mt-3 lg:flex lg:justify-end lg:pr-11">
          <span className="text-black text-sm md:text-lg lg:text-lg xl:text-xl">
            -York York
          </span>
        </div>
      </div>
      <div className="my-5 lg:pr-5">
        <img
          src={ManCooking}
          alt="Man cooking"
          className="rounded-xl w-48 md:w-52 xl:w-64"
        />
      </div>
    </div>
  );
};
