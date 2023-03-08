import clsx from "clsx";
import React, { ChangeEvent } from "react";
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
  const [inputChecked, setInputChecked] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    setInputChecked(isChecked);
    if (onChange) onChange(isChecked);
  }

  useEffect(() => setInputChecked(checked === true), [checked]);

  return (
    <label
      className={clsx(
        `relative inline-block overflow-hidden
        w-12 h-6 
        rounded-xl shadow-inset-switch cursor-pointer
        transition-opacity opacity-80
        focus-within:opacity-100
        active:opacity-100
        hover:opacity-100
        select-none
        `,
        inputChecked ? "bg-switch" : "bg-switch-unchecked"
      )}
    >
      <input
        className="opacity-0 translate-x-[-100%] w-0 h-0"
        type="checkbox"
        checked={inputChecked}
        onChange={handleChange}
      />
      <span
        className={clsx(
          "absolute overflow-hidden inset-0 w-5 flex items-center text-text-contrast transition-all scale-75",
          inputChecked ? "translate-x-2" : "translate-x-6"
        )}
      >
        {inputChecked ? checkedDecoration : uncheckedDecoration}
      </span>
      <span
        className={clsx(
          "absolute rounded-full inset-1 w-4 bg-switch-knob transition-all",
          inputChecked && "translate-x-6"
        )}
      />
    </label>
  );
}
