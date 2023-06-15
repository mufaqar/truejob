import Footer1 from "@/components/footer";
import Header2 from "@/components/header/header2";
import PageBanner from "@/components/page-banner/banner";
import { BlogsSeoFields } from "@/utils/seoMeta";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  ...BlogsSeoFields,
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header2 />
        <PageBanner
          title="Blogs"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contat.jpg"
          rounded={true}
        />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}
