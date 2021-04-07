module.exports = {
  plugins: [
  
    { resolve: "gatsby-theme-event" },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
};
