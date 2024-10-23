"use client";
import React, { ButtonHTMLAttributes, FC } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pendingText: string;
  text: string;
}

const Button: FC<ButtonProps> = ({ pendingText, text, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <button
      {...props}
      className='inline-flex rounded-full border border-solid border-transparent transition-colors items-center justify-center bg-[#ededed] text-[#0a0a0a] gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
    >
      {pending ? pendingText : text}
    </button>
  );
};

export default Button;
