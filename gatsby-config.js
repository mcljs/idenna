module.exports = {
  siteMetadata: {
    title: `Instituto Autónomo Consejo Nacional de Derechos de Niños, Niñas y Adolescentes`,
    description: `Instituto Autónomo Consejo Nacional de Derechos de Niños, Niñas y Adolescentes. IDENNA. Gobierno Bolivariano de Venezuela`,
    author: `@mcljs15`,
    siteUrl: 'https://mision-arbol.netlify.app'
  },
flags: {
    DEV_SSR: false,
    FAST_DEV: true
  },

  plugins: [
/*
{
  resolve: `gatsby-source-instagram-all`,
  options: {
    access_token: `IGQVJVZAHg2d2d4MzdoRFlVUEdTRVRaSnZASakppSHJZAYlBLNUhPTDF6ak15MnNOTXpDOTlwQ0M4al9ITm0zeG9mT0RtY2pTVmNEbXpQbzhHMzAtb1FvaHRiNnF3RVE5UWwxZA3p5b0JBcTFwVlNyZAUEzNAZDZD`
  },
},
*/
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-mdx`,
`gatsby-plugin-twitter`,
 `gatsby-remark-normalize-paths`,
    `gatsby-plugin-react-helmet`,
{
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mision-arbol.netlify.app',
        sitemap: 'https://mision-arbol.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SG8RM3MQST", // Google Analytics
          "ca-pub-1521598787281144", // Google Ads / Adwords / AW
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },

{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
 {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `biblioteca`,
        path: `${__dirname}/content/biblioteca`,
      },
    },
  {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },

  {
      resolve: `gatsby-transformer-remark`,
      options: {    
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads"
            },
          },
{
          resolve: `gatsby-remark-images-contentful`,
          options: {

            maxWidth: 960,
          },
        },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },

          `gatsby-remark-lazy-load`,
          {
              resolve: `gatsby-remark-images-native-lazy-load`,
              options: {
                loading: "lazy" // "lazy" | "eager" | "auto"
              },
           },
        ],
      },
    },
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/mardown-page')
        },
        extensions: [`.mdx`],
      },
    },
{
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: "#29d",
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
'gatsby-plugin-emotion',
    `gatsby-plugin-image`,
`gatsby-plugin-styled-components`,

 //  {
//      resolve: `gatsby-plugin-typography`,
  //    options: {
 //       pathToConfigModule: `src/lib/typography`,
   //   },
 //   },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ec222c`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
