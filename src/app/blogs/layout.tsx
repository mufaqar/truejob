import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
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
    <>
        <Header2 />
        {children}
        <Footer2 />
        </>
  );
}
