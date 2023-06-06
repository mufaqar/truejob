"use client";

import Layout from '@/components/Layout/Layout';
import Aside from '@/components/aside';
import Footer1 from '@/components/footer';
import Header1 from '@/components/header/header1';
import Insta from '@/components/insta';
import Main1 from '@/components/main/main1';
import PostDesign from '@/components/post-design/post-design';
import { PostMokeData } from '@/const/post';
import React from 'react'

const Home1 = () => {
  return (
    <>
    <Header1 />
      <Main1 />
      <Layout>
      <section className="lg:flex gap-10 my-10 md:my-20 md:mt-28">
        <section className="lg:w-[73%]">
          <div className="grid gap-6 md:grid-cols-2">
            {PostMokeData.slice(3, 7).map((post, idx) => {
              return <PostDesign post={post} idx={idx} key={idx} />;
            })}
          </div>
          <div className="pt-[1px] bg-border my-16" />
          <div className="flex gap-6 flex-col">
            {PostMokeData.slice(7, 9).map((post, idx) => {
              return <PostDesign post={post} idx={idx} layout={2} key={idx} />;
            })}
          </div>
          <div className="pt-[1px] bg-border my-16" />
          <div className="grid gap-6 md:grid-cols-3">
            {PostMokeData.slice(9, 12).map((post, idx) => {
              return <PostDesign post={post} idx={idx} home={true} layout={3} key={idx} />;
            })}
          </div>
        </section>

        <Aside
          aboutAuthor={true}
          social={true}
          newsletter={true}
          latestPost={PostMokeData}
          latestCategories={PostMokeData}
          advertisement={true}
        />
      </section>
      </Layout> 
      <Insta/>
      <Footer1/>
    </>
  )
}

export default Home1