
import Footer1 from "@/components/footer";
import Header2 from "@/components/header/header2";
import Insta from "@/components/insta";
import Main1 from "@/components/main/main1";
import { Metadata } from "next";
import React from "react";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header2 />
        <Main1 />
        {children}
        <Insta />
        <Footer1 />
      </body>
    </html>
  );
}
