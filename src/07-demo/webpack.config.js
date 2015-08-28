// webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/07-demo',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jpg$/,
        loaders: ['file-loader'],
      },
      {
        test: /\.inline.json$/,
        loaders: ['json-loader'],
      },
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
