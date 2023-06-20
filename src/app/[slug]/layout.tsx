import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import { SinglePost } from "@/config/queries";
import { useQuery } from "@apollo/client";
import React from "react";

const q = `query SinglePost($slug: ID!) {
  post(id: $slug, idType: URI) {
    excerpt
    featuredImage {
      node {
        mediaItemUrl
        altText
      }
    }
    title
    slug
  }
}`;

export async function generateMetadata({ params }: any) {
  console.log("generateMetadata: props", params);
  const url = "https://truejob.designercrunch.net/graphql";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: q,
      variables: {
        slug: params?.slug,
      },
    }),
  };
  const data = await fetch(url, options).then((response) => response.json());

  return {
    title: data.data.post.title,
  };
}

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
