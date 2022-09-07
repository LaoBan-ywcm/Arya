const { merge } = require("webpack-merge");
const wepackCommonConfig = require("./webpack.common");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(wepackCommonConfig, {
  mode: "production",
  devtool: "hidden-source-map",
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
});
