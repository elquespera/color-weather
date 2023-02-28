import LocationContext from "context/LocationContext";
import Icon from "components/ui/Icon";
import { useContext } from "react";

interface SearchPlaceholderProps {
  onClick?: () => void;
}

export default function SearchPlaceholder({ onClick }: SearchPlaceholderProps) {
  const { city } = useContext(LocationContext);

  return (
    <button
      className={`flex items-center gap-3 px-4 py-1
      text-lg sm:text-xl text-primary-200
      bg-primary-800 rounded-full overflow-hidden
      min-w-[8rem] max-w-[60vw]
      transition-all
      hover:bg-primary-700`}
      onClick={onClick}
    >
      <Icon type="search" className="text-primary-200 flex-shrink-0" />
      <span className="flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {city}
      </span>
    </button>
  );
}
