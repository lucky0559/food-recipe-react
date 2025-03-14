import { ManCooking } from "@/assets/images";

export const ReviewSection = () => {
  return (
    <div className="bg-red-500 p-5 flex justify-center items-center h-fit lg:h-[26rem]">
      <div className="flex-1/2">
        <p className="text-white text-sm text-center pr-15 pl-3 lg:text-lg">
          I recently tried the [recipe name] from BiteMeDaily, and it was
          delightful! The flavors were perfectly balanced, and the dish was both
          visually appealing and delicious. The clear instructions made cooking
          enjoyable and stress-free. I was impressed with the freshness of the
          ingredients and the recipe's attention to detail. Overall, it was a
          fantastic experience that I highly recommend. BiteMeDaily truly brings
          flavor and excellence to the table!
        </p>
        <div></div>
      </div>
      <div className="mx-5">
        <img
          src={ManCooking}
          alt="Man cooking"
          className="rounded-xl w-32 md:w-36 lg:w-60"
        />
      </div>
    </div>
  );
};
