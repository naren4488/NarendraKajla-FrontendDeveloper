import Logo from "./Logo";
import logoIcon from "@/assets/food-logo-colored.png";
import Search from "./Search";

const Header = () => {
  return (
    <div className=" flex items-center justify-between border-b border-b-orange-500 px-6 py-4  sm:px-20">
      <Logo imgURL={logoIcon} />
      <Search />
    </div>
  );
};

export default Header;
