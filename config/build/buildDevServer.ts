import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        // если раздовать статику через nginx то надо делать проксирование на index.html
        historyApiFallback: true,
        // для обновления браузера без перезагрузки страницы в режими dev
        hot: true,
    }
}