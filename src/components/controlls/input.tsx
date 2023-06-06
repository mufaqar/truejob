import React from "react";

const Input = ({ searchValue, handleChange, className }: any) => {
  return (
    <input
      name="search"
      value={searchValue}
      className={`p-2 outline-none border-none shadow-none focus:outline-none ${className}`}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Email Here"
    />
  );
};

export default Input;
