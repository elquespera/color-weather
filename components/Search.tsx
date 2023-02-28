import React, { useState } from "react";

interface SearchProps {
  open?: boolean;
}

export default function Search({ open }: SearchProps) {
  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className=" bg-transparent focus:outline-none
        selection:text-primary-dark selection:bg-primary-200"
      />
    </div>
  );
}
