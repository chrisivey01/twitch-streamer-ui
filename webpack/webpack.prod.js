const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require("copy-webpack-plugin");
const paths = require('./paths');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].js",
        path: paths.build
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public/index.html", to: "index.html" },
            ],
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: "public/index.html",
        })
    ],
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
});
