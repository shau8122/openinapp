'use client'

import clsx from "clsx";

interface ButtonProps{
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?:React.ReactNode;
  onClick?:()=>void;
  disabled?:boolean
}



const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled
}) => {
  return ( 
    <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
            flex
            justify-center
            rounded-md
            px-3
            py-2
            text-[16px]
            font-bold font-montserrat
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            bg-[#4285F4]
            text-white
            hover:bg-sky-600 focus-visible:bg-sky-600

        `,  disabled && "opacity-50 cursor-default",
            fullWidth && "w-full",
        )}
    >
      {children}
    </button>
   );
}
 
export default Button;