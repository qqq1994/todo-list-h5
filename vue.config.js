const production = process.env.NODE_ENV === "production";
const path = require("path");

module.exports = {
  publicPath: production ? "./" : "",
  productionSourceMap: false,
  devServer: {
    port: 8080
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/styles/variables.less")] // 引入全局样式变量
    }
  }
};
