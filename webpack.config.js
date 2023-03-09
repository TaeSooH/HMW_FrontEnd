var path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src/main/webapp/js"),
  entry: {
    main: "./MainPage.js",
    page1: "./Page1Page.js",
  },
  devtool: "sourcemaps",
  cache: true,
  output: {
    path: path.resolve(__dirname, "src/main/webapp/dist"),
    filename: "[name].bundle.js",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /.(sass|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
