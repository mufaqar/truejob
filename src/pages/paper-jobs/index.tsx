import { AllJobs } from "../../config/queries";
import Layout from "@/components/Layout/Layout";
import PostDesign from "@/components/post-design/post-design";
import { Helmet } from 'react-helmet';
import PageBanner from "@/components/page-banner/banner";
import { GetServerSideProps, GetStaticProps } from 'next';
import apolloClient from '@/config/client';
import Pagination from "@/components/Pagination/Pagination";
import { useState } from "react";
import PageHead from "@/components/metas/pagesmeta";


export default function PaperJobs({JobsData}:any) {

  const [pData, setPData] = useState<any>()
  const PaginatedData = (res: any) => {
    setPData(res)
  }

  return (
    <>      
      <PageHead title={`Daily Newspaper Ads for Getting Jobs | ePaper Listings | True Job`} url="https://www.truejob.online/paper-job" description="Daily Newspaper Ads for Getting Jobs. These advertisements encompass a wide range of job openings in both the private and public sectors."  />
      <PageBanner
        title=" Newspapper Job Ads | True Jobs"
        subTitle="Daily Newspaper Ads for Getting Jobs. These advertisements encompass a wide range of job openings in both the private and public sectors. "
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
            {pData?.map((post: any, idx: number) => {
              return (
                <PostDesign post={post} idx={idx} key={idx} rounded={true} to="job" />
              );
            })}
          </section>                
        </Layout>
        <Pagination data={JobsData} PaginatedData={PaginatedData} perpage={12} />
      </div>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {  
  const response = await apolloClient.query({
    query: AllJobs,
  });
  const JobsData = response.data.jobs.nodes;
  return {
    props: {
      JobsData,
    },
  };
}
