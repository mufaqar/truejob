import React from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const Footer2 = () => {
  return (
    <>
      <footer className="bg-light-gray">
        <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Top Skilled Jobs
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/about-us" className=" hover:underline">
                    Programming & Tech
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Graphics & Design
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Digital Marketing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Writing & Translation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Work From Home
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Freelancing Job
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Full time Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Part Time Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Fresh Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SCHOLARSHIPS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/category/scholarship"
                    className="hover:underline"
                  >
                    International
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/category/scholarship"
                    className="hover:underline"
                  >
                    National
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/category/scholarship"
                    className="hover:underline"
                  >
                    Scholarship for Foreigners
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/category/scholarship"
                    className="hover:underline"
                  >
                    Support Programs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Local Jobs
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className=" hover:underline">
                    Govt Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Private Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Jobs By Cities
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Jobs By Departments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Earn Money Online
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Online surveys
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    E-commerece
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Affliate Marketing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Online tutoring or teaching
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center flex flex-col justify-center items-center">
            <Logo />
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
              © 2023
              <Link href="/" className="hover:underline">
                TrueJob
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
