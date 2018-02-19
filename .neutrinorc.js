const {basename} = require('path');

module.exports = {
  options: {
    output: 'web/assets/build'
  },
  use: [
    '@neutrinojs/airbnb-base',
    neutrino => neutrino.use('@neutrinojs/web', {
      html: false,
      publicPath: `/${basename(neutrino.options.output)}/`,
      devServer: {
        proxy: 'http://happylager.test'
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
