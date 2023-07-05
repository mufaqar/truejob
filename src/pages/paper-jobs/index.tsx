import Image from 'next/image'
import { useQuery } from '@apollo/client';
import { AllCategories, AllJobs, AllPosts, PostsByCategory } from "../../config/queries";
import Slider2 from "@/components/Slider/Slider2";
import PostDesign2 from "@/components/post-design/post-design-2";
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import PostDesign from "@/components/post-design/post-design";
import { BsArrowRight } from "react-icons/bs";
import Loader from "@/components/preLoader/loader";
import Button from "@/components/ui/button";
import Head from 'next/head';
import { Helmet } from 'react-helmet';
import PageBanner from "@/components/page-banner/banner";


export default function PaperJobs() {
  const { loading, error, data } = useQuery(AllPosts);
  const categoriresRes = useQuery(AllCategories);
  const scholorshipPosts = useQuery(PostsByCategory, {
    variables: {
      slug: 'scholarship',
    },
  });
  const RemoteJobs = useQuery(PostsByCategory, {
    variables: {
      slug: 'remote-jobs',
    },
  });
  const GetAllJobs = useQuery(AllJobs);
  if (loading) return <Loader />
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PageBanner
        title=" Newspapper Job Ads"
        subTitle="Daily Newspaper Ads for Getting Jobs.  These advertisements encompass a wide range of job openings in both the private and public sectors.  "
        image="/assets/images/paper-jobs.jpg"     
        rounded={true}
      />     
      <div className="my-16">
        <Layout>
          <h2 className="text-3xl mt-20 uppercase text-center font-oswald">
            Newspapper Job Ads 🎈
          </h2>
          <p className="text-xl mt-20  text-center font-oswald">Current employment opportunities in Pakistan are being published in prominent national newspapers. These advertisements encompass a wide range of job openings in both the private and public sectors. We offer a comprehensive collection of these ads, including the most recent listings as well as an extensive archive, all conveniently available in one central location.</p>
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-20">
            {GetAllJobs?.data?.jobs?.nodes.slice(0, 6).map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} to="job" />
              );
            })}
          </section>                
        </Layout>
      </div>

    </>
  )
}
