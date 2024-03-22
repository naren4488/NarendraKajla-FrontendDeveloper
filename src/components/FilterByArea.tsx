type Props = {
  areaList: { strArea: string }[];
  currentArea: string;
  onSubmit: (newArea: string) => void;
};

const FilterByArea = ({ areaList, currentArea, onSubmit }: Props) => {
  return (
    <div>
      {areaList.map((item) => (
        <div key={item.strArea} className="flex items-center gap-2">
          <input
            id={item.strArea}
            type="radio"
            value={item.strArea}
            name="location"
            checked={currentArea === item.strArea}
            onChange={(e) => onSubmit(e.target.value)}
          />
          <label htmlFor={item.strArea}>{item.strArea}</label>
        </div>
      ))}
    </div>
  );
};

export default FilterByArea;
