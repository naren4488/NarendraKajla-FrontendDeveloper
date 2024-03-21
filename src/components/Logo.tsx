import { Link } from "react-router-dom";

const Logo = ({ imgURL }: { imgURL: string }) => {
  return (
    <Link to={"#"} className="flex cursor-pointer items-center gap-4">
      <img src={imgURL} alt="Logo" className="size-10 " />
      <h1 className="text-2xl font-bold text-orange-500 max-sm:hidden">
        FoodMenuApp
      </h1>
    </Link>
  );
};

export default Logo;
