const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
var AYLIENTextAPI = require("aylien_textapi")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});
module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
   devtool: 'source-map',
    stats: 'verbose',
    devServer: {
        port: 8080
      },
      output: {
        libraryTarget: 'var',
        library: 'Client'
        },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
              },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
