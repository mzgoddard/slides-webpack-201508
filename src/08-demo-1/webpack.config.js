// webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/08-demo-1',
    filename: 'bundle.js',
  },
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
