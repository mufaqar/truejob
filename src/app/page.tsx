

import { Metadata } from "next";
import Home1 from "./home/page";
import { HomeSeoFields } from "@/utils/seoMeta";

export const metadata: Metadata = {
  ...HomeSeoFields
};

export default function Home() {
  return (
    <>
      <Home1 />
      
    </>
  );
}
