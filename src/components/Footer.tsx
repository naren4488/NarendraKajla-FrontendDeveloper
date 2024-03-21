import logoIcon from "@/assets/food-logo-colored.png";

const Footer = () => {
  return (
    <div className=" bg-black px-6  py-4 text-white sm:px-20">
      <div className="flex  items-center gap-2">
        <img src={logoIcon} alt="Logo" className="size-10 " />
        <h2 className="text-2xl font-bold">FoodMenuApp</h2>
      </div>
      <p className=" mt-2 text-sm text-slate-200">
        @2024 all rights are reserved for any copyrights
      </p>
    </div>
  );
};

export default Footer;
