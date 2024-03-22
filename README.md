Title : Food Menu App

Discription : An application to view food items in different areas and having functionalities like pagination, filtering and sorting. And the app is fully reponsive.

Website live link - https://narendrakajla-frontenddeveloper.onrender.com/
Youtube video link - https://youtu.be/yxlqMei11YI

<!-- Technologies -->

React + Vite - for frontend
TypeScript - as programming langauge inside react
Tailwind & Shadcn/ui - for styling the application
React-routet-dom - for routes

API used - https://www.themealdb.com/api.php (please refer this for all the info on APIs)

<!-- Setup Guide -->

This app is create using vite-react, you can start the installation of project packages by command :
$ npm install

then run the project using command :
$ npm run dev

to test for any typescript errors run the command :
$ npm run type-check

to build
$ npm run build

to preview after build
$ npm run preview

<!-- Frontend UI Discription -->

The application contains a single page HomePage which is wrapped by layout along with Header and Footer componennts

Header - consist of a Logo and Search input (which is not functional as per requirements)
Footer - consist of Logo & basic footer discriptions

HomePage - consists of 3 different sections

1. FilterSection - which further consist of Filter by Area and Sort By functionlities
2. FoodItems grid - to display a reponsive grid for food items
3. Pagination - which allows pagination with 12 maximum number of food items on a page

Now inside FoodItems grid - Each FoodItemCard is clickable which further opens up a dialog modal with more information on the food item

<!-- Working of project -->

1. On app load, by default food items will be displayed for Indian location
2. We can click on any food item for more information about it
3. Filter by area can be used to display food items in different areas
4. Sort by can be used to sort in alphabetical order
5. Pagination can be used to view food items available on different sub pages
