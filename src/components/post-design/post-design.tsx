import Image from "next/image";
import React from "react";
import { GetWordStr } from "../../utils";
import { AiOutlineShareAlt } from "react-icons/ai";
import Link from "next/link";
import dateFormat from "dateformat";

const PostDesign = ({ post, layout, home, rounded, to }: any) => {
  const { date, excerpt, featuredImage, slug, title, categories, comments } =
    post;
  return (
    <div
      className={`group overflow-hidden bg-light-gray shadow-md dark:shadow-lg
      ${rounded && "rounded-3xl overflow-hidden"} 
      ${layout === 2 && "md:flex"}
      ${layout === 3 && "bg-transparent !shadow-none"}
      `}
    >
      <Link href={`${to ? to : ''}/${slug}`}>
        <figure
          className={`overflow-hidden relative ${layout === 2 && "md:w-full"}`}
        >
          <Image
            src={featuredImage?.node?.mediaItemUrl}
            alt=""
            width={700}
            height={700}
            className={`w-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover  ${
              layout === 2 ? "h-[240px]" : "h-[250px] sm:h-[300px]"
            }
            ${layout === 3 && home ? "sm:h-[240px]" : "sm:h-[340px]"}
          `}
          />
         
        </figure>
      </Link>
      <div
        className={`bg-light-gray ${layout === 2 && "md:w-1/2"} ${
          layout === 3 ? "p-0 bg-transparent" : "p-6"
        }
        ${layout === 3 && "p-0 pt-6"}`}
      >
        <div className={`${layout === 3 && "flex flex-col-reverse"}`}>
          <p className="capitalize text-light-blue text-sm">
      
            <span className="uppercase">
               {dateFormat(date, "mmmm d, yyyy")}
            </span>
          </p>
          <Link href={`${to ? to : ''}/${slug}`}>
            <h2
              className={`text-[18px] font-medium capitalize font-poppins ${
                layout === 3 ? " mb-3 leading-6" : " text-pure leading-7 mt-2"
              }`}
            >
              {title}
            </h2>
          </Link>
        </div>
        {layout !== 3 && (
          <div
            className="mt-3 text-text font-normal"
            dangerouslySetInnerHTML={{ __html: GetWordStr(excerpt, 16) }}
          />
        )}
      </div>
    </div>
  );
};

export default PostDesign;
