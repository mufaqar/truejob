"use client";

import Layout from "@/components/Layout/Layout";
import Pagination from "@/components/Pagination/Pagination";

import Slider from "@/components/Slider/Slider";
import { SideBarHeading } from "@/components/aside";
import Footer1 from "@/components/footer";
import Header2 from "@/components/header/header2";
import PageBanner from "@/components/page-banner/banner";
import PostDesign from "@/components/post-design/post-design";
import Loader from "@/components/preLoader/loader";
import Button from "@/components/ui/button";
import { AllPosts } from "@/config/queries";
import { PostMokeData } from "@/const/post";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";


const Blog2 = () => {

  const [pData, setPData] = useState<any>()
  const PaginatedData = (res: any) => {
    setPData(res)
  }

  const { loading, error, data } = useQuery(AllPosts);
  console.log("🚀 ~ file: page.tsx:33 ~ Blog ~ data:", data)

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;



  return (
    <>
      <Header2 />

      <PageBanner
        title="Blogs"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        image="/assets/images/contat.jpg"
        rounded={true}
      />
      <Layout>
        <section className="my-24">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {pData?.slice(0, 4).map((item:any, idx:number) => {
              const {date, excerpt, featuredImage, slug, title, categories, comments} = item
              return (
                <div key={idx}>
                  <figure className="relative group overflow-hidden">
                    <Image
                      src={featuredImage?.node?.mediaItemUrl}
                      alt={featuredImage?.node?.altText}
                      width={400}
                      height={400}
                      className="h-40 sm:h-60 group-hover:scale-110 xl:h-72 w-full object-cover transition-all duration-200 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:block">
                      <div className="flex flex-col justify-center items-center h-full text-yellow">
                        <AiOutlinePlusCircle
                          size={30}
                          className="group-hover:scale-110 transition-all duration ease-in-out"
                        />
                        <span className="text-sm md:text-base">View More</span>
                      </div>
                      <Link
                        href={item?.title}
                        className="text-white flex gap-5 text-sm md:text-base justify-center item-center absolute bottom-2 pt-2 md:bottom-4 w-full border-t-[1px] border-gray-300 md:pt-4"
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
                      </Link>
                    </div>
                  </figure>
                  <p className="mt-3 text-center font-poppins uppercase font-light text-gray-400">
                    {categories?.nodes[0]?.name}
                  </p>
                  <Link href={slug}>
                    <h2 className="text-center font-poppins text-lg">
                      {title}
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
        <div className="pt-[1px] bg-border" />
        <section className="my-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {pData?.map((post: any, idx: number) => {
              const {date, excerpt, featuredImage, slug, title, categories, comments} = post
              if (idx === 2) {
                return (
                  <div
                    className="relative bg-light-gray bg-cover rounded-3xl overflow-hidden"
                    key={idx}
                    style={{ backgroundImage: `url(${featuredImage?.node?.mediaItemUrl})` }}
                  >
                    <div className="bg-black/40 inset-0 absolute" />
                    <div className="text-white z-10 relative p-10 text-center">
                      <h2 className="uppercase text-light-blue text-lg">
                        {categories?.nodes[0]?.name}
                      </h2>
                      <h2 className="text-2xl font-poppins capitalize mt-6">
                        {title}
                      </h2>
                      <div className="text-white mb-20 flex gap-5 text-sm md:text-base justify-center item-center mt-5 pt-5 w-full border-t-[1px] border-white">
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
                      <Link href={`blogs/${slug}`} className="flex justify-center">
                        <Button variants="primary" size="medium">View More</Button>
                      </Link>
                    </div>
                  </div>
                );
              } else {
                return (
                  <PostDesign post={post} idx={idx} key={idx} rounded={true} />
                );
              }
            })}
          </div>
          <Pagination data={data?.posts?.nodes} PaginatedData={PaginatedData} perpage={12} />
        </section>
      </Layout>
      <Footer1 />
    </>
  );
};

export default Blog2;
