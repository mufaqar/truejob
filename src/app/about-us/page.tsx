import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import React from "react";
import { FiDivide } from "react-icons/fi";

const Page = () => {
  return (
    <>
      <Layout>
        <section className="grid grid-cols-1 md:grid-cols-2 my-24 gap-10">
          <div className="lg:mt-24">
            <span className="text-light-blue uppercase">Category</span>
            <h2 className="text-3xl md:text-5xl md:leading-[60px] max-w-[500px] font-poppins font-light mt-5 capitalize">
              Optimize everything you want
            </h2>
            <p className="mt-2 font-poppins text-lg text-gray-600 dark:text-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              autem. Quibusdam quas velit quaerat! Sed laborum accusamus maiores
              repudiandae, temporibus esse ex.
            </p>
            <div className="pt-1 w-32 mt-6 bg-light-gray" />
          </div>
          <div className="flex flex-col">
            <figure>
              <Image
                src="/assets/images/cars.jpg"
                alt="img"
                width={700}
                height={700}
                className="md:w-96 w-full object-cover float-right h-80 md:h-96"
              />
            </figure>
            <figure className="mt-[-180px] hidden lg:block">
              <Image
                src="/assets/images/cars.jpg"
                alt="img"
                width={700}
                height={700}
                className="w-96 h-60 xl:float-right xl:mr-[170px] md:h-96"
              />
            </figure>
          </div>
        </section>
      </Layout>
      <section className="bg-dark-gray dark:bg-light-gray py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 container px-4 md:px-10 mx-auto">
          <div>
            <Image
              src="/assets/images/mind.png"
              alt="icon"
              width={200}
              height={200}
              className="w-20 h-16"
            />
            <h5 className="font-medium text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-yellow" />
          </div>
          <div>
            <Image
              src="/assets/images/mind.png"
              alt="icon"
              width={200}
              height={200}
              className="w-20 h-16"
            />
            <h5 className="font-medium text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-yellow" />
          </div>
          <div>
            <Image
              src="/assets/images/mind.png"
              alt="icon"
              width={200}
              height={200}
              className="w-20 h-16"
            />
            <h5 className="font-medium text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-yellow" />
          </div>
          <div>
            <Image
              src="/assets/images/mind.png"
              alt="icon"
              width={200}
              height={200}
              className="w-20 h-16"
            />
            <h5 className="font-medium text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-yellow" />
          </div>
        </div>
      </section>
      <Layout>
        <div className="my-16 md:my-28 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Image
            src="/assets/images/i4.png"
            alt="image"
            width={400}
            height={400}
            className="w-full h-[300px] hidden lg:block object-cover"
          />
          <Image
            src="/assets/images/i5.png"
            alt="image"
            width={400}
            height={400}
            className="w-full h-[300px] object-cover"
          />
          <div className="order-2 sm:order-none">
            <h5 className="font-poppins text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam nostrum at minima cum nemo
              adipisci exercitationem debitis corporis excepturi sed?
              adipisicing elit. Officia quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-gray-200 dark:bg-light-gray" />
          </div>
          <div>
            <h5 className="font-poppins text-xl text-text mt-4">
              Creative design
            </h5>
            <p className="text-text mt-3 font-light">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam nostrum at minima cum nemo
              adipisci exercitationem debitis corporis excepturi sed?
              adipisicing elit. Officia quos libero.{" "}
            </p>
            <div className="pt-1 w-24 mt-6 bg-gray-200 dark:bg-light-gray" />
          </div>
          <Image
            src="/assets/images/i3.png"
            alt="image"
            width={400}
            height={400}
            className="w-full hidden lg:block h-[300px] object-cover"
          />
          <Image
            src="/assets/images/i2.png"
            alt="image"
            width={400}
            height={400}
            className="w-full h-[300px] object-cover"
          />
        </div>
      </Layout>
      <div className="pt-[1px] w-full mt-6 bg-border" />
      <Layout>
        <div className="my-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <img src="/assets/images/profile1.jpeg" alt="" className="hover:scale-110 transition-all duration-300 w-full h-[450px] object-cover ease-in-out"/>
              </div>
              <div className="bg-yellow p-5 text-center text-dark-gray">
                <h3 className="font-medium text-xl capitalize">mark spencer author</h3>
                <p className="mt-1 font-light text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="main">
            <div className="overflow-hidden">
                <img src="/assets/images/profile2.jpeg" alt="" className="hover:scale-110 transition-all duration-300 w-full h-[450px] object-cover ease-in-out"/>
              </div>
              <div className="bg-yellow p-5 text-center text-dark-gray">
                <h3 className="font-medium text-xl capitalize">mark spencer author</h3>
                <p className="mt-1 font-light text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

            <div className="main">
              <div className="overflow-hidden">
                <img src="/assets/images/profile3.jpeg" alt="" className="hover:scale-110 transition-all duration-300 w-full h-[450px] object-cover ease-in-out"/>
              </div>
              <div className="bg-yellow p-5 text-center text-dark-gray">
                <h3 className="font-medium text-xl capitalize">mark spencer author</h3>
                <p className="mt-1 font-light text-gray-700">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
     
    </>
  );
};

export default Page;
