import webpack from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";
const Dotenv = require('dotenv-webpack');
import path from "path";

export const buildPlugin = (paths: string):Array<webpack.ProgressPlugin> => {
    return [
        new HTMLWebpackPlugins({
            template: paths
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new Dotenv({
            path: path.resolve(__dirname, '../../.env'),
            systemvars: true
        }),
    ]
}