require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: 'skill',
      queryParams: {
        populate: '*'
      }
    },
    {
      singularName: 'education'
    },
    {
      singularName: 'experience'
    }
  ],
  singleTypes: [
    {
      singularName: 'about',
      queryParams: {
        populate: '*'
      }
    },
    {
      singularName: 'hero'
    }
  ],
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `resume-22-front`,
  },
  plugins: [
    `gatsby-plugin-web-font-loader`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-inline-svg`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/
        }
      }
    },
  ],
};
