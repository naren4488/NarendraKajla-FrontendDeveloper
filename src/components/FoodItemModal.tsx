import { MealType } from "@/types";

const FoodItemModal = ({ mealInfo }: { mealInfo: MealType }) => {
  return <div>{mealInfo.idMeal}</div>;
};

export default FoodItemModal;
