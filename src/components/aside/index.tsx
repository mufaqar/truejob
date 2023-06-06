import { SettingsContext } from "@/context/setting-context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import Input from "../controlls/input";
import {FiCalendar} from 'react-icons/fi'

interface ISidebar {
  aboutAuthor: boolean;
  social: boolean;
  newsletter: boolean;
  latestPost: any;
  latestCategories: any;
  advertisement: boolean;
}

const Aside = ({
  aboutAuthor,
  social,
  newsletter,
  latestPost,
  latestCategories,
  advertisement,
}: ISidebar) => {
  return (
    <aside className="lg:w-[27%] mt-10 md:mt-0 h-full bg-light-gray py-10">
      {aboutAuthor && <AboutAuthorSection />}
      {social && <SocialSection />}
      {newsletter && <NewsLetterSection />}
      {latestPost.length > 0 && <LatestPostSection posts={latestPost} />}
      {latestCategories && <LatestCategories posts={latestCategories} />}
      {advertisement && <Advertisement />}
    </aside>
  );
};

export default Aside;

const SocialSection = () => {
  return (
    <>
      <div className="pt-[1px] bg-border my-6 mt-10 " />
        <div className="flex text-2xl px-7 justify-between">
          <Link
            href="#"
            className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaFacebookF size={20}/>
          </Link>
          <Link
            href="#"
            className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaInstagram size={20}/>
          </Link>
          <Link
            href="#"
            className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaTwitter size={20}/>
          </Link>
          <Link
            href="#"
            className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaLinkedinIn size={20}/>
          </Link>
          <Link
            href="#"
            className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaPinterestP size={20}/>
          </Link>
        </div>
      <div className="pt-[1px] bg-border my-6 mb-16" />
    </>
  );
};

const AboutAuthorSection = () => {
  return (
    <div className="px-7">
      <SideBarHeading> About author</SideBarHeading>
      <Image
        src="/assets/images/author.jpeg"
        alt="author"
        width={600}
        height={600}
        className="w-full mt-4 object-cover h-[150px]"
      />
      <p className="text-center text-sm text-text mt-3">
        Hi! Im Marie dummy text of the printing and typesetting
      </p>
    </div>
  );
};

export const SideBarHeading = ({ children, long, className }: any) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`}>
      <div className="pt-[1px] bg-yellow w-full" />
      <h6 className={`uppercase text-sm text-center  inline-block -mt-[10px] ${long ? 'px-8 bg-yellow dark:bg-dark-gray' : 'px-2 dark:bg-light-gray bg-yellow'}`}>
        {children}
      </h6>
    </div>
  );
};

const NewsLetterSection = () => {
  const { searchValue, setSearchValue } = useContext(SettingsContext);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="px-7">
      <SideBarHeading> Subscribe Newsletter </SideBarHeading>
      <section className="bg-yellow p-4 py-6 mt-6">
        <p className="text-dark-gray mb-4 text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing.
        </p>
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleChange={handleChange}
          className="w-full p-3 bg-white text-center text-dark-gray  font-poppins font-normal"
        />
        <button className="bg-dark-gray text-white mt-4 p-3 w-full">
          Subscribe
        </button>
      </section>
    </div>
  );
};

const LatestPostSection = ({ posts }: any) => {
  return (
    <div className="mt-10 px-7">
      <SideBarHeading> latest posts </SideBarHeading>
      <div className="mt-8 flex flex-col gap-4">
        {posts.slice(0, 5).map((p: any, idx: number) => {
          return (
            <div className="flex gap-4 items-center group " key={idx}>
              <figure className="h-24 min-w-[6rem] overflow-hidden">
              <img
                src={p?.img}
                alt="feature"
                className="h-24 _img object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-200"
              />
              </figure>
              <div>
                <h2 className="uppercase  text-sm text-pure cursor-pointer group-hover:underline">
                  {p.title}
                </h2>
                <span className="text-light-blue flex item-center gap-1 mt-2 text-sm"> <FiCalendar size={17}/> <span className="-mt-[2px]">22 DECEMBER</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LatestCategories = ({ posts }: any) => {
  const categories = posts.reduce((acc: any, product: any) => {
    if (!acc.includes(product.categories)) {
      acc.push(product.categories);
    }
    return acc;
  }, []);
  return (
    <>
      <div className="mt-10 px-7">
        <SideBarHeading> latest Categories </SideBarHeading>
        <div className="mt-8 flex flex-col gap-4">
          {categories.slice(0, 7).map((p: any, idx: number) => {
            const item = posts.filter((item: any) => item.categories === p);
            return (
              <div
                className="flex gap-2 group justify-between border-b-[1px] border-border last:border-transparent pb-3 group"
                key={idx}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="p-[5px] bg-yellow group-hover:bg-light-blue" />
                  <h2 className="capitalize text-sm text-gray-400 group-hover:text-light-blue cursor-pointer ">
                    {p}
                  </h2>
                </div>
                <div className="text-sm group-hover:text-light-blue font-oswald">({item.length})</div>
              </div>
            );
          })}
        </div>
        <div className="pt-[1px] bg-border my-6 mt-8" />
      </div>
    </>
  );
};

const Advertisement = () => {
  return (
    <div className="px-7">
      <div
        className="p-5 w-full mt-12 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("/assets/images/ads.png")` }}
      >
        <h2 className="text-center text-lg font-light text-white mb-32">
        Best Selling Blog & Magazine 
        Wp Theme Of This Year
        </h2>
        <button className="uppercase bg-yellow font-oswald font-normal text-black  w-full hover:bg-black hover:text-yellow p-3">
          Purchase Now
        </button>
      </div>
    </div>
  );
};
