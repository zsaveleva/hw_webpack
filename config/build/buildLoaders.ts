import webpack from "webpack";
import ReactRefreshBabel from "react-refresh/babel";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(ts|js)x?$/,
    use: [
      {
        loader: "babel-loader",
        options: {
          plugins: [options.isDev && ReactRefreshBabel].filter(Boolean),
        },
      },
    ],
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  };

  const imageLoader = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: "asset/resource",
  };

  const svgLoader = {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: "asset/inline",
  };

  return [babelLoader, cssLoader, imageLoader, svgLoader];
}
