import Filters from "@/components/Filters";
import { fetchMealsByArea } from "@/api/Meals";
import { useEffect, useState } from "react";
import { MealsByAreaType } from "@/types";

const HomePage = () => {
  const [mealsByArea, setMealsByArea] = useState<MealsByAreaType | null>();

  // By default fetch the Indian food items on page load
  useEffect(() => {
    (async () => {
      const meals = await fetchMealsByArea("Indian");
      setMealsByArea(meals);
    })();
  }, []);

  return (
    <div>
      <Filters />
      <div className="mt-6">
        {mealsByArea ? (
          <span>Meals Fetched Successfully</span>
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
