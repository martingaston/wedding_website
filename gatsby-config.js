module.exports = {
  siteMetadata: {
    title: "Jessi &amp; Martin Get Married"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jessi & Martin Get Married",
        short_name: "Jessi & Martin",
        start_url: "/",
        background_color: "#bfe8e3",
        theme_color: "#bfe8e3",
        display: "standalone",
        icon: "src/images/capecod.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
