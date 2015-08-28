// webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/05-demo-2',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /^jquery$/,
        loaders: 'exports-loader?jQuery!script-loader',
      },
      {
        test: /\.hbs$/,
        loaders: ['handlebars-loader'],
      },
    ],
  },
};
