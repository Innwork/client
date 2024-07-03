import webpack from "webpack";
import HTMLWebpackPlugins from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import DotenvWebpackPlugin from "dotenv-webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

export const buildPlugin = (paths: string): Array<webpack.WebpackPluginInstance> => {
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
        new DotenvWebpackPlugin({
            path: path.resolve(__dirname, '../../.env'),
            systemvars: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'robots.txt', to: '' }
            ],
        }),
    ];
}
