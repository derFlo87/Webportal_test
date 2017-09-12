var path = require("path");
const nodeModulesPath = path.resolve(__dirname, 'node_modules');


var SRC_DIR = path.resolve(__dirname, "src");



var config = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        include: SRC_DIR,
        loader: "babel-loader",

        exclude: [nodeModulesPath],
        query: {
          presets: ["react", "es2015","stage-2"]
        }
      },

      {
        test: /\.css$/,
        include: SRC_DIR,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }

    ]
  }


};

module.exports = config;
