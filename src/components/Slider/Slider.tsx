import React from "react";
import Slider from "react-slick";
import Button from "../ui/button";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {CgArrowLongRight} from 'react-icons/cg'

const SliderComponent = ({ data }: any) => {
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
      <section className="h-screen relative 2xl:h-[800px] blogs">
      <Slider ref={slider} {...settings}>
        {data.map((item: any, idx: number) => {
          return (
            <div className={`h-screen relative 2xl:h-[800px]`} key={idx}>
              <img
                src={item?.img}
                alt="img"
                className="h-full w-full object-cover"
              />
              <div className="bg-black/30 absolute inset-0" />
              <div className="absolute max-w-[700px] px-16 md:px-0 p-4 w-full top-1/2 flex flex-col justify-center right-1/2 items-center transform -translate-y-1/2 translate-x-1/2">
                <span className="bg-yellow text-black py-[2px] px-2 uppercase">{item?.categories}</span>
                <h1 className="text-3xl mt-4 font-poppins leading-[40px] md:leading-[50px] lg:leading-[55px] md:text-4xl lg:text-[48px] capitalize text-center text-white">
                  {item.title}
                </h1>
                <div className="uppercase text-xs text-center md:text-sm text-white items-center justify-center my-5 mb-8 font-light flex gap-4 md:gap-10">
                  <span>May 23 2016 by</span>
                  <span>ELLIOT ALDERSON</span>
                  <span>5 Comments</span>
                </div>
                <Button variants="secondary" size="medium">View More <CgArrowLongRight size={28}/></Button>
              </div>

            </div>
          );
        })}
      </Slider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-5 " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack/></button>
     <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-dark-gray active:scale-105 text-yellow text-xl p-[6px] px-5 " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
     </section>   
    </>
  );
};

export default SliderComponent;
