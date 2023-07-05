import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
  return (
    <>
      <ul className="md:flex hidden text-text uppercase gap-6">
        <Link href="https://www.facebook.com/truejobonline" className="hover:text-yellow">
          <FaFacebookF />
        </Link>
       
        <Link href="https://www.linkedin.com/company/truejobonline" className="hover:text-yellow">
          <FaLinkedinIn />
        </Link>
        
        <Link href="https://twitter.com/mufaqar" className="hover:text-yellow">
          <FaTwitter />
        </Link>
      </ul>
    </>
  );
};

export default Socials;
