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
        <Link href="#" className="hover:text-yellow">
          <FaFacebookF />
        </Link>
        <Link href="#" className="hover:text-yellow">
          <FaInstagram />
        </Link>
        <Link href="#" className="hover:text-yellow">
          <FaLinkedinIn />
        </Link>
        <Link href="#" className="hover:text-yellow">
          <FaPinterestP />
        </Link>
        <Link href="#" className="hover:text-yellow">
          <FaDribbble />
        </Link>
        <Link href="#" className="hover:text-yellow">
          <FaTwitter />
        </Link>
      </ul>
    </>
  );
};

export default Socials;
