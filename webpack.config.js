module.exports = {
  entry: './src',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [
      // {
      //   test: /.js$/,
      //   excludes: /node_modules/,
      //   loader: 'babel-loader',
      // },
      {
        test: /^jquery$/,
        loaders: 'exports-loader?jQuery!script-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.(html(.md)?|dom\.js)$/,
        loaders: ['div-loader'],
      },
      {
        test: /\.html(.md)?$/,
        loaders: ['html-loader'],
      },
      {
        test: /\.md$/,
        loaders: ['markdown-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.eot$/,
        loaders: ['url-loader'],
      },
      {
        test: /\.(woff|ttf|mp3)$/,
        loaders: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.dom.js', '.md', '.html', '.html.md'],
    modulesDirectories: ['node_modules', 'web_loaders'],
  },
};
