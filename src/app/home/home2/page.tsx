"use client";

import { PostMokeData } from "@/const/post";
import React from "react";
import Slider2 from "@/components/Slider/Slider2";
import Header2 from "@/components/header/header2";
import PostDesign2 from "@/components/post-design/post-design-2";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { categoriesDate } from "@/const/categories";
import Link from "next/link";
import PostDesign from "@/components/post-design/post-design";
import VideosGallery from "@/components/videos-gallery/videos";
import Footer2 from "@/components/footer/Footer2";
import { BsArrowRight } from "react-icons/bs";

const Home2 = () => {
  return (
    <>
      <Header2 />
      <Slider2 data={PostMokeData.slice(0, 4)} />
      <div className="my-16">
        <Layout>
          <PostDesign2 />
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Top trending Categories
          </h2>
          <section className="mt-16 flex justify-center flex-wrap gap-8">
            {categoriesDate?.map((item: any, idx: number) => {
              return (
                <Link
                  href={`category/${item?.name}`}
                  className="flex flex-col group items-center"
                  key={idx}
                >
                  <figure className="overflow-hidden rounded-3xl shadow-xl border-[3px] border-light-gray">
                    <Image
                      src={`/assets/images/${item?.image}`}
                      alt={item?.name}
                      width={300}
                      height={300}
                      className=" transition-all duration-300  ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                    />
                  </figure>
                  <h4 className="text-center font-normal bg-yellow p-1 px-3 rounded-full  mt-3 capitalize text-black">
                    {item?.name}
                  </h4>
                </Link>
              );
            })}
          </section>
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Latest Articles 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {PostMokeData.slice(0, 6).map((post, idx) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            🎬 The Videos
          </h2>
          <section className="mt-20 p-4 md:p-10 bg-light-gray rounded-[40px]">
            <VideosGallery />
          </section>
          <section className="mt-20">
            <div className="grid grid-cols-1 items-center gap-10 px-10 mt-10 lg:grid-cols-2 ">
              <div className="mt-20 ">
                <h1 className="mb-10 text-5xl font-bold">
                  Join our newsletter
                </h1>
                <p className="text-xl font-medium">
                  Read and share new perspectives on just about any topic.
                  Everyone’s welcome.
                </p>
                <div className="flex items-center mt-6">
                  <h5 className="px-4 py-2 bg-yellow rounded-3xl">1</h5>
                  <p className="px-8">Get more discount</p>
                </div>
                <div className="flex items-center mt-4">
                  <h5 className="px-4 py-2 bg-light-blue rounded-3xl">2</h5>
                  <p className="px-8">Get premium magazines</p>
                </div>
                <div className="mt-10 w-72">
                  <div className="relative h-12 w-full max-w-[400px] lg:w-[400px] border border-border rounded-full">
                    <div className="absolute right-0 flex p-1 w-10 h-10 rounded-full mr-1 mt-[3px] flex-col justify-center items-center bg-black active:scale-105 text-xl dark:bg-light-gray">
                      <BsArrowRight color="white" />
                    </div>
                    <input
                      className="peer h-full rounded-3xl border-t-transparent bg-transparent p-3 pb-3.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  "
                      placeholder="Enter your email "
                    />
                  </div>
                </div>
              </div>
              <div>
                <img src="/assets/images/subscribe.webp" alt="" />
              </div>
            </div>
          </section>
        </Layout>
      </div>
      <Footer2/>
    </>
  );
};

export default Home2;
