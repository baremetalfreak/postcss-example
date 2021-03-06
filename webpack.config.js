const path = require("path");
const pathResolve = aPath => path.resolve(__dirname, aPath);

module.exports = {
  mode: "production",
  entry: pathResolve("./src/index.js"),
  output: {
    path: pathResolve("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
};
