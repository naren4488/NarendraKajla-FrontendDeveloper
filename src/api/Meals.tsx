import { MealsByAreaType } from "@/types";

/**
 * Returns meals of an area (country)
 *
 * @param {string} area The area of meals to be fetched
 * @return {Promise<MealsByAreaType>} Promise of MealsByAreaType type
 */
export const fetchMealsByArea = async (
  area: string,
): Promise<MealsByAreaType | null> => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    const data = await response.json();
    //   console.log(data);
    return data.meals;
  } catch (error) {
    console.log(error);
  }
  return new Promise((resolve) => resolve(null));
};
