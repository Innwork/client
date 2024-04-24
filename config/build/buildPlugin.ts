import webpack from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {CleanWebpackPlugin} from "clean-webpack-plugin";

export const buildPlugin = (path: string):Array<webpack.ProgressPlugin> => {
    return [
        new HTMLWebpackPlugins({
            template: path
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        })
    ]
}