const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/similar.jsx'),
  output: {
    filename: 'main.js',
    path: path.join(__dirname, '/client/dist'),
    library: 'similar',
    libraryTarget: "umd"
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
  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }  
  },
  watch:true 
};