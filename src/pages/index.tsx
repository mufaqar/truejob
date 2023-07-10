import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { AllCategories, AllJobs, AllPosts, PostsByCategory } from "../config/queries";
//import Slider2 from "@/components/Slider/SliderComponent";
import PostDesign2 from "@/components/post-design/post-design-2";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import PostDesign from "@/components/post-design/post-design";
import { BsArrowRight } from "react-icons/bs";
import Loader from "@/components/preLoader/loader";
import Button from "@/components/ui/button";
import Head from 'next/head';
import { Helmet } from 'react-helmet';
import SliderComponent from '@/components/Slider/Slider';
import apolloClient from '../config/client'


export default function Home({categories, allposts, scholorshipPosts, RemoteJobs, EarnMoneyOnline, LatestNews, alljobs}) {


  return (
    <>
      <Helmet>      
        <title>Discover Scholarships, Remote Jobs &amp; ePaper Listings - Find Your TrueJob Today</title>
        <meta name="description" content="Discover a wide range of scholarship opportunities, remote jobs, and ePaper job listings. Find your perfect TrueJob today and kickstart your career." />
        <meta name="robots" content="nofollow, noindex" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Discover Scholarships, Remote Jobs &amp; ePaper Listings - Find Your TrueJob Today" />
        <meta property="og:description" content="Discover a wide range of scholarship opportunities, remote jobs, and ePaper job listings. Find your perfect TrueJob today and kickstart your career." />
        <meta property="og:url" content="https://truejob.designercrunch.net/" />
        <meta property="og:site_name" content="TrueJob" />
        <meta property="og:updated_time" content="2023-07-07T11:04:23+00:00" />
        <meta property="og:image" content="https://truejob.designercrunch.net/wp-content/uploads/2023/06/Graphic-Design-jobs-2560-×-840-px-1024x336.jpg" />
        <meta property="og:image:secure_url" content="https://truejob.designercrunch.net/wp-content/uploads/2023/06/Graphic-Design-jobs-2560-×-840-px-1024x336.jpg" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="336" />
        <meta property="og:image:alt" content="truejob" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content="2023-06-05T14:56:53+00:00" />
        <meta property="article:modified_time" content="2023-07-07T11:04:23+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Scholarships, Remote Jobs &amp; ePaper Listings - Find Your TrueJob Today" />
        <meta name="twitter:description" content="Discover a wide range of scholarship opportunities, remote jobs, and ePaper job listings. Find your perfect TrueJob today and kickstart your career." />
        <meta name="twitter:image" content="https://truejob.designercrunch.net/wp-content/uploads/2023/06/Graphic-Design-jobs-2560-×-840-px-1024x336.jpg" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="truejob" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="Less than a 5 minute" />        
      </Helmet>
      <SliderComponent data={allposts?.slice(0, 4)} />
      <div className="my-16">
        <Layout>
            <h1 className="text-3xl mb-16 uppercase text-center font-oswald">
                     Top trending Jobs Articles
              </h1>
          <PostDesign2 data={allposts} lgpost={4} />
            <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
              Top trending Categories
            </h2>
          <section className="mt-16 flex justify-center flex-wrap gap-8">
            {categories.map((item: any, idx: number) => {
              const { name, slug, postCategoryFields: { image } } = item
              return (
                <Link
                  href={`category/${slug}`}
                  className="flex flex-col group items-center"
                  key={idx}
                >
                  <figure className="overflow-hidden rounded-3xl shadow-xl border-[3px] border-light-gray">
                    <Image
                      src={image?.mediaItemUrl}
                      alt={name}
                      width={300}
                      height={300}
                      className=" transition-all duration-300  ease-in-out object-cover hover:scale-110 w-32 h-32 sm:w-40 sm:h-40"
                    />
                  </figure>
                  <h4 className="text-center font-normal bg-yellow p-1 px-3 rounded-full  mt-3 capitalize text-black">
                    {name}
                  </h4>
                </Link>
              );
            })}
          </section>        

          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Latest Scholarships 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {scholorshipPosts?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/scholorships" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More Scholarships </Button></Link>

          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Remote Jobs 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {RemoteJobs?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/remote-jobs" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More Remote Jobs </Button></Link>

          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Earn Money Online🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {EarnMoneyOnline?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/earn-money-online" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More About Money Online </Button></Link>


          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Newspapper Job Ads 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {alljobs?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} to="job" />
              );
            })}
          </section>
          <Link href="/category/remote-jobs" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More  Newspapper Job Ads </Button></Link>


          <section className="mt-20">
            <div className="grid grid-cols-1 items-center gap-10 px-10 mt-10 lg:grid-cols-2 ">
              <div className="mt-20 ">
                <h1 className="mb-10 text-5xl font-bold">
                  Join our newsletter
                </h1>
                <p className="text-xl font-medium">
                Explore and Exchange Diverse Perspectives on a Wide Range of Topics. Embrace an Inclusive Community for Thoughtful Discussions.
                </p>
                <div className="flex items-center mt-6">
                  <h5 className="px-4 py-2 bg-yellow rounded-3xl">1</h5>
                  <p className="px-8">Get more Jobs Ideas</p>
                </div>
                <div className="flex items-center mt-4">
                  <h5 className="px-4 py-2 bg-light-blue rounded-3xl">2</h5>
                  <p className="px-8">Access Valuable Tips for Enhancing Your Skill Set</p>
                </div>
                <div className="mt-10 w-72">
                  <div className="relative h-12 w-full max-w-[400px] lg:w-[400px] border border-border rounded-full">
                    <div className="absolute right-0 flex p-1 w-10 h-10 rounded-full mr-1 mt-[3px] flex-col justify-center items-center bg-black active:scale-105 text-xl dark:bg-light-gray">
                      <BsArrowRight color="white" />
                    </div>
                    <input
                      className="peer h-full rounded-3xl border-t-transparent bg-transparent p-3 pb-3.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  "
                      placeholder="Enter your email "
                    />
                  </div>
                </div>
              </div>
              <div>
                <img src="/assets/images/subscribe.webp" alt="" />
              </div>
            </div>
          </section>
        </Layout>
      </div>

    </>
  )
}




