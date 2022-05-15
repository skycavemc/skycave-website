module.exports = {
  siteMetadata: {
    title: `SkyCave`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "-NecKRBBOmrKgSlUvp-sx-YzQu9kT3DefDSIT_M8cZ4",
        spaceId: "x3f34baq742d",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};