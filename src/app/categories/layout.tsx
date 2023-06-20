
import Layout from "@/components/Layout/Layout";
import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import { CategoriesSeoFields } from "@/utils/seoMeta";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  ...CategoriesSeoFields
};

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="Categories"
          image="/assets/images/contat.jpg"
        />
        <Layout>{children}</Layout>
        <Footer1/>
        </>
  );
}
