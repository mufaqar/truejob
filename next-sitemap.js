const fs = require("fs");
const { ApolloClient, InMemoryCache, gql } = require("@apollo/client")

const BACKEND_SITE_URL = "https://truejob.designercrunch.net"
const FRONTEND_URI = "https://www.truejob.online"

const client = new ApolloClient({
  uri: `${BACKEND_SITE_URL}/graphql`,
  cache: new InMemoryCache(),
});

// generate current data and time to given formate that required in sitemap 
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;


// generating sitemap here 
async function generateSitemap() {
  // Queries
  const ALL_JOBS = gql`
  query jobs {
    jobs(first: 100, where: {orderby: {field: DATE, order: ASC}}) {
      nodes {
        slug
        date
        modifiedGmt
        modified
      }
    }
  }`;
  const ALL_CATEGORIES = gql`
  query categories {
    categories(first: 100) {
      nodes {
        slug
        name
      }
    }
  }`;
  const ALL_POSTS= gql`
  query posts {
    posts(first: 100) {
      nodes {
        slug
        title
      }
    }
  }`;

  const jobsResponse = await client.query({
    query: ALL_JOBS,
  });
  const categoriesResponse = await client.query({
    query: ALL_CATEGORIES,
  });
  const postsResponse = await client.query({
    query: ALL_POSTS,
  });
  const jobs = jobsResponse?.data?.jobs.nodes;
  const categories = categoriesResponse?.data?.categories.nodes;
  const posts = postsResponse?.data?.posts.nodes;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${FRONTEND_URI}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/paper-jobs</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
     
      <url>
          <loc>${FRONTEND_URI}/contact-us</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>0.80</priority>
      </url>
      <url>
          <loc>${FRONTEND_URI}/about-us</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>0.80</priority>
      </url>     
      ${categories.map((item) => `<url>
          <loc>${FRONTEND_URI}/category/${item.slug}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>0.80</priority>
        </url>`).join("")}
      ${posts.map((item) => `<url>
        <loc>${FRONTEND_URI}/${item.slug}</loc>
        <lastmod>${formattedDateTime}</lastmod>
        <priority>0.80</priority>
       </url>`).join("")}
       ${jobs.map((item) => `<url>
       <loc>${FRONTEND_URI}/job/${item.slug}</loc>
       <lastmod>${item?.date || item?.modifiedGmt}+00:00</lastmod>
       <priority>0.80</priority>
     </url> `).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();










