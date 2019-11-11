module.exports = {
  siteMetadata: {
    title: `Moncef AOUDIA`,
    author: {
      name: "Moncef AOUDIA",
      image: "/img/me.png",
      biography: "Passionate developer, open source contributor @Zenika.",
    },
    // for a list of supported networks take a look at https://jaketrent.github.io/react-social-icons/
    networks: [
      "https://twitter.com/aoudiamoncef",
      "https://github.com/aoudiamoncef",
      "https://fr.linkedin.com/in/moncef-aoudia-7723b311b",
      "mailto:mf.aoudia@gmail.com",
    ],
    about: 'Passionate developer, open source contributor @Zenika',
  },
  plugins: [
    `gatsby-plugin-tslint`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "aoudia-moncef-website",
        short_name: "Moncef AOUDIA",
        start_url: "/",
        background_color: "#eeeeee",
        theme_color: "#B32237",
        display: "standalone",
        icon: "static/img/me.png",
        include_favicon: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        // Don't cache-bust JS or CSS files, and anything in the static directory,
        // since these files have unique URLs and their contents will never change
        dontCacheBustUrlsMatching: /(\.js$|\.css$|static\/)/,
        runtimeCaching: [{
            // Use networkFirst
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: `networkFirst`,
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme: {
          primaryColor: "#B32237",
        },
      },
    },
  ],
  pathPrefix: "/aoudiamoncef.github.io"
}