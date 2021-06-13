const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development";
// khi la prodution thi xuat css dung theo trinh duyet ho tro
// Temporary workaround for 'browserslist' bug that is being patched in the near future
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";
module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,
  // defaults to "web", so only required for webpack-dev-server bug
  target: target,
  // entry not required if using `src/index.js` default
  // output not required if using `dist/main.js` default

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },

  // This plugin extracts CSS into separate files
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
