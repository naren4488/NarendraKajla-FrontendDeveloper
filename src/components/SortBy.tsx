import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowDownAzIcon, ArrowDownZaIcon } from "lucide-react";

type Props = {
  sortOrder: string;
  handleSortBy: (sortOrder: string) => void;
};
const SortBy = ({ sortOrder, handleSortBy }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-fit items-center gap-2 rounded-full border px-3 py-2">
        Sort By{" "}
        {sortOrder === "inc" ? (
          <ArrowDownAzIcon size={20} />
        ) : (
          <ArrowDownZaIcon size={20} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => handleSortBy("inc")}
          className={`cursor-pointer`}
        >
          A-Z
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSortBy("dec")}
          className={`cursor-pointer`}
        >
          Z-A
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBy;
