import { gql } from "@apollo/client";

export const AllPosts = gql`
  query AllPosts {
    posts {
      nodes {
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
        seo {
          fullHead
        }
        title
        slug
        categories {
          nodes {
            slug
            name
          }
        }
        comments {
          nodes {
            content
          }
        }
      }
    }
  }
`;

export const AllCategories = gql`
  query AllCategories {
    categories {
      nodes {
        name
        slug
        seo {
          fullHead
        }
        description
        postCategoryFields {
          image {
            mediaItemUrl
          }
          bannerImage {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const PostsByCategory = gql`
  query PostsByCategory($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
      slug
      description
      seo {
        fullHead
        title
      }
      posts {
        nodes {
          id
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
          excerpt
          date
          slug
          title
        }
      }
      postCategoryFields {
        image {
          mediaItemUrl
        }
        bannerImage {
          mediaItemUrl
        }
      }
    }
  }
`;

export const SinglePost = gql`
  query SinglePost($slug: ID!) {
    post(
      id: $slug
      idType: URI
    ) {
      date
      excerpt
      content
      featuredImage {
        node {
          mediaItemUrl
          altText
        }
      }
      seo {
        fullHead
      }
      title
      slug
      categories {
        nodes {
          slug
          name
        }
      }
      comments {
        nodes {
          content
          date
        }
      }
      postFields {
        faqs {
          answer
          question
        }
      }
    }
  }
`;
