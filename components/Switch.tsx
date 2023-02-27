import clsx from "clsx";
import React from "react";
import { useEffect, useState } from "react";

interface SwitchProps {
  checked?: boolean;
  checkedDecoration?: string | React.ReactNode;
  uncheckedDecoration?: string | React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  checked,
  checkedDecoration,
  uncheckedDecoration,
  onChange,
}: SwitchProps) {
  const [inputChecked, setInputChecked] = useState(checked === true);

  function handleChange() {
    setInputChecked((current) => {
      if (onChange) onChange(!current);
      return !current;
    });
  }

  useEffect(() => setInputChecked(checked === true), [checked]);

  return (
    <label
      className={clsx(
        `relative inline-block overflow-hidden
        w-12 h-6 rounded-xl shadow-inner cursor-pointer
        transition-opacity opacity-80
        focus-within:opacity-100
        active:opacity-100
        hover:opacity-100
        `,
        inputChecked ? "bg-button" : "bg-button-unchecked"
      )}
    >
      <input
        className="opacity-0 translate-x-[-100%]"
        type="checkbox"
        checked={inputChecked}
        onChange={handleChange}
      />
      <span
        className={clsx(
          "absolute overflow-hidden inset-0 w-5 flex items-center text-background transition-all",
          inputChecked ? "translate-x-2" : "translate-x-7"
        )}
      >
        {inputChecked ? checkedDecoration : uncheckedDecoration}
      </span>
      <span
        className={clsx(
          "absolute rounded-full inset-1 w-4 bg-background transition-all",
          inputChecked && "translate-x-6"
        )}
      />
    </label>
  );
}
