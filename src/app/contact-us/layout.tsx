import Footer1 from "@/components/footer";
import Header2 from "@/components/header/header2";
import PageBanner from "@/components/page-banner/banner";
import { ContactUsSeoFields } from "@/utils/seoMeta";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  ...ContactUsSeoFields
};

export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <>
        <Header2 />
        <PageBanner
          title="Contact Us"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contactus.jpg"
          buttontext="By this time"
          buttonLink="#"
          rounded={true}
        />
        {children}
        <Footer1/>
     </>
  );
}
