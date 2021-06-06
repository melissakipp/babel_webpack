const path = require('path')

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'
            // {
            //   "useBuiltIns": "usage", // alternative mode: "entry"
            //   "corejs": 3, // default would be 2
            //   "targets": "> 0.25%, not dead"
            //   // set your own target environment here (see Browserslist)
            // }
          ]
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hot: false,
    inline: false,
    stats: 'errors-only'
  }
};
