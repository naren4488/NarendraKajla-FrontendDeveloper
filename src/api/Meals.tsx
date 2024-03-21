import { MealByAreaType } from "@/types";

/**
 * Fetch meals of an area (country)
 *
 * @param {string} area The area of meals to be fetched
 * @return {Promise<MealByAreaType[]>} Promise of MealsByAreaType type
 */
export const fetchMealsByArea = async (
  area: string,
): Promise<MealByAreaType[] | null> => {
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
 * @return {Promise<{strArea: string}[]>} Promise of list of areas
 */
export const fetchAreaList = async (): Promise<
  { strArea: string }[] | null
> => {
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
