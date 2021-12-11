/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Radouane Chihaby Portfolio`,
    description: `I am a web developer with industry experience in building websites and web applications. I specialize in JavaScript and have professional experience working with Node and React. I create custom website designs tailored to specific business needs. Responsive, easy to navigate, and user friendly. I conduct strategic marketing campaigns for clients and businesses towards their target audiences. Develop and implement effective search engine optimization (SEO).`,
    titleTemplate: `%s | Radouane Portfolio`,
    url: `https://temp-radouane-portfolio.netlify.app/`,
    twitterUsername: `none`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `process.env.API_URL || 'http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`job`, `project`],
        //If using single types place them in this array.
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
