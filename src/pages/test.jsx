import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useEffect } from 'react'

const AllPosts = gql`
  query AllPosts {
    posts {
      nodes {
        date
        slug
      }
    }
  }
`;

const apolloClient = new ApolloClient({
     uri: "https://truejob.designercrunch.net/graphql",
     cache: new InMemoryCache(),
});
const query = gql`
     query AllPosts {
     posts {
          nodes {
               slug
          }
}`;

const Test = () => {

     useEffect(async () => {
          
          const documents = await apolloClient.fetch(query);
          console.log("🚀 ~ file: test.jsx:23 ~ useEffect ~ documents:", documents)

     })
     return (
          <div>Test</div>
     )
}

export default Test