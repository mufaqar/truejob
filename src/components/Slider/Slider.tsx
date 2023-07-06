import React from "react";
import Slider from "react-slick";
import Button from "../ui/button";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {CgArrowLongRight} from 'react-icons/cg'
import dateFormat from "dateformat";
import Link from "next/link";


const SliderComponent = ({ data }: any) => {
  console.log('data', data);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = React.useRef<Slider>(null);


  return (
    <>
      <section className="h-[500px] relative overflow-hidden 2xl:h-[800px] blogs container mx-auto rounded-3xl mt-20">
      <Slider ref={slider} {...settings}>
        {data.map((item: any, idx: number) => {
           const {date, featuredImage, slug, title, comments, categories} = item
          return (
            <div className={`h-[500px] relative 2xl:h-[800px] `} key={idx}>
              <img
                 src={featuredImage?.node?.mediaItemUrl}
                 alt={featuredImage?.node?.altText}
                className="h-full w-full object-cover"
              />
              <div className="bg-black/30 absolute inset-0" />
              <div className="absolute max-w-[700px] px-16 md:px-0 p-4 w-full top-1/2 flex flex-col justify-center right-1/2 items-center transform -translate-y-1/2 translate-x-1/2">
                <span className="bg-yellow text-black py-[2px] px-4 rounded-2xl uppercase">{categories?.nodes[0]?.name}</span>
                <h1 className="text-3xl mt-4 font-poppins leading-[40px] md:leading-[50px] lg:leading-[55px] md:text-4xl lg:text-[48px] capitalize text-center text-white">
                  {item.title}
                </h1>
                <div className="uppercase text-xs text-center md:text-sm text-white items-center justify-center my-5 mb-8 font-light flex gap-4 md:gap-10">
                  <span>{dateFormat(date, "mmmm d, yyyy")} by</span>
                  <span>Mufqar Islam</span>
                  <span>{comments.nodes?.length} Comments</span>
                </div>
                <Link href={slug}>
                <Button variants="secondary" size="medium">View More <CgArrowLongRight size={28}/></Button></Link>
              </div>

            </div>
          );
        })}
      </Slider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack/></button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
     </section>   
    </>
  );
};

export default SliderComponent;
