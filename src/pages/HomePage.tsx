import Filters from "@/components/Filters";
import { fetchMealsByArea } from "@/api/Meals";
import { useEffect, useState } from "react";
import { MealByAreaType } from "@/types";

import FoodItemCard from "@/components/FoodItemCard";
import PaginationSelector from "@/components/PaginationSelector";

const HomePage = () => {
  const [mealsByArea, setMealsByArea] = useState<MealByAreaType[] | null>();

  // By default fetch the Indian food items on page load
  useEffect(() => {
    (async () => {
      const meals = await fetchMealsByArea("Indian");
      setMealsByArea(meals);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Filters />
      <div className="">
        {mealsByArea ? (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {mealsByArea.map((meal) => (
                <FoodItemCard key={meal.idMeal} foodItem={meal} />
              ))}
            </div>
            <PaginationSelector />
          </div>
        ) : mealsByArea === null ? (
          <span className="">Something went wrong</span>
        ) : (
          <span className="">Loading Food Items...</span>
        )}
      </div>
    </div>
  );
};

export default HomePage;
