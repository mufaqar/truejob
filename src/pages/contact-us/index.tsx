import Layout from "@/components/Layout/Layout";
import Insta from "@/components/insta";
import GoogleMap from "@/components/map/googleMap";
import SeoHead from "@/components/metas/pagesmeta";
import PageBanner from "@/components/page-banner/banner";
import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <>

      <SeoHead title="Contact Us | True Jobs" url="https://www.truejob.online/contact-us" description="Stay informed and inspired as TrueJob delivers high-quality content to help you navigate the ever-changing job market and enhance your skills." keywords="contact us , job ads , govt job ,private jobs" />
      <PageBanner
        title="Contact Us"
        subTitle="Connect with TrueJob for Scholarship Opportunities, Remote Jobs, and ePaper Job Listings"
        image="/assets/images/contactus.jpg"

        rounded={true}
      />
      <Layout>
        <form className="mt-12">
          <div className="mt-2 mb-5 md:flex gap-4">
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
          <textarea
            className="w-full h-60 mb-4 bg-gray-100 dark:bg-light-gray text-gray-500 p-4 focus:outline-yellow text-sm"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-center items-center">
            <Button variants="primary" size="large">
              Send now
            </Button>
          </div>
        </form>
        <section className="grid md:grid-cols-3 my-32">
          <div className="flex flex-col text-gray-500 gap-1 items-center">
            <Image
              src="/assets/svg/chat.svg"
              alt="icon"
              width={80}
              height={80}
            />
            <h4 className="text-xl mt-6 text-dark-gray">Say Hello</h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <p>Telephone: 302.6006.280</p>

            <p>hello@truejob.online</p>
          </div>
          <div className="flex flex-col text-gray-500 gap-1 items-center">
            <Image
              src="/assets/svg/location.svg"
              alt="icon"
              width={80}
              height={80}
            />
            <h4 className="text-xl mt-6 text-dark-gray">Location</h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <p className="max-w-[250px] text-center">
              Suit 134 B AHS Multan Road Lahore
            </p>
          </div>
          <div className="flex flex-col text-gray-500  gap-1 items-center">
            <Image
              src="/assets/svg/briefcase.svg"
              alt="icon"
              width={80}
              height={80}
            />
            <h4 className="text-xl mt-6 text-dark-gray">Career</h4>
            <div className="p-[2px] w-32 bg-gray-100 my-5" />
            <p className="max-w-[250px] text-center">
              Please check our linkedined Job page
            </p>
          </div>
        </section>

      </Layout>


    </>
  );
};

export default ContactUs;