export async function getStaticProps() {
  const response = await apolloClient.query({
    query: AllCategories,
  });
  const jobsRes = await apolloClient.query({
    query: AllJobs,
  });
  const postsResponse = await apolloClient.query({
    query: AllPosts,
  });
  const scholorshipResponse = await apolloClient.query({
    query: PostsByCategory,
    variables: {
      slug: 'scholarships',
    },
  });
  const RemoteJobsRes = await apolloClient.query({
    query: PostsByCategory,
    variables: {
      slug: 'remote-jobs',
    },
  });
  const EarnMoneyOnlineRes = await apolloClient.query({
    query: PostsByCategory,
    variables: {
      slug: 'earn-money-online',
    },
  });
  const LatestNewsRes = await apolloClient.query({
    query: PostsByCategory,
    variables: {
      slug: 'latest-news',
    },
  });
  const categories = response.data.categories.nodes;
  const alljobs = jobsRes.data?.jobs.nodes;
  const allposts = postsResponse.data.posts.nodes;
  const scholorshipPosts = scholorshipResponse?.data?.category?.posts?.nodes;
  const RemoteJobs = RemoteJobsRes?.data?.category?.posts?.nodes;
  const EarnMoneyOnline = EarnMoneyOnlineRes?.data?.category?.posts?.nodes;
  const LatestNews = LatestNewsRes?.data?.category?.posts?.nodes;
  return {
    props: {
      categories,
      allposts,
      scholorshipPosts,
      RemoteJobs,
      EarnMoneyOnline,
      LatestNews,
      alljobs
    },
  };
}