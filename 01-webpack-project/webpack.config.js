const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    /* Telling webpack where to start looking for the files to bundle. */
    // entry: "/src/index.js",
    module: {
        rules: [
            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /.(css|scss)$/,
                /* Telling webpack to use the style-loader, css-loader, and sass-loader to bundle the
                css and scss files. */
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin()],
}