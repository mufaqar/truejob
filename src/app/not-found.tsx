import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      <h1 className="2xl:text-[228px] lg:text-[198px] sm:text-[148px] text-black font-[200] tracking-widest dark:text-white">
        OOPS!
      </h1>
      <p className=" bg-white dark:bg-dark-gray p-1 -mt-16 md:-mt-24 px-4 inline-block text-[28px]">
        404 - THE PAGE CAN'T BE FOUND
      </p>
      <Link href="/" className="font-poppins text-white uppercase bg-light-blue hover:bg-black p-3 px-6  md:text-[18px] lg:text-[22px] sm:text-[1.3rem] mt-7 ">
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFoundPage;
