import clsx from 'clsx';
import React from 'react'

interface IButton {
     size? : "large" | "medium" | "small";
     variants? : "primary" | "secondary" | "outlined" | "text";
     fullwidth? : boolean;
     children: React.ReactNode;
     shadow?:boolean;
     rounded?: boolean;
}

const Button = ({children, size, variants, fullwidth, shadow, rounded }:IButton) => {
  return (
    <button className={clsx(
          "py-2 uppercase active:scale-105 flex items-center gap-2",
          { 
               "w-full" : fullwidth === true,
               "bg-yellow text-black hover:bg-light-blue hover:text-white" : variants === "primary",
               "bg-white text-black hover:bg-yellow" : variants === "secondary",
               "border-[1px] border-white text-white" : variants === "outlined",
               "" : variants === "text",
               "text-sm px-4 py-1" : size === "small",
               "text-base px-8 py-2.5" : size === "medium",
               "px-24 py-3" : size === "large",
               "rounded-2xl" : rounded === true,
          }
    )}
     style={{
          boxShadow: `${shadow ? '7px 7px 0px -2px #F8F055' : 'none'}`
     }}
    >
     {children}
     </button>
  )
}

export default Button