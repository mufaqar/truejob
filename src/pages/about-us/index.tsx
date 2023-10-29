import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/metas/pagesmeta";
import PageBanner from "@/components/page-banner/banner";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";

const Page = () => {
  return (
    <>

      <SeoHead title="About Us| True Jobs" url="https://www.truejob.online/about-us" description="Stay informed and inspired as TrueJob for Scholarship Opportunities, Remote Jobs, and ePaper Job Listings" keywords="about us , job ads , govt job ,private jobs" />

      <PageBanner
        title="About Us"
        subTitle="Stay informed and inspired as TrueJob for Scholarship Opportunities, Remote Jobs, and ePaper Job Listings"
        image="/assets/images/contat.jpg"

        rounded={true}
      />
      <Layout>
        <section className="grid grid-cols-1 gap-10">
          <div className="my-10">


            <p className="mt-2 font-poppins text-lg text-gray-600 dark:text-text">
              TrueJob   is a leading blog curated by Mufaqar offering valuable insights, resources, and guidance in the fields of technology, career development, and professional growth. Stay informed and inspired as TrueJob delivers high-quality content to help you navigate the ever-changing job market and enhance your skills.
            </p>
            <p className="mt-2 font-poppins text-lg text-gray-600 dark:text-text">
              Mufaqar is a seasoned developer, blogger, and the founder of TrueJob. With expertise in technology, he shares valuable insights and resources through his renowned blog. Committed to excellence, Mufaqar empowers readers with the latest industry knowledge and guidance to excel in their careers.
            </p><div className="pt-1 w-32 mt-6 bg-light-gray" />
          </div>

        </section>
      </Layout>


    </>
  );
};

export default Page;
