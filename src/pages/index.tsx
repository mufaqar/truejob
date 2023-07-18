import Image from 'next/image'
import { AllCategories, AllJobs, AllPosts, PostsByCategory } from "../config/queries";
//import Slider2 from "@/components/Slider/SliderComponent";
import PostDesign2 from "@/components/post-design/post-design-2";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import PostDesign from "@/components/post-design/post-design";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/components/ui/button";
import { Helmet } from 'react-helmet';
import SliderComponent from '@/components/Slider/Slider';
import apolloClient from '../config/client'
import { GetStaticProps } from 'next'


export default function Home({ categories, allposts, scholorshipPosts, RemoteJobs, EarnMoneyOnline, alljobs }: any) {
  return (
    <>
      <Helmet>
        <title>Discover Scholarships, Remote Jobs &amp; ePaper Listings - Find Your TrueJob Today</title>
        <meta name="description" content="Discover a wide range of scholarship opportunities, remote jobs, and ePaper job listings. Find your perfect TrueJob today and kickstart your career." />

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
          <h1 className="text-3xl -mt-8 md:mb-4 uppercase text-center font-oswald">
            Discover Scholarships, Remote Jobs &amp; ePaper Listings - Find Your TrueJob Today
          </h1>
          <p className=" md:mb-16  text-center ">TrueJob  is a valuable resource for individuals seeking the latest scholarships, profitable remote jobs, recent ePaper jobs, and the latest news. We understand the significance of education and financial obstacles, so we provide extensive scholarships to help students overcome financial barriers. Additionally, we offer a range of profitable remote job opportunities that allow individuals to work on their terms. Moreover, we keep you informed about recent ePaper jobs and provide the latest news updates, ensuring you stay up-to-date with current events. We aim to assist you in finding these valuable resources and empowering you to achieve your goals.</p>



          <h2 className="text-3xl -mt-8 md:mt-0 mb-8 md:mb-16 uppercase text-center font-oswald">
            Top trending Jobs Articles
          </h2>
          <PostDesign2 data={allposts} lgpost={4} />
          <h2 className="text-3xl mt-10 md:mt-20 uppercase text-center font-oswald">
            Top trending Categories
          </h2>
          <section className="mt-10 md:mt-16 flex justify-center flex-wrap gap-8">
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

          <h2 className="text-3xl mt-10 md:mt-20 uppercase text-center font-oswald">
            Latest Scholarships 🎈
          </h2>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
            {scholorshipPosts?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/scholorships" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More Scholarships </Button></Link>

          <h3 className="text-3xl mt-10 md:mt-20 uppercase text-center font-oswald">
            Remote Jobs 🎈
          </h3>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
            {RemoteJobs?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/remote-jobs" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More Remote Jobs </Button></Link>

          <h4 className="text-3xl mt-10 md:mt-20 uppercase text-center font-oswald">
            Earn Money Online🎈
          </h4>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
            {EarnMoneyOnline?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} />
              );
            })}
          </section>
          <Link href="/category/earn-money-online" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More About Money Online </Button></Link>


          <h5 className="text-3xl mt-10 md:mt-20 uppercase text-center font-oswald">
            Newspapper Job Ads 🎈
          </h5>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20">
            {alljobs?.slice(0, 3).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} to="job" />
              );
            })}
          </section>
          <Link href="/category/remote-jobs" className="mt-10 flex justify-center"><Button variants="primary" size="medium" rounded={true}>More  Newspapper Job Ads </Button></Link>
        </Layout>
      </div>
      <section className="mt-20 py-16 bg-dark-gray">
        <div className=" items-center gap-6 px-10 text-light-gray">
          <div className="flex flex-col justify-center items-center">
            <h6 className="mb-5 text-5xl font-bold text-center">
              Join our newsletter
            </h6>
            <p className="text-xl font-medium text-center max-w-[700px]">
              Explore and Exchange Diverse Perspectives on a Wide Range of Topics. Embrace an Inclusive Community for Thoughtful Discussions.
            </p>
            <div className="mt-5">
              <div className="relative h-12 w-full max-w-[400px] lg:w-[400px] border border-border rounded-full">
                <div className="absolute right-0 flex p-1 w-10 h-10 rounded-full mr-1 mt-[3px] flex-col justify-center items-center bg-yellow active:scale-105 text-xl dark:bg-light-gray">
                  <BsArrowRight color="white" />
                </div>
                <input
                  className="peer h-full rounded-3xl border-t-transparent bg-transparent p-3 pb-3.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50  "
                  placeholder="Enter your email "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export const getStaticProps: GetStaticProps = async () => {
  const [categoriesResponse, jobsResponse, postsResponse, scholarshipResponse, remoteJobsResponse, earnMoneyOnlineResponse] = await Promise.all([
    apolloClient.query({ query: AllCategories }),
    apolloClient.query({ query: AllJobs }),
    apolloClient.query({ query: AllPosts }),
    apolloClient.query({
      query: PostsByCategory,
      variables: {
        slug: 'scholarships',
      },
    }),
    apolloClient.query({
      query: PostsByCategory,
      variables: {
        slug: 'remote-jobs',
      },
    }),
    apolloClient.query({
      query: PostsByCategory,
      variables: {
        slug: 'earn-money-online',
      },
    }),

  ]);

  const categories = categoriesResponse.data.categories.nodes;
  const alljobs = jobsResponse.data?.jobs.nodes;
  const allposts = postsResponse.data.posts.nodes;
  const scholorshipPosts = scholarshipResponse?.data?.category?.posts?.nodes;
  const RemoteJobs = remoteJobsResponse?.data?.category?.posts?.nodes;
  const EarnMoneyOnline = earnMoneyOnlineResponse?.data?.category?.posts?.nodes;

  return {
    props: {
      categories,
      allposts,
      scholorshipPosts,
      RemoteJobs,
      EarnMoneyOnline,
      alljobs
    },
  };
}