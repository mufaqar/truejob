import Layout from "@/components/Layout/Layout";
import Insta from "@/components/insta";
import GoogleMap from "@/components/map/googleMap";
import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
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
            <p>Telephone: 708.783.1124</p>
            <p>Fax: 113.456.0789</p>
            <p>hello@Junonia.com</p>
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
              1170 Northeast Industrial Park Road Lahore, MS 39301
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
              Steelkilt here hissed out something, inaudible to all but the
              Captain.
            </p>
          </div>
        </section>
        <GoogleMap />
      </Layout>

      <Insta />
    </>
  );
};

export default ContactUs;
