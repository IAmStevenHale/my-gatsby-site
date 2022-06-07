module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass"]
};

plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `hse37015l8rp`,
      accessToken: `S5nGIqXX2dVJvtcWCaPRuXByAn4yh7hsAvt-KzkRoac`,
      host:`https://mygatsbysitemain04357.gatsbyjs.io/`
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `hse37015l8rp`,
      accessToken: `3Dnwrfd2nUuTx49kiwFjLqfP8MpGSugGFvGLWNNU6Bc`,
      host: `https://preview-mygatsbysitemain04357.gtsb.io/`,
    },
  },
]
