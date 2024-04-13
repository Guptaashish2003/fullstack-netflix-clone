"use client";
import React, { FC } from "react";

interface ButtonProps {
  type?: "submit" | "reset";
  className?: string;
  loading?: boolean;
  value: React.JSX.Element | string;
  // onclick do or null
  onClick?: () => void | null;
  icons?: React.JSX.Element;
  props?: object;
}
const Button: FC<ButtonProps> = ({
  type,
  className,
  loading,
  value,
  icons,
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={` ${className} w-20  bg-red-600 rounded-md bg-opacity-100 hover:bg-opacity-80 `}
      onClick={() => onClick()}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-center items-center  text-white font-semibold  gap-4">
          {value}
          {icons && (
            <div className="flex justify-center items-center text-white font-semibold  gap-4">
              {icons}
            </div>
          )}
        </div>
      )}
    </button>
  );
};

export default Button;
