"use client";

import Layout from "@/components/Layout/Layout";
import { SideBarHeading } from "@/components/aside";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import Insta from "@/components/insta";
import PageBanner from "@/components/page-banner/banner";
import PostDesign2 from "@/components/post-design/post-design-2";
import Loader from "@/components/preLoader/loader";
import { AllPosts, SinglePost } from "@/config/queries";
import { GetWordStr } from "@/utils";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
import dateFormat from "dateformat";



const Slug = () => {


  const { slug } = useParams();
  const { loading, error, data } = useQuery(SinglePost , {
    variables: {
      slug: slug,
    },
  });

  const getallPosts = useQuery(AllPosts);

  if (loading) return <Loader/>;
  if (error) return <p>Error: {error.message}</p>;


  const {title, featuredImage:{node:{altText,mediaItemUrl}}, excerpt, date, comments, categories, content} = data?.post


  return (
    <>
    <Header2/>
      <PageBanner
        title={title}
        subTitle={GetWordStr(excerpt, 25)}
        image={mediaItemUrl}
        rounded={true}
      />
      <Layout>
        <section className="lg:flex gap-10 my-10">
          <section>
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                {categories.nodes[0].name}
              </h2>
            </div>            
            <div className="mt-8 text-text leading-8 tracking-wide siglePost" dangerouslySetInnerHTML={{
              __html: content
            }} />
              

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
            <section className="my-12"><PostDesign2 data={getallPosts?.data?.posts?.nodes}/></section>
            <SideBarHeading long={true}> Comments </SideBarHeading>
            {
              comments?.nodes?.map((item:any,idx:number)=>{
                return(
                  <CommentDesign key={idx} id={idx} item={item} length={comments?.nodes.length}/>
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

const CommentDesign = ({ reply, id, item, length }: any) => {
  return (
    <section>
      <div className={`flex gap-5 mb-8 first:mt-10 w-full ${id%2 === 1 && "pl-12"}`}>
        <figure>
          <Image
            src="/assets/images/avatar.png"
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </figure>
        <div className={`border-b-[1px] w-full ${length === id+1 ? 'border-transparent' : 'border-border'}  pb-8`}>
          <div className="flex justify-between ">
            <div>
              <h6 className="uppercase font-poppins">MARIE John </h6>
              <p className="text-gray-400 text-sm my-2">
                {dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
              </p>
            </div>
          </div>
          <div className="text-sm font-light leading-6" dangerouslySetInnerHTML={{
              __html: item?.content
            }}/>
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