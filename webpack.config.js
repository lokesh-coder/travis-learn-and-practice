const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "source-map",
  devServer: {
    publicPath: path.join("/dist/")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
