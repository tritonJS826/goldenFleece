import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
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
    port: process.env.GF_SERVER_API_PORT,
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({}),
    new CopyWebpackPlugin({
      patterns: [
      /**
       * Workaround with swagger-ui-express - without this file static swagger files not visible
       * issues:
       * https://github.com/scottie1984/swagger-ui-express/issues/90
       * https://stackoverflow.com/questions/62136515/swagger-ui-express-plugin-issue-with-webpack-bundling-in-production-mode
       */
        {from: "static/swagger", to: "."},
      ],
    }),
  ],
};
