'use client';
import clsx from "clsx";
import {
  FieldValues,
  FieldErrors,
  UseFormRegister
  } from 'react-hook-form';

interface InputProps{
  label: string,
  id:string,
  type?: string
  required?:boolean,
  register:UseFormRegister<FieldValues>,
  errors:FieldErrors,
  disabled?:boolean,
  placeholder?:string
}
const Input:React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder
}) => {
  return ( 
    <div className="">
      <label 
        htmlFor={id}
        className="
          block
          text-sm font-lato
          font-medium
          leading-6
        "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id} 
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          {...register(id,{required})}
          className={clsx(`
              px-3
              block
              w-full bg-background
              rounded-lg font-lato
              border-0
              py-1.5 text-lg text-black
              sm:text-sm
              sm:leading-6`,
              errors[id] && "focus:ring-rose-500",
              disabled && "ocupacity-50 cursor-default"
              )}
          />
      </div>
    </div>
   );
}
 
export default Input;