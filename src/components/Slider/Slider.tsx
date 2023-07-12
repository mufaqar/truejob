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
      <section className="md:h-[420px] relative overflow-hidden blogs container mx-auto md:rounded-3xl md:mt-20">
      <Slider ref={slider} {...settings}>
        {data.map((item: any, idx: number) => {
           const {date, featuredImage, slug, title, comments, categories , postFields} = item
           console.log(item)
          return (
            <div className={`md:h-[420px] relative 2xl:h-[420px] `} key={idx}>
               <Link href={slug}>
              <img
                 src={postFields?.banner?.mediaItemUrl.length > 10 ? postFields?.banner?.mediaItemUrl : featuredImage?.node?.mediaItemUrl}
                 alt={featuredImage?.node?.altText}
                className="h-full w-full "
              />
              </Link>
              <div className="bg-black/10 absolute inset-0" />           
              <div className="absolute  max-w-[850px] px-16 md:px-0 p-4 w-full top-1/2 flex flex-col justify-center right-1/2 items-center transform -translate-y-1/2 translate-x-1/2 bottom-0">
               </div>
              <Link className="bg-yellow text-white hidden md:block py-[3px] px-3 rounded-xl  absolute  bottom-[45px] transform " href={slug}>
               {title} </Link>

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
