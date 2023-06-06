import React from "react";
import Slider from "react-slick";
import Button from "../ui/button";
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'
import {CgArrowLongRight} from 'react-icons/cg'
import Layout from "../Layout/Layout";

const SliderComponent2 = ({ data }: any) => {
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
      
      <section className=" mt-10 md:mt-36 container overflow-hidden px-4 h-[400px] md:px-10 mx-auto relative md:h-[600px] blogs">
        <div className="rounded-[60px] overflow-hidden ">
        <Slider ref={slider} {...settings}>
        {data.map((item: any, idx: number) => {
          return (
            <div className={`relative h-[400px] md:h-[600px] rounded-[60px] overflow-hidden `} key={idx}>
              <img
                src={item?.img}
                alt="img"
                className="h-full w-full object-cover"
              />
              <div className="bg-black/40 absolute inset-0" />
              <div className="absolute max-w-[700px] p-4 w-full top-1/2 flex px-16  md:px-0 flex-col justify-start right-1/2 items-start transform -translate-y-1/2 translate-x-1/2">
                <span className="bg-yellow text-black py-1 px-3 rounded-2xl uppercase">{item?.categories}</span>
                <h1 className="text-3xl mt-4 font-serif leading-[40px] md:leading-[50px] lg:leading-[55px] md:text-4xl lg:text-[48px] capitalize text-left text-white">
                  {item.title}
                </h1>
                <div className="uppercase text-xs text-center md:text-sm text-white items-center justify-center my-5 mb-8 font-light flex gap-4 md:gap-10">
                  <span>May 23 2016 by</span>
                  <span>ELLIOT ALDERSON</span>
                  <span>5 Comments</span>
                </div>
                <Button variants="outlined" size="medium" rounded={true}>View More <CgArrowLongRight size={28}/></Button>
              </div>

            </div>
          );
        })}
      </Slider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickPrev()}><IoIosArrowBack/></button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow active:scale-105 text-black text-3xl p-2 md:p-4 rounded-full " onClick={() => slider?.current?.slickNext()}><IoIosArrowForward /></button>
        </div>
     </section>
      
    </>
  );
};

export default SliderComponent2;
