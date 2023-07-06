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
      <section className="h-[420px] relative overflow-hidden blogs container mx-auto rounded-3xl mt-20">
      <Slider ref={slider} {...settings}>
        {data.map((item: any, idx: number) => {
           const {date, featuredImage, slug, title, comments, categories , postFields} = item
           console.log(item)
          return (
            <div className={`h-[420px] relative 2xl:h-[800px] `} key={idx}>
               <Link className="" href={slug}>
              <img
                 src={postFields?.banner?.mediaItemUrl.length > 10 ? postFields?.banner?.mediaItemUrl : featuredImage?.node?.mediaItemUrl}
                 alt={featuredImage?.node?.altText}
                className="h-full w-full object-cover"
              />
              </Link>
              <div className="bg-black/10 absolute inset-0" />           
              <div className="absolute max-w-[700px] px-16 md:px-0 p-4 w-full top-1/2 flex flex-col justify-center right-1/2 items-center transform -translate-y-1/2 translate-x-1/2">
               </div>
              <Link className="bg-yellow text-white py-[2px] px-6 rounded-2xl uppercase absolute left-1/2 bottom-20 transform -translate-x-1/2" href={slug}>
               Read More </Link>

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
