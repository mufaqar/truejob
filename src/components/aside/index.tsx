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
import { FiCalendar } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import dateFormat from "dateformat";

interface ISidebar {
  navigaiton: any;
  social: boolean;
  newsletter: boolean;
  latestPost: any;
  tags: any;
  advertisement: boolean;
}

const Aside = ({
  navigaiton,
  social,
  newsletter,
  latestPost,
  tags,
  advertisement,
}: ISidebar) => {
  return (
    <aside className="lg:w-[30%] mt-10 md:mt-0 h-full bg-light-gray py-10">
      {navigaiton && <NavigationSection />}
      {social && <SocialSection />}
      {newsletter && <NewsLetterSection />}
      {latestPost?.length > 0 && <LatestPostSection posts={latestPost} />}
      {/* {tags?.length > 0 && <LatestCategories posts={tags} />} */}
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
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.truejob.online/"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaFacebookF size={20} />
        </Link>

        <Link
          href="https://twitter.com/intent/tweet?url=https://www.truejob.online/&text="
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaTwitter size={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.truejob.online/"
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaLinkedinIn size={20} />
        </Link>
        <Link
          href="https://pinterest.com/pin/create/button/?url=https://www.truejob.online/&media=&description="
          className="hover:text-yellow hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <FaPinterestP size={20} />
        </Link>
      </div>
      <div className="pt-[1px] bg-border my-6 mb-16" />
    </>
  );
};

const NavigationSection = () => {
  return (
    <div className="px-7">
      <SideBarHeading>Socials</SideBarHeading>
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
          Read and share new perspectives on just about any topic.
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
      <SideBarHeading> Latest Posts </SideBarHeading>
      <div className="mt-8 flex flex-col gap-4">
        {posts.slice(0, 5).map((p: any, idx: number) => {
          return (
            <Link href={`/${p?.slug}`} className="flex gap-4 items-center group " key={idx}>

              <figure className="h-24 min-w-[6rem] overflow-hidden">
                <Image
                  src={p?.featuredImage?.node?.mediaItemUrl}
                  alt={p?.featuredImage?.node?.altText}
                  className="h-24 _img object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-200"
                  width={96}
                  height={96}
                />
              </figure>
              <div>
                <h2 className="uppercase  text-sm text-pure cursor-pointer group-hover:underline">
                  {p.title}
                </h2>
                <span className="text-light-blue flex item-center gap-1 mt-2 text-sm"> <FiCalendar size={17} /> <span className="-mt-[2px]"> {dateFormat(p?.date, "mmmm d, yyyy")}</span></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const LatestCategories = ({ posts }: any) => {
  const router = useRouter()
  return (
    <>
      <div className="mt-10 px-7">
        <SideBarHeading> Tags </SideBarHeading>
        <div className="mt-8 flex gap-2 flex-wrap">
          {posts?.map((p: any, idx: number) => {
            return (
              <div
                className="flex border border-border rounded-full group justify-between text-sm hover:bg-yellow hover:border-transparent hover:text-black text-gray-400 capitalize cursor-pointer p-2 "
                key={idx}
                onClick={() => router.push(`tag/${p?.slug}`)}
              >
                {p?.name}
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
      <Link href='/win-scholarships-in-usa-in-2023' >
        <Image src="/assets/images/win-scholarships.jpg" alt="win-scholarships-in-usa-in-2023" className="mt-8" width={316} height={632} />
      </Link>
    </div>
  );
};
