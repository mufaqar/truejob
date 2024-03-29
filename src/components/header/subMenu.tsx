import React from "react";
const SubMenu = ({ children }: any) => {
  return (
    <div className="md:absolute md:pt-4 z-50">
      <ul className="bg-light-gray hidden group-hover:block md:w-[350px]">
        {children}
      </ul>
    </div>
  );
};

export default SubMenu;
