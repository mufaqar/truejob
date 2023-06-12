import { PostMokeData } from "@/const/post";
import { GetWordStr } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const PostDesign2 = ({data}:any) => {
   
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      {data?.slice(1, 5).map((item:any, idx:number) => {
        const {date, excerpt, featuredImage, slug, title, categories, comments} = item
        return (
          <div key={idx} className="group">
            <figure className="relative overflow-hidden rounded-3xl ">
              <Image
                src={featuredImage?.node?.mediaItemUrl}
                alt={featuredImage?.node?.altText}
                width={700}
                height={700}
                className="h-80 group-hover:scale-110  w-full object-cover transition-all duration-200 ease-in-out"
              />
            </figure>
            <div className="px-4">
              <div className="bg-white shadow-xl p-5 dark:bg-light-gray relative -mt-20 md:-mt-28 z-10 rounded-3xl overflow-hidden">
              <p className="text-yellow rounded-3xl font-poppins uppercase font-light ">
                {categories?.nodes[0]?.name}
              </p>
              <Link href={`blogs/${slug}`}>
                <h2 className="pb-4 group-hover:text-light-blue font-poppins text-lg min-h-[75px]">
                  { GetWordStr(title, 7) } ...
                </h2>
              </Link>
              <div
                className=" flex gap-3 text-sm md:text-base justify-start w-full"
              >
                <span className="flex items-center gap-1">
                  <i>
                    <AiOutlineClockCircle />
                  </i>
                  2 .
                </span>
                <span className="flex items-center gap-1">
                  <i>
                    <AiOutlineEye className="text-lg" />
                  </i>
                  1.3k
                </span>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostDesign2;
