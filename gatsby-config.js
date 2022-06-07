module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `hse37015l8rp`,
        accessToken: `3Dnwrfd2nUuTx49kiwFjLqfP8MpGSugGFvGLWNNU6Bc`,
        host: `preview.contentful.com`,
      },
    },
    "gatsby-plugin-image"
  ]
};


