import { SettingsContext } from "@/context/setting-context";
import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../Logo/Logo";
import Socials from "../ui/socials";
import { AiOutlinePhone } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";

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
        <Logo />
      </div>
      <p className="text-text mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <ul className="mt-6 font-poppins uppercase mb-6">
        <li className="flex items-center gap-1 text-text">
          <span>
            <AiOutlinePhone size={25} />
          </span>
          +123 456 7890
        </li>
        <li className="flex items-center gap-1 text-text mt-1">
          <span>
            <BsEnvelopeAt size={20} />
          </span>
          info@email.com
        </li>
      </ul>
      <div>
        <Socials />
      </div>
    </div>
  );
};

export default SideSection;
