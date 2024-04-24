import webpack from "webpack";
import {BuildOptions} from "./type/config";
import {buildPlugin} from "./buildPlugin";
import {buildLoader} from "./buildLoader";
import {buildResolve} from "./buildResolve";
import {buildDevServer} from "./buildDevServer";


export const buildWebPackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options

    return {
        mode,
        entry: paths.entry,

        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true, // Отчистка
        },

        plugins: buildPlugin(paths.html),

        module: {
            rules: buildLoader(options)
        },

        resolve: buildResolve(),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}