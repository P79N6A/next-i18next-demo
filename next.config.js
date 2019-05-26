const withSass = require("@zeit/next-sass");

require("dotenv").config();

module.exports = withSass({
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === "string"
        ? process.env.LOCALE_SUBPATHS
        : "none",
    NEXTJS_ENV: process.env.NEXTJS_ENV,
    NODE_API_DOMAIN: process.env.NODE_API_DOMAIN,
    CGI_API_DOMAIN: process.env.CGI_API_DOMAIN,
    CDN_BASE_URL: process.env.CDN_BASE_URL
  },
  // distDir: 'build', //兹定于构建目录,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader"
    });

    config.module.rules.push({
      test: /\.html$/,
      use: [{ loader: "html-loader", options: { minimize: true } }]
    });

    config.devtool = "source-map";

    return config;
  }
});
