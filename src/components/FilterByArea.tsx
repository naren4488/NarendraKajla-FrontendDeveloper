import { ListFilterIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  areaList: { strArea: string }[];
  currentArea: string;
  onSubmit: (newArea: string) => void;
};

const FilterByArea = ({ areaList, currentArea, onSubmit }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-fit items-center gap-2 rounded-full border px-3 py-2">
        Filter By Area
        <ListFilterIcon size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" grid w-fit grid-cols-2 gap-x-6">
        {areaList.map((item) => (
          <DropdownMenuItem
            onClick={() => onSubmit(item.strArea)}
            key={item.strArea}
          >
            <div className="flex items-center gap-2">
              <input
                id={item.strArea}
                type="radio"
                value={item.strArea}
                name="location"
                checked={currentArea === item.strArea}
                readOnly
              />
              <label htmlFor={item.strArea}>{item.strArea}</label>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterByArea;
