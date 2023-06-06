"use client"

import Pagination from "@/components/Pagination/pagination";
import { categoriesDate } from "@/const/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CategoriesPage = () => {
  const [pCategories, setPCategories] = useState<any>();
  const PaginatedData = (res: any) => {
    setPCategories(res);
  };
  return (
    <div className="mb-28">
      <section className="my-28 flex justify-center md:justify-between flex-wrap gap-8">
        {pCategories?.map((item: any, idx: number) => {
          return (
            <Link
              href={`category/${item?.name}`}
              className="flex flex-col group items-center"
              key={idx}
            >
              <figure className="overflow-hidden rounded-full">
                <Image
                  src={`/assets/images/${item?.image}`}
                  alt={item?.name}
                  width={300}
                  height={300}
                  className=" transition-all duration-300 ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                />
              </figure>
              <h4 className="text-center font-normal mt-2 capitalize group-hover:text-light-blue text-text text-lg">
                {item?.name}
              </h4>
            </Link>
          );
        })}
      </section>
      <Pagination data={categoriesDate} PaginatedData={PaginatedData} perpage={12}/>
    </div>
  );
};

export default CategoriesPage;
