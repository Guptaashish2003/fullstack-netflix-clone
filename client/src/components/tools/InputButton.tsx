import React, { FC } from "react";

interface InputButtonProps {
  type?: "submit" | "reset";
  className?: string;
  loading?: boolean;
  value: React.JSX.Element | string;
  onClick?: () => void;
  props?: object;
  name?: string;
  placeholder?: string;
  label?: string;
  id?: string;
  ref?: React.Ref<any>;
  option?: Array<string | { name: string; value: string }>;
  labelClass?: string;
  mainClass?: string;
}
const InputButton: FC<InputButtonProps> = ({
  type,
  loading,
  className,
  value,
  onClick,
  label,
  id,
  labelClass,
  mainClass,
  name,
  option,
  placeholder,
  ref,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-y-1 relative ${mainClass}`}>
      {label && (
        <label className={`${labelClass}`} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        name={name}
        className={`w-full 
   ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputButton;
