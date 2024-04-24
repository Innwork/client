import path from "path";
import {buildWebPackConfig} from "./config/build/buildWebPackConfig";
import {BuildEnv, BuildPaths} from "./config/build/type/config";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "main.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html")
    }

    const mode = env.mode || "development";
    const port = env.port || 3000;

    const isDev = mode === "development";

    return buildWebPackConfig({
        mode, paths, isDev, port
    })
}