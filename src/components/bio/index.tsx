import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaBehance,
    FaRegCommentAlt,
    FaTwitter,
  } from "react-icons/fa";
  import Link from "next/link";
  import Image from "next/image";


const Bio = () => {
  return (
    <>
    <div className="w-40">
                <Image
                  src="/assets/images/mufaqar.jpg"
                  alt="Mufaqar Author"
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full"
                  style={{ minWidth: "10rem" }}
                />
              </div>
    <div>
                <h4 className="text-lg text-dark-gray dark:text-gray-200 mt-6 sm:mt-0">
                 Mufaqar
                </h4>
                <p className="mt-3 mb-2 text-gray-400">
                Mufaqar is a seasoned developer, blogger, and the founder of TrueJob. With expertise in technology, he shares valuable insights and resources through his renowned blog. Committed to excellence, Mufaqar empowers readers with the latest industry knowledge and guidance to excel in their careers.
                </p>
                <ul className="flex items-center gap-4 text-light-blue mt-4">
                  <li className="hover:text-yellow text-lg">
                    <Link href="https://www.facebook.com/mufaqar" target="_blank">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                  <Link href="https://www.twitter.com/mufaqar" target="_blank">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                  <Link href="https://www.linkedin.com/in/mufaqar" target="_blank">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="hover:text-yellow text-lg">
                    <Link href="https://www.behance.net/mufaqar">
                      <FaBehance />
                    </Link>
                  </li>
                </ul>
              </div>
      
    </>
  );
};

export default Bio;
