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
      <DropdownMenuTrigger className="flex w-fit items-center gap-2 rounded-md border p-2">
        Filter By Area
        <ListFilterIcon size={14} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" grid w-fit grid-cols-2 gap-x-6">
        {areaList.map((item) => (
          <DropdownMenuItem key={item.strArea}>
            <div className="flex items-center gap-2">
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
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterByArea;
