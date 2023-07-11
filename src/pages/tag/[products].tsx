import Layout from "@/components/Layout/Layout";
import PageBanner from "@/components/page-banner/banner";
import PostDesign from "@/components/post-design/post-design";
import Button from "@/components/ui/button";
import { PostByTags } from "@/config/queries";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";
import { Helmet } from "react-helmet";
import { capitalizedFirstLetter } from "@/utils";
import { GetStaticPaths, GetStaticProps } from "next";
import apolloClient from "@/config/client";
import Pagination from "@/components/Pagination/Pagination";


const Blog = ({TagData}:any) => {
  console.log("🚀 ~ file: [products].tsx:20 ~ Blog ~ TagData:", TagData)
  const TagPosts = TagData.posts.nodes
 
  const [pData, setPData] = useState<any>()
  const PaginatedData = (res: any) => {
    setPData(res)
  }


  return (
    <>
       <Helmet>
        <title>{capitalizedFirstLetter(TagData?.name)}</title>
      </Helmet>
      <PageBanner
        title={TagData?.name}
        image={TagData.postTagFields?.bannerImage?.mediaItemUrl}
        rounded={true}
      />
      <Layout>
      
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
                      <Link href={`blogs/${post?.title}`} className="flex justify-center">
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
          <Pagination data={TagPosts} PaginatedData={PaginatedData} perpage={11} />
        </section>
      </Layout>
  
    </>
  );
};

export default Blog;


export const getStaticProps: GetStaticProps = async (context) => {  
  const slug = context.params?.products
  const response = await apolloClient.query({
    query: PostByTags,
    variables: {
      slug
    },
  });
  

  const TagData = response.data.tag;

  return {
    props: {
      TagData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths:any = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
