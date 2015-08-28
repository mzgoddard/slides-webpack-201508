// webpack.config.js
module.exports = {
  // ...
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['css-loader'],
      },
      // ...
    ],
  },
};
