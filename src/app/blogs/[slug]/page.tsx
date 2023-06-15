"use client";

import Layout from "@/components/Layout/Layout";
import Aside, { SideBarHeading } from "@/components/aside";
import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import Insta from "@/components/insta";
import PageBanner from "@/components/page-banner/banner";
import PostDesign2 from "@/components/post-design/post-design-2";
import Loader from "@/components/preLoader/loader";
import { AllPosts, SinglePost } from "@/config/queries";
import { GetWordStr } from "@/utils";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
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
import { PostMokeData } from "@/const/post";

const Slug = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(SinglePost, {
    variables: {
      slug: slug,
    },
  });

  const getallPosts = useQuery(AllPosts);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  const {
    title,
    featuredImage: {
      node: { altText, mediaItemUrl },
    },
    excerpt,
    date,
    comments,
    categories,
    postFields: { faqs },
    content,
    tags
  } = data?.post;

  const CREATE_COMMENT_MUTATION = gql`
    mutation CreateComment($author: String!, $content: String!, $postId: Int!) {
      createComment(
        input: { author: $author, content: $content, postId: $postId }
      ) {
        id
        author
        content
        postId
      }
    }
  `;

  
  return (
    <>
      <PageBanner
        title={title}
        subTitle={GetWordStr(excerpt, 25)}
        image={mediaItemUrl}
        rounded={true}
      />
      <Layout>
        <section className="lg:flex gap-10 my-10">
          <section className="lg:w-[70%]">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                {categories.nodes[0].name}
              </h2>
            </div>
            <section className="content">
            <div
              className="mt-8 text-text leading-8 tracking-wide siglePost "
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
            </section>
            
            {faqs?.length > 0 && <FaqsList data={faqs} />}

            <div className="bg-light-gray flex flex-col md:flex-row justify-between p-4 mt-7 gap-3 md:gap-0 md:items-center">
              <p className="uppercase text-sm font-bold text-light-blue">
                Keep Reading
              </p>
              <div className="flex item-center gap-3 md:gap-6 flex-col md:flex-row">
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <SlCalender />
                  <span className="text-xs mt-[2px]">
                    {dateFormat(date, " mmmm dS, yyyy")}
                  </span>
                </div>
                <div className="text-gray-400 text-lg flex item-center gap-2">
                  <FaRegCommentAlt />
                  <span className="text-xs">
                    {comments?.nodes.length} Comments
                  </span>
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
            <section className="my-12">
              <PostDesign2 data={getallPosts?.data?.posts?.nodes} />
            </section>
            <SideBarHeading long={true}> Comments </SideBarHeading>
            {comments?.nodes?.map((item: any, idx: number) => {
              return (
                <CommentDesign
                  key={idx}
                  id={idx}
                  item={item}
                  length={comments?.nodes.length}
                />
              );
            })}

            <SideBarHeading long={true}> Comment </SideBarHeading>
            <CommentForm />
          </section>
          <Aside
            navigaiton={true}
            social={true}
            newsletter={true}
            latestPost={PostMokeData}
            tags={tags?.nodes}
            advertisement={true}
          />
        </section>
      </Layout>
      <Insta />
     
    </>
  );
};

export default Slug;

const CommentDesign = ({ reply, id, item, length }: any) => {
  return (
    <section>
      <div
        className={`flex gap-5 mb-8 first:mt-10 w-full ${
          id % 2 === 1 && "pl-12"
        }`}
      >
        <figure>
          <Image
            src="/assets/images/avatar.png"
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          />
        </figure>
        <div
          className={`border-b-[1px] w-full ${
            length === id + 1 ? "border-transparent" : "border-border"
          }  pb-8`}
        >
          <div className="flex justify-between ">
            <div>
              <h6 className="uppercase font-poppins">MARIE John </h6>
              <p className="text-gray-400 text-sm my-2">
                {dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
              </p>
            </div>
          </div>
          <div
            className="text-sm font-light leading-6"
            dangerouslySetInnerHTML={{
              __html: item?.content,
            }}
          />
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

const FaqsList = ({ data }: any) => {
  const [openFaq, setOpenFaq] = useState(null);
  const handleFaq = (idx: any) => {
    if (idx === openFaq) return setOpenFaq(null);
    setOpenFaq(idx);
  };

  return (
    <>
      {data?.map((faq:any, idx:number) => {
        return (
          <div key={idx} className="border mb-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 ${openFaq === idx && 'bg-light-gray rounded-tr-xl rounded-tl-xl'}`}
                onClick={() => handleFaq(idx)}
              >
                <span>{faq?.question}</span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className={openFaq === idx ? 'block' : 'hidden'}
            >
              <div className="p-5">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {faq?.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
