import path from "path";
import webpack from 'webpack';
import {BuildPaths} from "./config/build/types/types";
import {buildWebpack} from "./config/build/buildWebpack";

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
    port: number
    analyzer: boolean;
}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),

    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer
    })
    return config;
};