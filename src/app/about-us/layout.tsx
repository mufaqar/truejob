
import Footer1 from "@/components/footer";
import Header2 from "@/components/header/header2";
import PageBanner from "@/components/page-banner/banner";
import { AboutUsSeoFields } from "@/utils/seoMeta";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  ...AboutUsSeoFields
};


export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        <Header2 />
        <PageBanner
          title="About Us"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contat.jpg"
          buttontext="By this time"
          buttonLink="#"
          rounded={true}
        />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
