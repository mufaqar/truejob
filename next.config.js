/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/local-govt-jobs-data-entry-skilled',
        destination: '/job/local-govt-jobs-data-entry-skilled',
        permanent: true,
      },     
    ];
  },
  images:{
       domains:["images.pexels.com", "www.google.com", "truejob.designercrunch.net"]
  }
}

module.exports = nextConfig
