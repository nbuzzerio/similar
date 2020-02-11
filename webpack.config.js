const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/similar.jsx'),
  output: {
    library: 'similar',
    libraryTarget: 'umd',
    filename: 'main.js',
    path: path.join(__dirname, '/client/dist'),
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use:
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', '@babel/env']
            }
          }
      }
    ]
  },
  watch:true
};