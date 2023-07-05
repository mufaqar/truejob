"use client";
import React from "react";
import Button from "../ui/button";
import Link from "next/link";
interface IPageBanner {
  title?: string;
  subTitle?: string;
  image: any;
  buttontext?: string;
  buttonLink?: string | number | any;
  rounded?: boolean;
  className?:any
  full?:boolean
}

const PageBanner = ({
  title,
  full,
  subTitle,
  image,
  buttontext,
  buttonLink,
  rounded,
  className
}: IPageBanner) => {
  return (
    <>
      <div
        className={`${full ? 'h-[300px] md:h-[100vh]' : 'h-[420px]'}  bg-cover bg-no-repeat bg-center relative ${rounded && 'container mt-20 px-4 md:px-10 mx-auto rounded-[20px]'} ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={` absolute top-0 p-4 flex flex-col justify-center text-white items-center right-0 bottom-0 left-0 bg-black/30 ${rounded && 'container px-4 md:px-10 mx-auto rounded-[20px]'}`}>
          <h1 className="text-xl md:text-4xl pt-10 text-yellow font-bold font-poppins text-center capitalize">
            {title}
          </h1>
          {subTitle && <div className="mt-3 text-lg font-poppins font-light max-w-[600px] text-center mb-5" dangerouslySetInnerHTML={{
              __html: subTitle }} /> }
          
          {buttontext && (
            <Link href={buttonLink}>
              <Button variants={`${rounded ? 'primary' : 'outlined'}`} size="medium" rounded={true}>
                {buttontext}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default PageBanner;
