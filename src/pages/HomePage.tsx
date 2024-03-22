import { fetchAreaList, fetchMealById, fetchMealsByArea } from "@/api/Meals";
import { useEffect, useState } from "react";
import { MealByAreaType, MealType } from "@/types";
import FoodItemCard from "@/components/FoodItemCard";
import PaginationSelector from "@/components/PaginationSelector";
import FilterByArea from "@/components/FilterByArea";
import SortBy from "@/components/SortBy";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FoodItemModal from "@/components/FoodItemModal";

const HomePage = () => {
  const [mealsByArea, setMealsByArea] = useState<MealByAreaType[] | null>();
  const [areaList, setAreaList] = useState<{ strArea: string }[] | null>();
  const [area, setArea] = useState("Indian");
  const [sortOrder, setSortOrder] = useState("inc");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpenId, setModalOpenId] = useState("");
  const [selectedMealInfo, setSelectedMealInfo] = useState<MealType | null>();

  // Getting list of areas
  useEffect(() => {
    (async () => {
      const areas = await fetchAreaList();
      setAreaList(areas);
    })();
  }, []);

  // Getting meals by area
  useEffect(() => {
    (async () => {
      const meals = await fetchMealsByArea(area);
      setMealsByArea(meals);
      setSortOrder("inc");
      setCurrentPage(1);
    })();
  }, [area]);

  // Getting meal info by id
  useEffect(() => {
    if (modalOpenId) {
      (async () => {
        const mealInfo = await fetchMealById(modalOpenId);
        setSelectedMealInfo(mealInfo);
      })();
    }
  }, [modalOpenId]);

  /**
   * Handles the update in area from filters section
   * @param {string} newArea
   */
  const handleFilterUpdate = (newArea: string) => {
    setArea(newArea);
  };

  /**
   * Handles the sort by functionality by updating sorting state as inc or dec
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

  /**
   * Handle modal opening by setting id of selected food item to fetch its info
   *
   * @param {boolean} open status of modal open or close
   * @param {string} mealid id of selected food item
   */
  const handleModalOpen = (open: boolean, mealid: string) => {
    if (open)
      setModalOpenId((prevId) => {
        if (prevId !== mealid) {
          setSelectedMealInfo(null);
          return mealid;
        } else return prevId;
      });
  };

  // In-case of server not responding
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

  // In-case of loading
  if (mealsByArea === undefined) {
    return <div>Loading Food Items...</div>;
  }

  if (mealsByArea) {
    return (
      <div className="flex flex-col gap-5">
        <div className="">
          {/* Filters section */}
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

            {/* Sort by */}
            <SortBy sortOrder={sortOrder} handleSortBy={handleSortBy} />

            {/* Reset filters */}
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
              <Dialog
                onOpenChange={(open) => {
                  handleModalOpen(open, meal.idMeal);
                }}
                key={meal.idMeal}
              >
                <DialogTrigger>
                  <FoodItemCard foodItem={meal} />
                </DialogTrigger>
                {/* <DialogOverlay> */}
                <DialogContent className="max-h-[90%] overflow-y-scroll lg:max-w-screen-lg">
                  {selectedMealInfo ? (
                    <FoodItemModal mealInfo={selectedMealInfo} />
                  ) : (
                    <span>Loading...</span>
                  )}
                </DialogContent>
                {/* </DialogOverlay> */}
              </Dialog>
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
