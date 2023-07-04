import React from 'react';
import Logo from '../Logo/Logo';

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
                  <a href="/about-us" className=" hover:underline">
                    Programming & Tech
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Graphics & Design
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Digital Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Writing & Translation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Work From Home
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Freelancing Job
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Full time Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Part Time Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Fresh Jobs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                SCHOLARSHIPS
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/category/scholarship" className="hover:underline">
                    International
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/category/scholarship" className="hover:underline">
                    National
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/category/scholarship" className="hover:underline">
                    Scholarship for Foreigners
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/category/scholarship" className="hover:underline">
                    Support Programs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Local Jobs
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Govt Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Private Jobs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Jobs By Cities
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Jobs By Departments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Earn Money Online
              </h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Online surveys
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    E-commerece
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Affliate Marketing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Online tutoring or teaching
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center flex flex-col justify-center items-center">
            <Logo />
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
              © 2023
              <a href="/" className="hover:underline">
                TrueJob
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
