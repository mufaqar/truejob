import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Logo = () => {

  return (
    <Link href="/" className="w-36 md:w-52">
      <Image src="/assets/images/logo-white.png" alt="logo" width={160} height={60} className="invert dark:invert-0 mx-auto"/>
      {/* <Image src="/assets/images/black-logo.png" alt="logo" width={150} height={60}/> */}
    </Link>
  );
};

export default Logo;
