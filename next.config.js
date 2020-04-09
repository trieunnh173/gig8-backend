const path = require("path");
const glob = require("glob");
const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: "emit-file-loader",
        options: {
          name: "dist/[path][name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: ["babel-loader", "raw-loader", "postcss-loader"]
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "babel-loader",
          "raw-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["scss", "node_modules"]
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    );
    return config;
  }
};

const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const withFonts = require('next-fonts');
const withImages = require('next-images');
module.exports = withFonts(withSass(withImages(withCss({
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
}
))));
