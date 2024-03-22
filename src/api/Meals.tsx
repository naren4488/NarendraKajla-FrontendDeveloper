import { MealByAreaType, MealType } from "@/types";

/**
 * Fetch meals of an area (country)
 *
 * @param {string} area The area for which meals to be fetched
 * @return {Promise<MealByAreaType[] | null>} Promise of list of meals in an area
 */
export const fetchMealsByArea = async (
  area: string,
): Promise<MealByAreaType[] | null> => {
  // console.log("1. - fetching meals by area");
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
  return new Promise((resolve) => resolve(null));
};

/**
 * Fetch list of all areas
 *
 * @return {Promise<{strArea: string}[] | null>} Promise of list of areas
 */
export const fetchAreaList = async (): Promise<
  { strArea: string }[] | null
> => {
  // console.log("2. - fetching area list");
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`,
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
  return new Promise((resolve) => resolve(null));
};

/**
 * Fetch meal details using it id
 *
 * @param {string} mealId id of the meal
 * @returns {Promise<MealType | null>} Promise of meal information object
 */
export const fetchMealById = async (
  mealId: string,
): Promise<MealType | null> => {
  // console.log("3. - fetching meal details by id");
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    const data = await response.json();
    const {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
    } = data.meals[0];

    const mealInfo: MealType = {
      idMeal,
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
    };
    return mealInfo;
  } catch (error) {
    console.log(error);
  }
  return new Promise((resolve) => resolve(null));
};
