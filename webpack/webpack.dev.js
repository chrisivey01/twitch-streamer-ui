<<<<<<< HEAD
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");
const paths = require('./paths');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        }),
    ],
    devServer: {
        contentBase: paths.src,
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
});
=======
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
    mode:"development",
    entry:"./src/index.js",
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new HtmlWebpackPlugin({
            inject:true,
            template: "src/index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true
     },
})
>>>>>>> 951b1d7bb1bf8d2efa2d2d16c77da6e1ecf43441
