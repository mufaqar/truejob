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
import { GetServerSideProps } from 'next'
import apolloClient from '../../config/client'
import Pagination from "@/components/Pagination/Pagination";


const Blog = ({CategoryData}:any) => {

  const PostByCategory = CategoryData.posts.nodes
  const PostSelect = CategoryData.posts.nodes;

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
        
        <div className="pt-[1px] bg-border" />
        <section className="my-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
            {pData?.map((post: any, idx: number) => {
              return (
                <><PostDesign post={post} idx={idx} layout={3} key={idx} /></>
              )
              
              
            })}
          </div>
          <Pagination data={PostByCategory} PaginatedData={PaginatedData} perpage={11} />
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
