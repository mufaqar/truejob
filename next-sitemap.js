const fs = require('fs');

const query = `
  query AllPosts {
    posts {
      nodes {
        date
        slug
      }
    }
  }
`;
var jobsquery = `
  query AllJobs {
     jobs {
       nodes {
         slug
         date
       }
     }
   }
`;

SITE_URI="https://truejob.online"

async function generateSitemap() {
     const response = await fetch('https://truejob.designercrunch.net/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });
        const { data } = await response.json();
  const jobresponse = await fetch('https://truejob.designercrunch.net/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ jobsquery }),
  });
  const jobsdata = await jobresponse.json();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${SITE_URI}</loc>
        <lastmod>2023-05-11T19:00:11+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URI}/contact-us</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
     </url>
     <url>
          <loc>${SITE_URI}/about-us</loc>
          <lastmod>2023-05-11T19:00:11+00:00</lastmod>
          <priority>1.00</priority>
     </url>
     ${data?.posts?.nodes.map((item) => `
        <url>
          <loc>${SITE_URI}/post/${item.slug}</loc>
          <lastmod>${item.date}</lastmod>
          <priority>0.80</priority>
        </url>`).join('')
     }
     ${jobsdata?.data?.jobs?.nodes.map((item) => `
        <url>
          <loc>${SITE_URI}/jobs/${item.slug}</loc>
          <lastmod>${item.date}</lastmod>
          <priority>0.80</priority>
        </url>`).join('')
     }
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
