import path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import webpack from "webpack";

const BUILD_DIRECTORY = path.resolve("./build");

let NODE_ENV = "development";
if (process.env.NODE_ENV === "production") {
  NODE_ENV = "production";
}

export default {
  mode: NODE_ENV,
  entry: "./src/index.ts",
  target: "node",
  devtool: "inline-source-map",
  devServer: {
    static: "./build",
    hot: true,
    port: process.env.PORT,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
  },
  output: {
    filename: "[name].js",
    path: BUILD_DIRECTORY,
    clean: true,
  },
  optimization: {minimizer: [new UglifyJsPlugin({include: /\.min\.js$/})]},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({}),
  ],
};
