// webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/10-demo',
    filename: 'bundle.js',
  },

  // Add a uglify plugin to uglify the whole output script.
  plugins: [
    new (require('webpack').optimize.UglifyJsPlugin)(),
  ],

  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
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
