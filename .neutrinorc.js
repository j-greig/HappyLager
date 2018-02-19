const {basename} = require('path');

module.exports = {
  options: {
    output: 'web/assets/build'
  },
  use: [
    '@neutrinojs/airbnb-base',
    neutrino => neutrino.use('@neutrinojs/web', {
      html: false,
      publicPath: `/assets/build/`,
      devServer: {
        proxy: 'http://happylager.test'
      },
      image: {
        limit: 1
      },
      style: {
        test: /\.s?css$/,
        loaders: [
          {
            loader: 'sass-loader',
            useId: 'sass',
          }
        ]
      }
    })
  ]
};
