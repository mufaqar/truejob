
import Head from 'next/head';

const SeoHead = ({ title, description , url , keywords , updatedTime = "2023-10-06T22:58:46+00:00" }: any) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />    
            <link rel="canonical" href={url} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="truejob.online" />
            <meta property="article:publisher" content="https://www.facebook.com/truejobonline" />
            <meta property="article:modified_time" content={updatedTime} />
            <meta property="og:image" content="https://www.truejob.online/logo.png" />
            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="55" />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mufaqar" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};

export default SeoHead;
