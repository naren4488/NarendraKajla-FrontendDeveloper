import { MealType } from "@/types";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";

const FoodItemModal = ({ mealInfo }: { mealInfo: MealType }) => {
  return (
    <div className=" space-y-4">
      <DialogHeader>
        <DialogTitle>{mealInfo.strMeal}</DialogTitle>
        <DialogDescription>Area: {mealInfo.strArea}</DialogDescription>
        <DialogDescription>Category: {mealInfo.strCategory}</DialogDescription>
        <DialogDescription>
          Tags: {mealInfo.strTags ? mealInfo.strTags : "Unknown"}
        </DialogDescription>
      </DialogHeader>
      <div className=" space-y-6">
        <AspectRatio ratio={6 / 3} className=" ">
          <img
            src={mealInfo.strMealThumb}
            alt="food-item-image"
            className=" h-full w-full rounded-md object-cover"
          />
        </AspectRatio>
        <DialogHeader className="space-y-4">
          <DialogTitle>Instructions for cooking</DialogTitle>
          <DialogDescription>
            Watch video for instrucitons{" "}
            <a
              target="_blank"
              href={mealInfo.strYoutube}
              className=" text-blue-500 underline"
            >
              Video Link
            </a>
          </DialogDescription>
          <DialogDescription>{mealInfo.strInstructions}</DialogDescription>
        </DialogHeader>
      </div>
    </div>
  );
};

export default FoodItemModal;
