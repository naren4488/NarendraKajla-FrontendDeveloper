import { fetchAreaList, fetchMealsByArea } from "@/api/Meals";
import { useEffect, useState } from "react";
import { MealByAreaType } from "@/types";
import FoodItemCard from "@/components/FoodItemCard";
import PaginationSelector from "@/components/PaginationSelector";
import FilterByArea from "@/components/FilterByArea";

const HomePage = () => {
  const [mealsByArea, setMealsByArea] = useState<MealByAreaType[] | null>();
  const [areaList, setAreaList] = useState<{ strArea: string }[] | null>();
  const [area, setArea] = useState("Indian");

  // By default fetch the Indian food items on page load
  useEffect(() => {
    (async () => {
      const meals = await fetchMealsByArea("Indian");
      const areas = await fetchAreaList();
      setMealsByArea(meals);
      setAreaList(areas);
    })();
  }, []);

  /**
   * handles the update in area from filters section
   * @param {string} newArea
   */
  const handleFilterUpdate = (newArea: string) => {
    console.log(newArea);
    setArea(newArea);
  };

  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl font-bold">{area} - Food Items</h4>

      {/* Filters section */}
      {areaList && (
        <FilterByArea
          areaList={areaList}
          onSubmit={handleFilterUpdate}
          currentArea={area}
        />
      )}

      {/* Food Items section*/}
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
