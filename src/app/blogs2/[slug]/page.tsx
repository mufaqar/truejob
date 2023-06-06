"use client";

import Layout from "@/components/Layout/Layout";
import { SideBarHeading } from "@/components/aside";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import Insta from "@/components/insta";
import PageBanner from "@/components/page-banner/banner";
import PostDesign2 from "@/components/post-design/post-design-2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaRegCommentAlt,
  FaReply,
  FaTwitter,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Slug = () => {
  return (
    <>
    <Header2/>
      <PageBanner
        title="Lorem ipsum dolor sit amet consectetur"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        image="/assets/images/Cars.jpg"
        rounded={true}
      />
      <Layout>
        <section className="lg:flex gap-10 my-10">
          <section>
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                Technology
              </h2>
            </div>
            <h2 className="text-xl md:text-2xl capitalize mt-2 font-oswald font-bold">{`Lorem ipsum dolor sit amet consectetur`}</h2>
            
            <p className="mt-8 text-text leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              repudiandae aliquid, atque veritatis, dolor, cumque dolores quo
              obcaecati harum laudantium reprehenderit temporibus numquam
              perspiciatis doloremque! Ratione reiciendis necessitatibus cumque
              ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis non sit, minus inventore nostrum, sapiente, corporis
              assumenda delectus ipsum repellat facilis omnis voluptatibus nam
              provident nihil culpa laborum alias illo.
            </p>
            <p className="mt-6 text-text leading-8 tracking-wide">
              Ratione reiciendis necessitatibus cumque ducimus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Blanditiis non sit,
              minus inventore nostrum, sapiente, corporis assumenda delectus
              ipsum repellat facilis omnis voluptatibus nam provident nihil
              culpa laborum alias illo.
            </p>
            <p className="mt-6 text-text leading-8 tracking-wide">
              Corporis assumenda delectus ipsum repellat facilis omnis
              voluptatibus nam provident nihil culpa laborum alias illo. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Accusantium
              debitis, fuga corrupti autem similique reiciendis placeat,
              inventore dolorem nemo distinctio dignissimos. Quae, aut?
              Distinctio numquam hic fuga ut, blanditiis doloremque? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              doloremque officia voluptates id dolore aspernatur! Temporibus ad
              id, non perferendis labore earum expedita sunt consequatur
              reiciendis, et corporis officia! Minus.
            </p>
            <div className="bg-light-gray flex flex-col md:flex-row justify-between p-4 mt-7 gap-3 md:gap-0 md:items-center">
              <p className="uppercase text-sm font-bold text-light-blue">
                Keep Reading
              </p>
              <div className="flex item-center gap-3 md:gap-6 flex-col md:flex-row">
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <SlCalender />
                  <span className="text-xs mt-[2px]">April 20, 2023</span>
                </div>
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <FaRegCommentAlt />
                  <span className="text-xs">4 Comments</span>
                </div>
                <ul className="flex items-center gap-4 text-dark-gray dark:text-white">
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-10 sm:flex items-center gap-6 justify-start">
              <div className="w-40">
                <Image
                  src="/assets/images/Cars.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="w-40 h-40 rounded-full"
                  style={{ minWidth: "10rem" }}
                />
              </div>
              <div>
                <h4 className="text-lg text-dark-gray dark:text-gray-200 mt-6 sm:mt-0">
                  Expert design
                </h4>
                <p className="mt-3 mb-2 text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  laudantium veritatis quae cum excepturi fugit quisquam
                  voluptatibus. Veniam inventore, necessitatibus iusto quo
                  adipisci laboriosam, fugit omnis esse nam deserunt incidunt!
                </p>
                <ul className="flex items-center gap-4 text-light-blue mt-4">
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <SideBarHeading long={true}> Related Post </SideBarHeading>
            <section className="my-12"><PostDesign2 /></section>
            <SideBarHeading long={true}> Comments </SideBarHeading>
            {
              [1,2,3].map((item,idx)=>{
                return(
                  <CommentDesign key={idx} id={idx} reply={idx === 1 && true}/>
                )
              })
            }
            
            <SideBarHeading long={true}> Comment </SideBarHeading>
            <CommentForm />
          </section>
        </section>
      </Layout>
      <Insta />
      <Footer2 />
    </>
  );
};

export default Slug;

const CommentDesign = ({ reply, id }: any) => {
  return (
    <section>
      <div className={`flex gap-5 mb-8 first:mt-10 w-full ${reply && "pl-12"}`}>
        <figure>
          <Image
            src="/assets/images/avatar.png"
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </figure>
        <div className={`border-b-[1px] w-full ${id===2 ? 'border-transparent' : 'border-border'}  pb-8`}>
          <div className="flex justify-between ">
            <div>
              <h6 className="uppercase font-poppins">MARIE John </h6>
              <p className="text-gray-400 text-sm my-2">
                January 21, 2016 01.54 am
              </p>
            </div>
            <div className="text-light-blue flex item-center gap-2 hover:text-yellow cursor-pointer">
              <FaReply size={18} />
              <span className="text-sm">Reply</span>
            </div>
          </div>
          <p className="text-sm font-light leading-6">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore.
          </p>
        </div>
      </div>
    </section>
  );
};

const CommentForm = () => {
  return (
    <form className="mt-12">
      <textarea
        className="w-full h-60 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm"
        placeholder="Message"
      ></textarea>
      <div className="mt-2 md:flex gap-4">
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Name"
        />
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Email"
        />
        <input
          type="text"
          className="p-4 bg-gray-100 dark:bg-light-gray w-full text-gray-500 mt-4 md:mt-0 focus:outline-yellow border-none text-sm"
          placeholder="Web URL"
        />
      </div>
      <input
        type="button"
        value="submit"
        className="bg-yellow uppercase text-black w-full mt-4 p-3 hover:bg-light-blue cursor-pointer"
      />
    </form>
  );
};
