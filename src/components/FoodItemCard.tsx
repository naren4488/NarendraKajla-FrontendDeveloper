import { Card, CardContent } from "./ui/card";
import { MealByAreaType } from "@/types";
import starIcon from "@/assets/favorite-5785.svg";

const FoodItemCard = ({ foodItem }: { foodItem: MealByAreaType }) => {
  /** generate a random rating between a range using Math.random() method
   *
   * @param {number} minRating minimum rating
   * @param {number} maxRating maximum rating
   * @returns {number} returns a random rating between 3 to 5
   */
  const generateRating = (minRating: number, maxRating: number): number => {
    return Number(
      (Math.random() * (maxRating - minRating) + minRating).toFixed(1),
    );
  };

  return (
    <div>
      <Card className="group">
        <CardContent className="p-3 ">
          <div className=" overflow-hidden rounded-md">
            <img
              src={foodItem.strMealThumb}
              alt="food item image"
              className="h-full w-full   object-cover transition-all group-hover:scale-105 group-hover:brightness-75"
            />
          </div>
          <div className="mt-3">
            <p className=" text-lg font-semibold">{foodItem.strMeal}</p>
            <div className="flex items-center gap-1">
              <img src={starIcon} alt="" className="size-4" />
              <span>{generateRating(3, 5)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodItemCard;
