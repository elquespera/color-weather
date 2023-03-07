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
      className="relative flex items-center gap-2 px-2 py-[0.2rem]
      text-lg sm:text-xl
      bg-primary-800 rounded-full overflow-hidden
      min-w-[8rem] max-w-[60vw]
      outline-none transition-all
      focus-visible:bg-primary-300"
      onClick={onClick}
    >
      <span
        className="absolute inset-0 transition-all bg-primary-400 opacity-0
          hover:opacity-20 active:opacity-30"
      />

      <Icon type="search" className="flex-shrink-0" />
      <span className="flex-grow-0 overflow-hidden text-ellipsis whitespace-nowrap">
        {city}
      </span>
    </button>
  );
}
