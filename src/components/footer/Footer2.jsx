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
              <h6 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Top Skilled Jobs
              </h6>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/you-can-get-more-web-developer-jobs"
                    className=" hover:underline"
                  >
                    Programming & Tech
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/graphic-design-jobs-as-a-freelancer"
                    className="hover:underline"
                  >
                    Graphics & Design
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/top-15-freelancing-jobs-in-2023#SEO_Consulting"
                    className="hover:underline"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/content-writing-jobs-as-a-freelancer"
                    className="hover:underline"
                  >
                    Writing & Translation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Work From Home
              </h6>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/top-15-freelancing-jobs-in-2023"
                    className="hover:underline"
                  >
                    Freelancing Job
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/paper-jobs" className="hover:underline">
                    Full time Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/category/remote-jobs"
                    className="hover:underline"
                  >
                    Part Time Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/top-15-freelancing-jobs-in-2023#SEO_Consulting"
                    className="hover:underline"
                  >
                    Fresh Jobs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                scholarships
              </h6>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/win-scholarships-in-usa-in-2023"
                    className="hover:underline"
                  >
                    Scholarships In USA
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/scholarship-in-australia"
                    className="hover:underline"
                  >
                    Scholarship In Australia
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/win-scholarships-in-france-in-2023"
                    className="hover:underline"
                  >
                    Scholarships In France
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/eligibility-criteria-for-a-scholarship"
                    className="hover:underline"
                  >
                    Criteria For Scholarships
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Local Jobs
              </h6>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/local-govt-jobs-data-entry-skilled"
                    className=" hover:underline"
                  >
                    Govt Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/paper-jobs" className="hover:underline">
                    Private Jobs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/paper-jobs" className="hover:underline">
                    Jobs By Cities
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/paper-jobs" className="hover:underline">
                    Jobs By Departments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Earn Money Online
              </h6>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Online surveys
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    E-commerece
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Affliate Marketing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/online-teaching-jobs-in-pakistan"
                    className="hover:underline"
                  >
                    Online tutoring or teaching
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center flex flex-col md:flex-row justify-between items-center">
            <Logo />
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400 md:mt-0 mt-4">
              © 2023
              <Link href="/" className="hover:underline">
                TrueJob.
              </Link>
              All Rights Reserved.
              <a href="http://mufaqar.com" target="_blank">
                Developed By Mufaqar
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
