import webpack from "webpack";
import path from "path";

export const buildResolve = ():webpack.ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            '@src': path.resolve('src'),
        }
    }
}