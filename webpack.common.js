const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: path.join(process.cwd(), "./src/index.ts"),
  output: {
    filename: "[name]_[contenthash:8].bundle.js",
    path: path.join(process.cwd(), "./dist"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".html", "less", "css"],
    modules: ["node_modules"],
    alias: {
      "@containers": path.join(process.cwd(), "/src/containers"),
      "@utils": path.join(process.cwd(), "/src/utils"),
      "@components": path.join(process.cwd(), "/src/components"),
      "@src": path.join(process.cwd(), "/src"),
      "@static": path.join(process.cwd(), "/static"),
      "@stores": path.join(process.cwd(), "/src/stores")
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)[x]?$/,
        use: ["thread-loader", "babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                exportLocalsConvention: "camelCase",
              },
              url: true,
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[local]-[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
              url: true,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              url: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset",
        generator: {
          filename: "static/[name].[contenthash:8].[ext]",
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
    }),
    new CleanWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Brienne",
    }),
    new NodePolyfillPlugin(),
  ],
  stats: "errors-only",
};
