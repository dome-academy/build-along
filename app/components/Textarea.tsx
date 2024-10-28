import React, { FC, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: FC<TextareaProps> = ({ label, name, ...props }) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm md:text-base font-medium text-gray-200 mb-2'
      >
        {label}
      </label>

      <textarea
        {...props}
        name={name}
        rows={6}
        className='mt-1 w-full rounded-md border-gray-200 bg-transparent text-sm md:text-base text-gray-200 border shadow-sm focus:outline-yellow-400 focus:border-gray-200/20'
      />
    </>
  );
};

export default Textarea;
