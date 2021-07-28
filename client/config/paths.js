const path = require('path');

module.exports = {
  config: path.resolve(__dirname),
  src: path.resolve(__dirname, '../src'),
  assets: path.resolve(__dirname, '../src/assets'),
  lib: path.resolve(__dirname, '../src/lib'),
  store: path.resolve(__dirname, '../src/store'),
  styles: path.resolve(__dirname, '../src/styles'),
  utils: path.resolve(__dirname, '../src/utils'),
  components: path.resolve(__dirname, '../src/views/components'),
  pages: path.resolve(__dirname, '../src/views/pages'),
  build: path.resolve(__dirname, '../../server/dist'),
  public: path.resolve(__dirname, '../public'),
};
