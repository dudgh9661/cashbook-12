const dotenv = require('dotenv');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: 'usage',
                  shippedProposals: true,
                  targets: {
                    browsers: ['>= 1%, not dead'],
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[contenthash].[ext]',
          },
        },
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/styles/base.scss";',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '우아한 가계부',
      template: paths.public + '/index.html',
      favicon: paths.public + '/favicon.png',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!app.bundle.js'],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css', '.scss', 'sass'],
    alias: {
      '@config': paths.config,
      '@assets': paths.assets,
      '@lib': paths.lib,
      '@store': paths.store,
      '@styles': paths.styles,
      '@utils': paths.utils,
      '@components': paths.components,
      '@pages': paths.pages,
    },
  },
};
