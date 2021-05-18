const path = require("path");

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "babel-loader",
            }
          ],
          exclude: /node_modules\/.*/,
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, "public"),
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 9000,
    },
    devtool: (() => {
      return "cheap-module-source-map";
    })(),
  }
}