import Layout from "@/components/Layout/Layout";
import Aside, { SideBarHeading } from "@/components/aside";
import Insta from "@/components/insta";
import PageBanner from "@/components/page-banner/banner";
import PostDesign2 from "@/components/post-design/post-design-2";
import Loader from "@/components/preLoader/loader";
import { AllJobs, AllPosts, SingleJob, SinglePost } from "@/config/queries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaBehance,
  FaRegCommentAlt,
  FaTwitter,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import dateFormat from "dateformat";
import NotFoundPage from "../404";
import { useRouter } from "next/router";
import { Helmet } from 'react-helmet';
import { capitalizedFirstLetter } from "@/utils";
import MetaTags from "../../utils/MetaTags";
import Bio from "@/components/bio";

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query;

    var { loading, error, data }: any = useQuery(SingleJob,
      {
        variables: {
          slug: slug,
        },
      }
    );
    

  const getallPosts = useQuery(AllPosts);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.job) return <NotFoundPage />

  const metaObjects = MetaTags(data?.job?.seo.fullHead);

  const {
    title,
    featuredImage,
    excerpt,
    date,
    comments,
    categories,
    postFields,
    content,
    tags,
    seo
  } = data?.job


  return (
    <>
      <Helmet>
        <title>{capitalizedFirstLetter(title)}</title>
        {metaObjects.map((metaObject: any, index: number) => (
          <meta {...metaObject} key={index} />
        ))}
      </Helmet>

      <PageBanner
        image={featuredImage?.node?.mediaItemUrl}
        className="mt-[82px]"
        full={true}
      />

      <Layout>
        <section className="lg:flex gap-10 my-10">
          <section className="lg:w-[70%]">
            <div className="flex items-center justify-start gap-2">
              <div className="p-[5px] bg-light-blue group-hover:bg-light-blue" />
              <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                {categories?.nodes[0]?.name}
              </h2>
            </div>
            <h1 className="text-xl md:text-4xl pt-3 text-yellow font-bold font-poppins capitalize">
              {title}
            </h1>
            <div className="pt-[1px] bg-border my-6" />
            <section className="content">
              <div
                className="mt-8 text-text leading-8 tracking-wide text-justify siglePost "
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </section>

            {postFields?.faqs?.length > 0 && <FaqsList data={postFields?.faqs} />}
            <div className="mt-8 flex gap-2 flex-wrap">
              {tags?.nodes?.map((p: any, idx: number) => {
                return (
                  <div
                    className="flex border border-border rounded-full group justify-between text-sm hover:bg-yellow hover:border-transparent hover:text-black text-gray-400 capitalize cursor-pointer p-2 "
                    key={idx}
                    onClick={() => router.push(`tag/${p?.slug}`)}
                  >
                    {p?.name}
                  </div>
                );
              })}
            </div>

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
                      <FaBehance />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-10 sm:flex items-center gap-6 justify-start">
             <Bio />

            </div>
            <SideBarHeading long={true}> Related Post </SideBarHeading>
            <section className="my-12">
              <PostDesign2 data={getallPosts?.data?.posts?.nodes} lgpost={2} />
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
            latestPost={getallPosts?.data?.posts?.nodes}
            tags={tags?.nodes}
            advertisement={true}
          />
        </section>
      </Layout>
  

    </>
  );
};

export default Slug;

const CommentDesign = ({ reply, id, item, length }: any) => {
  return (
    <section>
      <div
        className={`flex gap-5 mb-8 first:mt-10 w-full ${id % 2 === 1 && "pl-12"
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
          className={`border-b-[1px] w-full ${length === id + 1 ? "border-transparent" : "border-border"
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
      {data?.map((faq: any, idx: number) => {
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