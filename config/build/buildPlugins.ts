import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {Configuration, DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {BuildOptions} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {

    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform),
            __ENV__: JSON.stringify(options.mode),
        }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        // Выносим проверку типов в отдельный процесс, не нагружая сборку
        plugins.push(new ForkTsCheckerWebpackPlugin())
        // для обновления браузера без перезагрузки страницы в режими dev подключаем plugin
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}