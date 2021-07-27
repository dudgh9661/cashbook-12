const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const paths = require('./paths');
const env = require('./env');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: paths.build,
    compress: true,
    hot: true,
    port: env.PORT || 8000,
  },
});
