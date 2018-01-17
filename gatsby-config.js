module.exports = {
  siteMetadata: {
    title: 'CryptoPapers.info',
    description: 'Your source for cryptocurrency research.',
    keywords: 'cryptocurrency, ico, bitcoin, ethereum',
    og_image: 'https://cryptopapers.info/assets/og_image.jpg',
    og_title: 'CryptoPapers.info',
    og_description: 'Your source for cryptocurrency research.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/papers`,
        name: 'papers',
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112442711-1",
        anonymize: true,
      }
    },
  ],
};
