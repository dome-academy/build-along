import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm md:text-base font-medium text-gray-200 mb-2'
      >
        {label}
      </label>

      <input
        {...props}
        name={name}
        className='mt-1 w-full rounded-md border-gray-200 bg-transparent text-sm md:text-base text-gray-200 border shadow-sm focus:outline-yellow-400 focus:border-gray-200/20'
      />
    </>
  );
};

export default Input;
