module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        typeName:`Json`,
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}