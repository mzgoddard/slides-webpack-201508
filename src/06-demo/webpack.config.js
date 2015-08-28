// 05-4/demo/webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/06-demo',
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
      {
        test: /\.inline.json$/,
        loaders: ['json-loader'],
      },
    ],
  },
};
