const Filters = ({
  areaList,
}: {
  areaList: { strArea: string }[] | null | undefined;
}) => {
  if (areaList) console.log(areaList);

  return (
    <div>
      <h4 className="text-xl font-bold">Food menu items in : India</h4>
      <div>Add filter by area & sort by here</div>
    </div>
  );
};

export default Filters;
