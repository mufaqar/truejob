import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import { SinglePost } from "@/config/queries";
import { useQuery } from "@apollo/client";
import React from "react";

export async function generateMetadata({ params }: any) {
  console.log("generateMetadata: props", params);
  return {};
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header2 />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
