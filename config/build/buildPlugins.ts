import webpack from "webpack";
import Dotenv from "dotenv-webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ];
}
