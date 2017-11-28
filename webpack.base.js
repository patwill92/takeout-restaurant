module.exports = {
  // Tell webpack to run babel on every file it runs through
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react-plus'],
           plugins: ['transform-css-import-to-string']
        }
      }
    ]
  }
};
