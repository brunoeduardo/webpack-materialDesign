module.exports = [{
  context: __dirname + '/app',
  entry: {
    bundle: './index.js',
    bundleCss: './assets/styles/scss/app.scss'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/app',
    //filename: 'bundle.js',
   // filename: 'style-bundle.js',
  },
   module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  }
}];