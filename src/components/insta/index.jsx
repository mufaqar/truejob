import Image from "next/image";
import React from "react";
import {IoLogoInstagram} from 'react-icons/io'

const Insta = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl uppercase text-center font-oswald">I'm on Instagram</h2>
      <p className="text-center text-text  text-gray-600">@xpertdesigner</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-10">
        {[1, 2, 3, 4, 5, 6].map((item, idx) => {
          return (
            <div className="relative group overflow-hidden" key={idx}>
              <Image
                src={`/assets/images/i${idx}.png`}
                alt="image"
                width={500}
                height={500}
                className="w-full object-cover h-[250px] transition-all duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute top-0 right-0 cursor-pointer left-0 bottom-0 bg-black/20" />
              <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 text-yellow hidden group-hover:block"><IoLogoInstagram size={46}/></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Insta;
