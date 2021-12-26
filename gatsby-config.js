module.exports = {
  siteMetadata: {
    title: "Jaime &amp; Reece Get Married"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jaime & Reece Get Married",
        short_name: "Jaime & Reece",
        start_url: "/",
        background_color: "#bfe8e3",
        theme_color: "#bfe8e3",
        display: "standalone",
        icon: "src/images/fountain.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-125840021-1",
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    "gatsby-plugin-offline"
  ]
};
