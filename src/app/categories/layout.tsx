"use client";

import Layout from "@/components/Layout/Layout";
import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header1 />
        <PageBanner
          title="Categories"
          image="/assets/images/contat.jpg"
        />
        <Layout>{children}</Layout>
        <Footer1/>
      </body>
    </html>
  );
}
