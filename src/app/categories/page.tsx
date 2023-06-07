"use client"

// import Pagination from "@/components/Pagination/pagination";
import { categoriesDate } from "@/const/categories";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AllCategories } from "@/config/queries";
import { useQuery } from "@apollo/client";
import Pagination from "@/components/Pagination/Pagination";

const CategoriesPage = () => {
  const [pCategories, setPCategories] = useState<any>();

  const PaginatedData = (res: any) => {
    setPCategories(res);
  };

  const {loading, error, data} = useQuery(AllCategories);
  console.log("🚀 ~ file: page.tsx:23 ~ Home2 ~ categoriresRes:", data)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <div className="mb-28">
      <section className="my-28 flex justify-center md:justify-center space-x-5 flex-wrap gap-8">
        {pCategories?.map((item: any, idx: number) => {
          const {name, slug, postCategoryFields:{image}} = item
          return (
            <Link
              href={`category/${slug}`}
              className="flex flex-col group items-center"
              key={idx}
            >
              <figure className="overflow-hidden rounded-full">
                <Image
                  src={image?.mediaItemUrl}
                  alt={name}
                  width={300}
                  height={300}
                  className=" transition-all duration-300 ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                />
              </figure>
              <h4 className="text-center font-normal mt-2 capitalize group-hover:text-light-blue text-text text-lg">
                {name}
              </h4>
            </Link>
          );
        })}
      </section>
      <Pagination data={data?.categories?.nodes} PaginatedData={PaginatedData} perpage={12} />
    </div>
  );
};

export default CategoriesPage;
