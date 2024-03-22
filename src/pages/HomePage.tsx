import { fetchAreaList, fetchMealsByArea } from "@/api/Meals";
import { useEffect, useState } from "react";
import { MealByAreaType } from "@/types";
import FoodItemCard from "@/components/FoodItemCard";
import PaginationSelector from "@/components/PaginationSelector";
import FilterByArea from "@/components/FilterByArea";
import SortBy from "@/components/SortBy";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const [mealsByArea, setMealsByArea] = useState<MealByAreaType[] | null>();
  const [areaList, setAreaList] = useState<{ strArea: string }[] | null>();
  const [area, setArea] = useState("Indian");
  const [sortOrder, setSortOrder] = useState("inc");
  const [currentPage, setCurrentPage] = useState(1);

  // getting list of areas
  useEffect(() => {
    console.log("useEffect = main");
    (async () => {
      const areas = await fetchAreaList();
      setAreaList(areas);
    })();
  }, []);

  // getting meals by area
  useEffect(() => {
    console.log("useEffect == area", area);
    (async () => {
      const meals = await fetchMealsByArea(area);
      setMealsByArea(meals);
      setSortOrder("inc");
      setCurrentPage(1);
    })();
  }, [area]);

  /**
   * handles the update in area from filters section
   * @param {string} newArea
   */
  const handleFilterUpdate = (newArea: string) => {
    setArea(newArea);
  };

  /**
   * handles the sort by functionality by updating sorting state as inc or dec
   *
   * @param sortValue sorting state as inc or dec
   */
  const handleSortBy = (sortValue: string) => {
    setMealsByArea((prevState) => {
      if (
        (sortValue === "inc" && sortOrder === "dec") ||
        (sortValue === "dec" && sortOrder === "inc")
      ) {
        return prevState?.reverse();
      }
      return prevState;
    });
    setSortOrder(sortValue);
  };

  /**
   * Reset all the filters to default values
   * - reset area to Indian
   * - reset sort by to inc (A-Z)
   */
  const handleFilterReset = () => {
    setSortOrder("inc");
    setArea("Indian");
    console.log("reset filters");
  };

  // in-case of server not responding
  if (mealsByArea === null) {
    return (
      <div className="">
        <p>Something went wrong...</p>
        <p>
          Please check your internet or maybe server is not running/responding,
          Please check console for more details.
        </p>
      </div>
    );
  }

  // in-case of loading
  if (mealsByArea === undefined) {
    return <div>Loading Food Items...</div>;
  }

  if (mealsByArea) {
    return (
      <div className="flex flex-col gap-5">
        <div className="">
          {/* filters section */}
          <h4 className="mb-3 text-xl font-bold">
            <span className=" text-orange-500">{area}</span> - Food Items
          </h4>

          <div className="flex items-center gap-3">
            {/* Filter by area */}
            {areaList && (
              <FilterByArea
                areaList={areaList}
                onSubmit={handleFilterUpdate}
                currentArea={area}
              />
            )}

            {/* sort by */}
            <SortBy sortOrder={sortOrder} handleSortBy={handleSortBy} />

            {/* reset filters */}
            <Button
              variant={"link"}
              onClick={handleFilterReset}
              className=" px-1 text-orange-500"
            >
              Reset All
            </Button>
          </div>
        </div>

        {/* Food Items section*/}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {mealsByArea
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((meal) => (
              <FoodItemCard key={meal.idMeal} foodItem={meal} />
            ))}
        </div>
        <PaginationSelector
          onPageChange={setCurrentPage}
          currentPage={currentPage}
          totalPages={Math.ceil(mealsByArea.length / 12)}
        />
      </div>
    );
  }
};

export default HomePage;
