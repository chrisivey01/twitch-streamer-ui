<<<<<<< HEAD
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");
const paths = require('./paths')

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].js",
        path: paths.build
    },
    // plugins: [
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "src/assets", to: "assets" },
    //             { from: "public/html", to: "html" },
    //         ],
    //     }),
    // ],
    optimization: {
        minimize: true,
        // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
        // instead of having their own. This also helps with long-term caching, since the chunks will only
        // change when actual code changes, not the webpack runtime.
        runtimeChunk: {
            name: "runtime",
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    devtool: "eval-source-map",
});
=======
const merge = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode:"production",
    entry:"./src/index.js",
    output: {
        // path: "dist",
        filename:"index.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject: true,
            template:"src/index.html",
        })
    ],
    devtool: "eval-source-map",
})
>>>>>>> 951b1d7bb1bf8d2efa2d2d16c77da6e1ecf43441
