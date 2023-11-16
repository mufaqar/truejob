import Layout from "@/components/Layout/Layout";
import PageBanner from "@/components/page-banner/banner";
import PostDesign from "@/components/post-design/post-design";
import Button from "@/components/ui/button";
import { GetAllPostByCategory, PostsByCategory } from "@/config/queries";
import Link from "next/link";
import dateFormat from "dateformat";
import React, { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { capitalizedFirstLetter } from "@/utils";
import { Helmet } from "react-helmet";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import apolloClient from '../../config/client'
import Pagination from "@/components/Pagination/Pagination";


const Blog = ({CategoryData}:any) => {

  const PostByCategory = CategoryData.posts.nodes
  const PostSelect = CategoryData.posts.nodes.slice(4)

  const [pData, setPData] = useState<any>()
  const PaginatedData = (res: any) => {
    setPData(res)
  }
  
  const changeRoute = (path:any) => {
    window.location.href = path
  }

  return (
    <>
      <Helmet>
        <title>{capitalizedFirstLetter(CategoryData?.name)}</title>
      </Helmet>
      <PageBanner
        title={CategoryData?.name}
        image={CategoryData?.postCategoryFields?.bannerImage?.mediaItemUrl}
        rounded={true}
      />
      <Layout>
        <section className="my-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {PostByCategory.slice(0, 4).map((item:any, idx:number) => {
              const {date, featuredImage, excerpt, title, slug} = item
              return (
                <div key={idx}>
                  <figure className="relative group overflow-hidden">
                    <img
                      src={featuredImage?.node?.mediaItemUrl}
                      alt={featuredImage?.node?.altText}
                      className="h-40 sm:h-60 group-hover:scale-110 xl:h-72 w-full object-cover transition-all duration-200 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/40 hidden group-hover:block">
                      <div className="flex flex-col justify-center items-center h-full text-yellow">
                        <AiOutlinePlusCircle
                          size={30}
                          className="group-hover:scale-110 transition-all duration ease-in-out"
                        />
                        <span className="text-sm md:text-base">View More</span>
                      </div>
                      <Link
                        href={`/${slug}`}
                        className="text-white flex gap-5 text-sm md:text-base justify-center item-center absolute bottom-2 pt-2 md:bottom-4 w-full border-t-[1px] border-gray-300 md:pt-4"
                      >
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineClockCircle />
                          </i>
                          2 .
                        </span>
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineEye className="text-lg" />
                          </i>
                          1.3k
                        </span>
                      </Link>
                    </div>
                  </figure>
                  <p className="mt-3 text-center font-poppins uppercase font-light text-gray-400">
                    {dateFormat(date, "dddd, mmmm dS, yyyy")}
                  </p>
                    <h2 className="text-center font-poppins cursor-pointer text-lg" onClick={()=>changeRoute(`/${slug}`)}>
                      {title}
                    </h2>
                </div>
              );
            })}
          </div>
        </section>
        <div className="pt-[1px] bg-border" />
        <section className="my-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {pData?.map((post: any, idx: number) => {
              if (idx === 3) {
                return (
                  <div
                    className="relative bg-light-gray bg-cover"
                    key={idx}
                    style={{ backgroundImage: `url(${post?.img})` }}
                  >
                    <div className="bg-black/40 inset-0 absolute" />
                    <div className="text-white z-10 relative p-10 text-center">
                      <h2 className="uppercase text-light-blue text-lg">
                        {post?.categories}
                      </h2>
                      <h2 className="text-2xl font-poppins capitalize mt-6">
                        {post?.title}
                      </h2>
                      <div className="text-white mb-20 flex gap-5 text-sm md:text-base justify-center item-center mt-5 pt-5 w-full border-t-[1px] border-white">
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineClockCircle />
                          </i>
                          2 .
                        </span>
                        <span className="flex items-center gap-1">
                          <i>
                            <AiOutlineEye className="text-lg" />
                          </i>
                          1.3k
                        </span>
                      </div>
                      <Link href={`/blogs/${post?.title}`} className="flex justify-center">
                        <Button variants="primary" size="medium">View More</Button>
                      </Link>
                    </div>
                  </div>
                );
              } else {
                return (
                  <PostDesign post={post} idx={idx} layout={3} key={idx} />
                );
              }
            })}
          </div>
          <Pagination data={PostSelect} PaginatedData={PaginatedData} perpage={11} />
        </section>
      </Layout>
     
    </>
  );
};

export default Blog;


export const getServerSideProps: GetServerSideProps = async (context) => {  
  const slug = context.params?.products
  const response = await apolloClient.query({
    query: GetAllPostByCategory,
    variables: {
      slug
    },
  });
  

  const CategoryData = response.data.categories.nodes[0];

  return {
    props: {
      CategoryData,
    },
  };
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths:any = [];
//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }
