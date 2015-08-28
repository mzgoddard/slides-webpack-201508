// 05-4/demo/webpack.config.js
module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: 'dist/08-demo-2',
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
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/,
        loaders: ['file-loader'],
      },
    ],
  },
};
