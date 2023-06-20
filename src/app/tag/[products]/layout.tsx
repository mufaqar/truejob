import Footer2 from "@/components/footer/Footer2";
import Header2 from "@/components/header/header2";
import React from "react";

const q = `
  query PostByTags($slug: ID!) {
  tag(id: $slug, idType: SLUG) {
    name
  }
}
`;

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
        slug: params?.products,
      },
    }),
  };
  const data = await fetch(url, options).then((response) => response.json());
  return {
    title: data.data.tag.name,
  };
}

export default function CategoryLayout({
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
