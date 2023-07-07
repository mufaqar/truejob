import { SettingsContext } from "@/context/setting-context";
import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";

import Socials from "../ui/socials";
import { AiOutlinePhone } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const SideSection = () => {
  const { openSide, setOpenSide } = useContext(SettingsContext);
  return (
    <div>
      <FaTimes
        className="text-white  text-xl hover:rotate-90 transition-all cursor-pointer hover:text-yellow duration-300 ease-in-out"
        onClick={() => {
          setOpenSide(!openSide);
        }}
      />
      <div className="mt-10 sideInfo">
      <Link href="/" className="w-36 md:w-52">
      <Image src="/assets/images/Logo.png" alt="logo" width={160} height={60} className="invert dark mx-auto" />

    </Link>
      </div>
      <p className="text-text mt-6">
      TrueJob is a leading blog curated by Mufaqar, offering valuable insights, resources, and guidance in the fields of technology, career development, and professional growth. Stay informed and inspired as TrueJob delivers high-quality content to help you navigate the ever-changing job market and enhance your skills.
      </p>
      <ul className="mt-6 font-poppins  mb-6">
        <li className="flex items-center gap-1 text-text">
          <span>
            <AiOutlinePhone size={25} />
          </span>
           +92 302 6006 280
        </li>
        <li className="flex items-center gap-1 text-text mt-1">
          <span>
            <BsEnvelopeAt size={20} />
          </span>
            hello@truejob.online
        </li>
      </ul>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default SideSection;
