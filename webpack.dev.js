require("dotenv").config();
const path = require("path");
const { merge } = require("webpack-merge");
const wepackCommonConfig = require("./webpack.common");

const PROXY_TARGET = process.env.PROXY_TARGET ?? "http://localhost:8000";

module.exports = merge(wepackCommonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
    static: {
      directory: path.join(process.cwd(), "/static"),
    },
  },
});
