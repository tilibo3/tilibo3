const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [ 'style-loader', 'css-loader' ]

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[
        {
          loader: 'babel-loader',
          options: {presets: ["env", "react"]}
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
}