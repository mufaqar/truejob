"use client";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import ThemeSwitch from "../ThemeSwitch";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";
import { HiOutlineMenu } from "react-icons/hi";
import SideSection from "../side-section/side-section";
import SubMenu from "./subMenu";
import Route from "./route";
import { SlArrowDown } from "react-icons/sl";

const Header1 = () => {
  const {
    searchOpen,
    setSearchOpen,
    isMobile,
    setIsMobile,
    setOpenSide,
    openSide,
  } = useContext(SettingsContext);

  const [scrollTop, setScrollTop] = useState<any>(0);
  const [headerClr, setHeaderClr] = useState(false);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= "10" ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <header
        className={`right-0 left-0 top-0 shadow-md max-h-[64px] fixed w-full z-50 ${
          headerClr ? "bg-black" : "bg-black/40"
        }`}
      >
        <div className="container mx-auto flex py-2 justify-between items-center px-4 md:px-10">
          <Logo />
          <div className="flex text-white">
            <ul
              className={`gap-7 mr-4 md:items-center w-full ${
                isMobile
                  ? "absolute top-[52px] flex flex-col gap-6 p-10 left-0 right-0 bg-black dark:bg-light-gray w-full"
                  : "hidden md:flex"
              }`}
            >
              <li className="group relative">
                <div className="flex items-center gap-2">
                  <Link href="#" className="uppercase text-white">
                    Home
                  </Link>
                  <SlArrowDown />
                </div>
                <SubMenu>
                  <Route to="/home/home1">home 1</Route>
                  <Route to="/home/home2">home 2</Route>
                </SubMenu>
              </li>
              <li className="group relative">
                <div className="flex items-center gap-2">
                  <Link href="#" className="uppercase text-white">
                    Pages
                  </Link>
                  <SlArrowDown />
                </div>
                <SubMenu>
                  <Route to="/blogs">Blogs 1</Route>
                  <Route to="/blogs2">Blogs 2</Route>
                  <Route to="/blogs/single-post">Single Post 1</Route>
                  <Route to="/blogs2/single-post">Single Post 2</Route>
                  <Route to="/category/Electronics">Filter Posts</Route>
                  <Route to="/404">404</Route>
                </SubMenu>
              </li>
              <li>
                <Link href="/about-us" className="uppercase text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Categories" className="uppercase text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="uppercase text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
            <BiSearch
              size={24}
              className="mx-5 mt-1 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
            <HiOutlineMenu
              size={24}
              className="mr-5 mt-1 cursor-pointer"
              onClick={() => setOpenSide(!openSide)}
            />
            <ThemeSwitch />
            <div
              className="ml-3 md:hidden"
              onClick={() => setIsMobile(!isMobile)}
            >
              {!isMobile ? (
                <BiMenuAltRight size={32} />
              ) : (
                <RxCross1 size={32} />
              )}
            </div>
          </div>
        </div>
      </header>
      {searchOpen && (
        <div className="fixed top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 ">
          <SearchBox />
        </div>
      )}
      <section
        className={`transition-all duration-300 fixed top-0 bottom-0 p-8 bg-[#090909] z-50 w-full md:w-[350px] ease-in-out ${
          openSide ? "right-0" : "-right-[100%]"
        }`}
      >
        <SideSection />
      </section>
    </>
  );
};

export default Header1;

const SearchBox = () => {
  const { searchValue, setSearchValue, setSearchOpen } =
    useContext(SettingsContext);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <section className="flex justify-center items-center mt-28">
      <div className="flex items-center md:w-[600px] relative bg-dark-gray rounded-full overflow-hidden">
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleChange={handleChange}
          className="md:w-[600px] p-5 bg-transparent text-pure"
        />
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <BiSearch
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
          />
        </button>
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <RxCross2
            size={24}
            className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          />
        </button>
      </div>
    </section>
  );
};
