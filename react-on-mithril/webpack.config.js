const path = require("path");

module.exports = (env) => {
  return {
    mode: "development",
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: (path) => {
            const test = /\.mjs$/.test(path);
            // console.log(`test: ${test}, path: ${path}`);
            return test;
          },
          exclude: /node_modules\/.*/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react","@babel/preset-env"],
              },
            },
          ],
        },
        {
          test: (path) => {
            const test = /\.js/.test(path);
            console.log(`test: ${test}, path: ${path}`);
            return test;
          },
          exclude: /node_modules\/.*/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      "modules": false,
                      "useBuiltIns": "entry",
                      "corejs": 3,
                    }
                  ],
                ],
                plugins: ["mjsx"]
              },
            },
          ],
        },
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